import { FolderKanban, ExternalLink, Pencil } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { useRouter } from '@/router';
import { projects } from '@/data/content';

const statusStyle: Record<string, string> = {
  placeholder: 'text-text-muted border-border bg-bg-soft',
  'coming-soon': 'text-gold border-gold/30 bg-gold/10',
  live: 'text-teal border-teal/30 bg-teal/10',
};

export function Work() {
  const { navigate } = useRouter();

  return (
    <>
      <Seo
        title="Work & Portfolio — Farhan Balouch"
        description="Projects and work by Farhan Balouch in AI, SEO, and online business. Placeholder cards ready to be filled with real projects."
        path="/work"
      />

      <section className="pt-32 pb-8 max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-gold/80 font-medium tracking-wide uppercase mb-4">Portfolio</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-4xl sm:text-5xl mb-6 leading-tight">
            Work & projects
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            A growing collection of projects across AI, SEO, and online business.
            Some of these are placeholders — real work is on its way.
          </p>
        </Reveal>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card-glow rounded-2xl border border-border bg-bg-card p-7 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-bg-soft border border-border flex items-center justify-center">
                    <FolderKanban className="w-5 h-5 text-gold" />
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusStyle[p.status]}`}>
                    {p.status === 'placeholder' ? 'Placeholder' : p.status === 'coming-soon' ? 'Coming soon' : 'Live'}
                  </span>
                </div>
                <span className="text-xs text-teal font-medium uppercase tracking-wide mb-2">{p.category}</span>
                <h2 className="font-display text-xl mb-3">{p.title}</h2>
                <p className="text-sm text-text-muted leading-relaxed flex-1">{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-soft transition-colors link-underline"
                  >
                    View project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Placeholder note */}
      <section className="py-12 max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-dashed border-border bg-bg-soft/30 p-7 flex items-start gap-4">
            <Pencil className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-text leading-relaxed">
                These cards are intentional placeholders. To fill them in, edit the
                project list — add real titles, descriptions, categories, and links.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="mt-3 text-sm text-gold hover:text-gold-soft transition-colors link-underline"
              >
                Get in touch about a project
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
