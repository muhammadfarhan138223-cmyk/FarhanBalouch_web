import { Facebook, Github, Instagram, Linkedin, Music2, Youtube } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { socials } from '@/data/content';

const icons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music2,
  Facebook: Facebook,
};

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {socials.map((s) => {
        const Icon = icons[s.label] ?? Music2;
        return (
          <li key={s.label}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} — ${s.handle}`}
              title={s.label}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-gold hover:border-gold/50 hover:scale-110 transition-all"
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
