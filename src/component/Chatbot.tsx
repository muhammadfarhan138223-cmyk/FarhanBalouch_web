import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const GREETING =
  "Assalam-o-alaikum! I'm Rawi — the storyteller of Farhan's journey. Ask me about where he's from, what he once dreamed of, or where he's headed. Main yahan hoon sunane ke liye. ✨";

const FALLBACK =
  "Seems the storytelling lamp has run out of oil right now — the chat backend isn't reachable. Please try again later, or explore the My Story pages to read Farhan's journey directly.";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading || failed) return;
    setInput('');

    const userMsg: Msg = { role: 'user', content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setLoading(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!supabaseUrl || !anonKey) throw new Error('missing-config');

      const res = await fetch(`${supabaseUrl}/functions/v1/rawi`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${anonKey}`,
        },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error(`http-${res.status}`);
      const data = await res.json();
      const reply: string | undefined = data?.reply;
      if (!reply || typeof reply !== 'string') throw new Error('bad-shape');

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setFailed(true);
      setMessages((prev) => [...prev, { role: 'assistant', content: FALLBACK }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const reset = () => {
    setFailed(false);
    setMessages([{ role: 'assistant', content: GREETING }]);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-soft text-bg shadow-lg shadow-gold/20 hover:scale-105 active:scale-95 transition-transform"
        aria-label={open ? 'Close chat' : 'Open chat with Rawi'}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm h-[60vh] max-h-[480px] flex flex-col rounded-2xl border border-border bg-bg-card/95 backdrop-blur-xl shadow-2xl chat-pop overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border/60 bg-bg-soft/60">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-gold/20 to-teal/20 border border-gold/30">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-base font-semibold text-text leading-tight">Rawi</p>
              <p className="text-xs text-text-muted">Farhan's storyteller</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-text-muted hover:text-text transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} msg-in`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gold/15 text-text rounded-br-sm border border-gold/20'
                      : 'bg-bg-soft text-text-muted rounded-bl-sm border border-border/50'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start msg-in">
                <div className="bg-bg-soft border border-border/50 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-text-muted" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-text-muted" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-text-muted" />
                </div>
              </div>
            )}
            {failed && (
              <button
                onClick={reset}
                className="block mx-auto text-xs text-teal hover:text-teal-soft transition-colors mt-1"
              >
                Try again
              </button>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border/60 p-3 bg-bg-soft/40">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Ask Rawi about Farhan's story…"
                className="flex-1 resize-none bg-bg border border-border rounded-xl px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-gold/40 transition-colors max-h-24"
                disabled={loading}
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading || failed}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/15 text-gold border border-gold/20 hover:bg-gold/25 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
