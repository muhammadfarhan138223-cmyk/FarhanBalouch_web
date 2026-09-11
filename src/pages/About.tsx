import { MapPin, Compass, Cpu, Search, TrendingUp, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { useRouter } from '@/router';
import { SITE } from '@/data/content';

export function About() {
  const { navigate } = useRouter();

  const interests = [
    { icon: Cpu, label: 'Artificial Intelligence', desc: 'Tools and systems that learn.' },
    { icon: Search, label: 'SEO', desc: 'Making things findable.' },
    { icon: TrendingUp, label: 'Online Business', desc: 'Building ventures on the web.' },
  ];

  return (
    <>
      <Seo
        title="About — Farhan Balouch"
        description="A short professional bio of Farhan Balouch: originally from Ahmadpur East, Pakistan, now working in AI, SEO, and online business."
        path="/about"
      />

      <section className="pt-32 pb-16 max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="text-sm text-gold/80 font-medium tracking-wide uppercase mb-4">About</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-4xl sm:text-5xl mb-8 leading-tight">
            A brief introduction
          </h1>
        </Reveal>

        <div className="space-y-6 text-lg text-text-muted leading-relaxed">
          <Reveal delay={120}>
            <p>
              I'm <span className="text-text">Farhan Balouch</span>, originally from{' '}
              <span className="text-text">{SITE.origin}</span> — a small town in
              southern Punjab where I was born, grew up, and carried a restless
              feeling that I had to do something with my life.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              As a teenager I dreamed of becoming a doctor — not for prestige, but
              because I wanted to heal the person I loved most. I worked at medical
              stores during school holidays, learned the basics of medicine, and
              felt the dream growing stronger. Then loss changed everything, and the
              dream reshaped itself.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Today my work lives at the intersection of AI, SEO, and online
              business. The shift wasn't a rejection of the old dream — it was the
              same instinct, given a wider canvas. Technology lets me reach beyond
              geography, learn without a classroom, and build things that scale.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              This site exists to put a real, searchable identity on the map. When
              someone looks up my name, I want them to find <em>this</em> — the
              actual story, in my own words — not a scattered collection of random
              profiles. The story isn't over. It's only the part written so far.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Interests */}
      <section className="py-16 max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl mb-8 flex items-center gap-3">
            <Compass className="w-6 h-6 text-teal" />
            What I work with
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-3">
          {interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 100}>
              <div className="card-glow rounded-xl border border-border bg-bg-card p-6 h-full">
                <it.icon className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-display text-lg mb-1.5">{it.label}</h3>
                <p className="text-sm text-text-muted">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Origin callout */}
      <section className="py-16 max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-border bg-bg-card p-8 flex items-start gap-4">
            <MapPin className="w-6 h-6 text-teal shrink-0 mt-1" />
            <div>
              <p className="text-text leading-relaxed">
                <span className="text-gold font-medium">{SITE.origin}</span> — a small
                town in the Bahawalpur district of southern Punjab. Where the horizon
                is flat and the night sky is full of stars. It's where this story
                starts.
              </p>
              <button
                onClick={() => navigate('/story')}
                className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft transition-colors link-underline"
              >
                Read the full story
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
