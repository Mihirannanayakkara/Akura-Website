import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

const stats = [
  { icon: '🗓️', value: '200+', label: 'DAYS WORKED', color: 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800' },
  { icon: '📑', value: '10', label: 'DOCUMENTS', color: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800' },
  { icon: '🎤', value: '4', label: 'PRESENTATIONS', color: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800' },
  { icon: '🏁', value: '8', label: 'MILESTONES', color: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800' },
];

const achievements = [
  {
    icon: '🏆',
    title: 'Global AI Tool Development Challenge 2026',
    platform: 'OneEarth Platform',
    desc: 'Recognized as the winner of the AI Tool Development Challenge 2026 on OneEarth, a global AI and sustainability innovation challenge organized by the School of Computing, Goldsmiths, University of London.',
    badge: 'Winner',
    gradient: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: '🎓',
    title: 'Research Paper Publication',
    platform: 'IEEE ISDFS 2026 - Boston, MA, USA',
    desc: 'Our vision for the future of early childhood education in Sri Lanka has been officially recognized and published by IEEE at the 2026 14th International Symposium on Digital Forensics and Security (ISDFS). Title: "Akura: Adaptive Sinhala Learning for Early Childhood Using Gesture, Voice, Emotion and Handwriting".',
    link: 'https://ieeexplore.ieee.org/document/11459055',
    badge: 'Published',
    gradient: 'from-sky-400 to-blue-600',
    bg: 'bg-sky-50',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our" highlight="Achievements" subtitle="Milestones of excellence and recognition along our research journey" />

        {/* Stats Bar */}
        <RevealOnScroll className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className={`rounded-2xl border ${stat.color} p-6 text-center group card-hover`}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-3xl md:text-4xl font-bold gradient-text-warm font-display">{stat.value}</span>
                </div>
                <span className="text-xs text-text-muted uppercase tracking-widest font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Achievement Cards */}
        <div className="space-y-6">
          {achievements.map((item, i) => (
            <RevealOnScroll key={i} delay={`${i * 150}ms`}>
              <div className="group relative overflow-hidden bg-surface-card rounded-3xl border border-border shadow-card card-hover">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`} />
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
                  <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.gradient}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-semibold mb-2">{item.platform}</p>
                    <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block mt-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                      >
                        Read the full paper here →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}