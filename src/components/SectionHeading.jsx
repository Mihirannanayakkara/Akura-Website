import { RevealOnScroll } from './useScrollReveal';

export default function SectionHeading({ title, highlight, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <RevealOnScroll className={`mb-16 ${alignClass}`}>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="text-text-primary">{title} </span>
        <span className="gradient-text-warm">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
        <div className="h-1 w-20 rounded-full gradient-bg-warm" />
      </div>
    </RevealOnScroll>
  );
}
