import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { useRouter } from '@/router';
import { storyChapters, phases } from '@/data/content';

export function StoryHub() {
  const { navigate } = useRouter();

  return (
    <>
      <Seo
        title="My Story — Farhan Balouch"
        description="The story of Farhan Balouch, from Ahmadpur East to AI and online business. Told in fifteen chapters: childhood, school, loss, love, dreams, and the pivot to technology."
        path="/story"
      />

      <section className="pt-32 pb-12 max-w-4xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-gold/80 font-medium tracking-wide uppercase mb-4">My Story</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            A journey that started with a dream
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Fifteen chapters of a life — from a small house in Ahmadpur East to the
            world of technology, AI, and online business. In order, not decoration.
            Read straight through, or jump to the part that calls to you.
          </p>
        </Reveal>
      </section>

      {/* Phased timeline */}
      <section className="py-12 max-w-4xl mx-auto px-5 sm:px-8">
        {phases.map((phase, phaseIdx) => {
          const phaseChapters = storyChapters.filter(
            (ch) => ch.part >= phase.startPart && ch.part <= phase.endPart
          );

          return (
            <div key={phase.id} className="mb-12 last:mb-0">
              {/* Phase label */}
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-body font-semibold uppercase tracking-wider text-teal">
                    {phase.label}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-teal/30 to-transparent" />
                </div>
              </Reveal>

              {/* Chapter timeline within phase */}
              <div className="relative">
                <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-teal/20 to-transparent" />

                {phaseChapters.map((ch, i) => (
                  <Reveal key={ch.slug} delay={i * 60}>
                    <button
                      onClick={() => navigate(`/story/${ch.slug}`)}
                      className="group relative w-full text-left pl-12 sm:pl-16 pb-6 last:pb-0"
                    >
                      {/* Node */}
                      <div className="absolute left-0 sm:left-2 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-bg-card border-2 border-gold/40 group-hover:border-gold group-hover:scale-110 transition-all">
                        <span className="text-xs font-display font-semibold text-gold">{ch.part}</span>
                      </div>

                      <article className="card-glow rounded-xl border border-border bg-bg-card p-5 sm:p-6">
                        <p className="text-xs text-teal font-medium uppercase tracking-wide mb-2">{ch.period}</p>
                        <h2 className="font-display text-lg sm:text-xl mb-1.5 group-hover:text-gold transition-colors leading-snug">
                          {ch.title}
                        </h2>
                        <p className="text-sm text-text-muted/70 mb-3">{ch.subtitle}</p>
                        <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{ch.excerpt}</p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                          Read chapter
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </article>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
