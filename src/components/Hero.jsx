import { useEffect, useState } from 'react';
import { RevealOnScroll } from './useScrollReveal';

function TypeWriter({ texts, speed = 80, deleteSpeed = 40, pause = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large teal blob top-right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px]" />
        {/* Coral blob bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[60px]" />
        {/* Yellow accent */}
        <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full bg-module-gesture/5 blur-[60px]" />

        {/* Decorative floating shapes */}
        <div className="absolute top-[15%] left-[8%] w-4 h-4 rounded-full bg-primary/20 animate-float" />
        <div className="absolute top-[25%] right-[12%] w-3 h-3 rounded-full bg-accent/25 animate-float-slow" />
        <div className="absolute bottom-[30%] left-[15%] w-5 h-5 rounded-lg bg-module-gesture/15 animate-float rotate-45" />
        <div className="absolute top-[60%] right-[8%] w-3 h-3 rounded-full bg-module-pronunciation/20 animate-float-slow" />
        <div className="absolute bottom-[20%] right-[25%] w-4 h-4 rounded-lg bg-primary/15 animate-float rotate-12" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-primary-dark font-semibold">
                  Research Project 2024/25
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="gradient-text-warm">Akura</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll>
              <p className="mt-3 text-xl sm:text-2xl font-display font-semibold text-text-primary leading-snug">
                Adaptive Sinhala Learning for Early Childhood
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="mt-3 h-8 text-lg font-medium text-primary font-display">
                <TypeWriter
                  texts={[
                    'Gesture Recognition',
                    'Voice Assessment',
                    'Emotion Detection',
                    'Handwriting Validation',
                  ]}
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <p className="mt-5 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed">
                A novel multimodal mobile platform that delivers an interactive and personalized
                Sinhala learning experience for children aged 3–6, optimized for low-end mobile devices.
              </p>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#domain"
                  className="group relative px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
                >
                  <span className="absolute inset-0 gradient-bg-warm" />
                  <span className="relative flex items-center gap-2">
                    Explore Research
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#about"
                  className="group px-7 py-3.5 rounded-xl font-semibold text-text-secondary border-2 border-border hover:border-primary hover:text-primary hover:bg-primary-50 transition-all duration-300"
                >
                  Meet the Team
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Hero image - full cover */}
          <RevealOnScroll animation="animate-slide-left" className="relative">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
              <img
                src="/images/hero-bg.png"
                alt="Children learning Sinhala letters, numbers and preschool activities with Akura app"
                className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover object-center"
              />
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats bar */}
        <RevealOnScroll className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '4', label: 'AI Modules', color: 'bg-primary/10 text-primary' },
              { value: '3-6', label: 'Age Range', color: 'bg-accent/10 text-accent' },
              { value: '85%', label: 'Literacy Gap', color: 'bg-module-gesture/10 text-module-gesture' },
              { value: 'On-Device', label: 'Processing', color: 'bg-module-pronunciation/10 text-module-pronunciation' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-card card-hover text-center border border-border-light">
                <div className={`text-2xl font-bold font-display ${stat.color.split(' ')[1]}`}>{stat.value}</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
