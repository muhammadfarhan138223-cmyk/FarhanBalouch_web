import { useEffect, useState } from 'react';
import { Compass, Heart, Rocket, ArrowRight, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Starfield } from '@/components/Starfield';
import { Reveal } from '@/components/Reveal';
import { SocialLinks } from '@/components/SocialLinks';
import { useRouter } from '@/router';
import { highlights, personSchema, projects, SITE } from '@/data/content';

const iconMap = { compass: Compass, heart: Heart, rocket: Rocket };

export function Home() {
  const { navigate } = useRouter();

  return (
    <>
      <Seo
        title="Farhan Balouch — From Ahmadpur East to AI, SEO & Online Business"
        description="The personal site of Farhan Balouch — originally from Ahmadpur East, Pakistan. His story, his work in AI and SEO, and a chatbot named Rawi who tells the tale."
        path="/"
      />

      {/* JSON-LD Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-bg">

        {/* Cinematic intro fog */}
        <style>{`
          @keyframes introFog {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(40px);
            }
            35% {
              opacity: 0.85;
            }
            70% {
              opacity: 0.55;
              transform: scale(1.15) translateY(-10px);
            }
            100% {
              opacity: 0;
              transform: scale(1.35) translateY(-35px);
            }
          }

          @keyframes heroFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes haloPulse {
            0%, 100% {
              opacity: .45;
              transform: scale(1);
            }
            50% {
              opacity: .8;
              transform: scale(1.04);
            }
          }

          @keyframes fogDrift {
            0%, 100% {
              transform: translateX(-8%) scale(1);
              opacity: .25;
            }
            50% {
              transform: translateX(8%) scale(1.12);
              opacity: .55;
            }
          }

          @keyframes revealHero {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-fog-intro {
            animation: introFog 3.2s ease-out forwards;
          }

          .hero-float {
            animation: heroFloat 6s ease-in-out infinite;
          }

          .hero-halo {
            animation: haloPulse 5s ease-in-out infinite;
          }

          .hero-fog-drift {
            animation: fogDrift 9s ease-in-out infinite;
          }

          .hero-reveal {
            animation: revealHero 1.2s ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-fog-intro,
            .hero-float,
            .hero-halo,
            .hero-fog-drift,
            .hero-reveal {
              animation: none !important;
            }
          }
        `}</style>

        <Starfield />

        {/* Main dark cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/45 to-bg pointer-events-none" />

        {/* Golden atmospheric light */}
        <div className="
          absolute
          right-[5%] top-[20%]
          w-[420px] h-[420px]
          rounded-full
          bg-gold/10
          blur-[130px]
          pointer-events-none
        " />

        {/* ================= INTRO FOG ================= */}

        <div className="
          hero-fog-intro
          absolute
          inset-0
          z-[60]
          pointer-events-none
          overflow-hidden
        ">
          <div className="
            absolute
            -bottom-20
            left-[-15%]
            w-[130%]
            h-[55%]
            rounded-[50%]
            bg-white/20
            blur-[80px]
          " />

          <div className="
            absolute
            bottom-[5%]
            left-[5%]
            w-[70%]
            h-[30%]
            rounded-full
            bg-gold/10
            blur-[70px]
          " />

          <div className="
            absolute
            bottom-[15%]
            right-[-10%]
            w-[60%]
            h-[25%]
            rounded-full
            bg-white/15
            blur-[80px]
          " />
        </div>

        {/* ================= HERO CONTENT ================= */}

        <div className="
          relative
          z-20
          max-w-7xl
          mx-auto
          min-h-screen
          px-5 sm:px-8 lg:px-12
          pt-28 sm:pt-32
          pb-20
          flex items-center
        ">

          {/* LEFT TEXT */}
          <div className="
            relative
            z-40
            w-full
            lg:w-[56%]
            hero-reveal
          ">

            <Reveal>
              <p className="
                text-xs sm:text-sm
                text-gold
                font-medium
                tracking-[0.28em]
                uppercase
                mb-5
              ">
                {SITE.origin}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="
                font-display
                text-[3.1rem]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.2rem]
                font-semibold
                leading-[0.98]
                tracking-tight
                max-w-4xl
              ">
                <span className="text-text">
                  I am
                </span>{" "}

                <span className="text-gradient-gold">
                  Farhan Balouch.
                </span>

                <br />

                <span className="text-text">
                  This is my story.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="
                mt-7
                text-base
                sm:text-lg
                text-text-muted
                max-w-xl
                leading-relaxed
              ">
                From a small house in Ahmadpur East to the world of technology,
                AI, and online business. A journey of dreams that shifted,
                losses that reshaped me, and a compass that still points forward.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="
                mt-8
                flex
                flex-wrap
                gap-3
              ">

                <button
                    
  onClick={() => navigate('/story')}
  className="
    group
    inline-flex
    items-center
    gap-2
    px-5
    py-3
    rounded-xl
    bg-gold
    text-bg
    font-medium
    hover:bg-gold-soft
    hover:scale-[1.03]
    transition-all
    shadow-[0_10px_35px_rgba(212,168,75,0.18)]
  "
>
  Read my story
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>

<button
  onClick={() => navigate('/about')}
  className="
    group
    inline-flex
    items-center
    gap-2
    px-5
    py-3
    rounded-xl
    bg-black/40
    backdrop-blur-md
    border
    border-white/20
    text-white
    font-medium
    hover:bg-black/55
    hover:border-gold/70
    hover:text-gold
    hover:scale-[1.03]
    transition-all
    shadow-[0_10px_35px_rgba(0,0,0,0.35)]
  "
>
  About me
  <ArrowRight className="
    w-4 h-4
    group-hover:translate-x-1
    transition-transform
  " />
</button>


              </div>
            </Reveal>

          </div>

          {/* ================= FARHAN ================= */}

          <div className="
            absolute
            z-10
            pointer-events-none

            /* Mobile */
            left-1/2
            -translate-x-1/2
            bottom-0
            w-[125%]
            h-[65%]

            /* Desktop */
            lg:left-auto
            lg:right-[-5%]
            lg:translate-x-0
            lg:w-[57%]
            lg:h-[90%]
            lg:bottom-0

            flex
            items-end
            justify-center
          ">

            {/* Golden halo */}
            <div className="
              hero-halo
              absolute
              bottom-[25%]
              left-1/2
              -translate-x-1/2
              w-[300px]
              h-[300px]
              sm:w-[420px]
              sm:h-[420px]
              lg:w-[500px]
              lg:h-[500px]
              rounded-full
              border
              border-gold/40
              shadow-[0_0_70px_rgba(212,168,75,0.12)]
            ">

              {/* Small golden light */}
              <div className="
                absolute
                top-[8%]
                right-[18%]
                w-2
                h-2
                rounded-full
                bg-gold
                shadow-[0_0_18px_rgba(212,168,75,1)]
              " />

            </div>

            {/* Portrait */}
            <div className="hero-float relative z-20 h-full flex items-end justify-center">

              <img
                src="/file_0000000088f482118226c0157ec13471-removebg-preview.png"
                alt="Farhan Balouch"
                className="
                  h-[88%]
                  sm:h-[92%]
                  lg:h-[96%]
                  w-auto
                  max-w-none
                  object-contain
                  object-bottom
                  drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]
                "
              />

            </div>

            {/* Bottom fog around body */}
            <div className="
              hero-fog-drift
              absolute
              z-30
              bottom-0
              left-[-15%]
              w-[130%]
              h-[24%]
              rounded-[50%]
              bg-white/10
              blur-[45px]
            " />

            {/* Dark fade so body disappears naturally */}
            <div className="
              absolute
              z-40
              bottom-0
              left-0
              right-0
              h-[22%]
              bg-gradient-to-t
              from-bg
              via-bg/70
              to-transparent
            " />

          </div>

        </div>

        {/* ================= MOUNTAIN / BOTTOM ATMOSPHERE ================= */}

        <div className="
          absolute
          bottom-0
          left-0
          right-0
          h-48
          z-30
          pointer-events-none
          bg-gradient-to-t
          from-bg
          via-bg/70
          to-transparent
        " />

      </section>

      {/* About / Where I started */}
      <section id="about" className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                A little about me
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Where I started.
                <br />
                <span className="text-gradient-gold">Where I am going.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="card-glow h-full rounded-2xl border border-white/[0.07] bg-bg-card/60 p-6 sm:p-7">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-text-muted">{item.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/about" className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-gold-soft">
                About me <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/story" className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-bg/30 px-5 py-3 text-sm font-medium text-text backdrop-blur-sm transition-all hover:border-gold/70 hover:text-gold">
                Read my story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.05] blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">My story</p>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl">
                More than a<br /><span className="text-gradient-gold">portfolio.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-text-muted sm:text-base">
                My story starts in Ahmadpur East — with childhood, school, dreams, friendships, confusion, loss, change, technology, and the decision to keep moving forward.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.07] bg-bg-card/50 p-6 text-center">
                <p className="font-display text-4xl text-gold">15</p><p className="mt-2 text-xs uppercase tracking-widest text-text-muted">Chapters</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-bg-card/50 p-6 text-center">
                <p className="font-display text-4xl text-gold">1</p><p className="mt-2 text-xs uppercase tracking-widest text-text-muted">Journey</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-bg-card/50 p-6 text-center">
                <p className="font-display text-4xl text-gold">∞</p><p className="mt-2 text-xs uppercase tracking-widest text-text-muted">Chapters ahead</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}><div className="mt-10 text-center"><p className="font-display text-xl italic text-text-muted">“The story isn't over — this is only the part written so far.”</p></div></Reveal>
          <Reveal delay={260}>
            <div className="mt-10 text-center">
              <a href="/story" className="group inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-bg/30 px-5 py-3 text-sm font-medium text-text backdrop-blur-sm transition-all hover:border-gold/70 hover:text-gold">
                Read all 15 chapters <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="border-t border-white/[0.06] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">What I build</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">My work.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-text-muted">Real projects I've built, shipped, or am currently developing.</p>
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-text-muted">AI • Web • Online Business</span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 sm:p-7">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/[0.04] blur-[60px] transition-all group-hover:bg-gold/[0.08]" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.16em] text-gold">{project.category}</span>
                      {project.status === 'live' ? (
                        <span className="rounded-full border border-teal/20 bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-soft">Live</span>
                      ) : (
                        <span className="rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">Coming Soon</span>
                      )}
                    </div>
                    <h3 className="mt-6 font-display text-3xl">{project.title}</h3>
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-text-muted">{project.description}</p>
                    {project.status === 'live' && project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft">
                        Visit project <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted"><Sparkles className="h-4 w-4 text-gold" />Currently in development</span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-7">
              <div><p className="font-display text-2xl text-text">And many more to come.</p><p className="mt-2 text-sm text-text-muted">Movie Hub is only the next chapter.</p></div>
              <a href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft">View all work <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rawi */}
      <section id="rawi" className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.045] blur-[130px]" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-bg-card/80 to-bg-soft/40 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10"><MessageCircle className="h-7 w-7 text-gold" /></div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Meet Rawi</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">Don't just read the story.<br /><span className="text-gradient-gold">Ask about it.</span></h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-text-muted sm:text-base">Rawi is the AI storyteller of this website. Ask about Farhan's childhood, dreams, projects, journey, or anything contained in his story.</p>
                <button type="button" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-bg transition-all hover:bg-gold-soft">
                  Talk to Rawi <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact + social links */}
      <section id="contact" className="border-t border-white/[0.06] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Stay connected</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">Let's keep in touch.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-text-muted">Follow the journey, see what I'm building, or simply explore the story.</p>
              </div>
              <SocialLinks className="justify-end" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-bg/30 px-5 py-3 text-sm font-medium text-text hover:border-gold/70 hover:text-gold">Contact me <ArrowRight className="h-4 w-4" /></a>
              <a href="mailto:muhammadfarhan138223@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-text-muted hover:text-gold hover:border-gold/40">Email me</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
