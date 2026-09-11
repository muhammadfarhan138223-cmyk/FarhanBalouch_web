import { useEffect, useState } from 'react';

const KEY = 'fb-intro-played';

/** A short cinematic 2.2s intro. Plays once per browser session. */
export function CinematicIntro() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Private mode — still show the intro for this visit.
    }
    setPlay(true);
    const timer = window.setTimeout(() => setPlay(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!play) return null;

  return (
    <div
      aria-hidden="true"
      className="intro-veil fixed inset-0 z-[100] pointer-events-none bg-bg overflow-hidden"
    >
      <div className="intro-fog absolute -bottom-1/4 left-[-15%] w-[130%] h-[80%] rounded-[50%] bg-white/15 blur-[90px]" />
      <div className="intro-fog absolute bottom-0 left-[10%] w-[70%] h-[45%] rounded-full bg-gold/15 blur-[80px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="intro-name font-display text-lg sm:text-2xl uppercase text-gold/90 tracking-[0.3em] text-center px-6">
          Farhan Balouch
        </p>
      </div>
    </div>
  );
}
