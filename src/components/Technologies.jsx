import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

const technologies = [
  {
    name: 'Flutter',
    desc: 'Cross-platform framework for the mobile application and processing path objects.',
    color: 'from-sky-400 to-blue-600',
    bg: 'bg-sky-50',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.357zm0 11.066L7.93 17.48l4.244 4.242h7.37l-5.23-5.23-5.227 5.23" style={{color: '#02569B'}} />
      </svg>
    ),
    // Use a cleaner Flutter bird icon
    svgIcon: (
      <svg viewBox="0 0 256 317" className="w-10 h-10">
        <defs>
          <linearGradient x1="4%" y1="27%" x2="75%" y2="52%" id="flutter_a">
            <stop stopColor="#1A237E" stopOpacity=".4" offset="0%" />
            <stop stopColor="#1A237E" stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <polygon fill="#47C5FB" points="157.665 0.000 0.000 157.665 48.8 206.024 255.27 0.000" />
        <polygon fill="#47C5FB" points="156.567 145.396 72.15 229.828 120.796 278.478 169.87 229.403 255.27 145.000" />
        <polygon fill="#00569E" points="120.796 278.478 200.26 316.933 255.27 261.928 169.87 229.403" />
        <polygon fill="url(#flutter_a)" points="120.796 278.478 158.068 267.068 144.07 253.063" opacity=".8" />
      </svg>
    ),
  },
  {
    name: 'Android',
    desc: 'Native OS targeted for low latency and real-time on-device processing.',
    color: 'from-green-400 to-green-600',
    bg: 'bg-green-50',
    svgIcon: (
      <svg viewBox="0 0 256 301" className="w-10 h-10">
        <path d="M174.875 35.462l16.97-29.393a3.624 3.624 0 00-6.275-3.624L168.37 31.998c-12.2-5.565-25.93-8.674-40.37-8.674-14.44 0-28.17 3.109-40.37 8.674L70.43 2.445a3.624 3.624 0 00-6.275 3.624l16.97 29.393C37.76 58.238 8.342 100.476 0 150.462h256c-8.342-50.086-37.76-92.224-81.125-114.9zM70 113.124a14 14 0 110-28 14 14 0 010 28zm116 0a14 14 0 110-28 14 14 0 010 28z" fill="#3DDC84" />
        <path d="M0 150.462v119.124c0 14.358 11.64 26 26 26h16v38a24 24 0 1048 0v-38h76v38a24 24 0 1048 0v-38h16c14.36 0 26-11.642 26-26V150.462H0zM220 150.462v129.124a24 24 0 10-48 0V150.462h48zm-184 0v129.124a24 24 0 01-48 0V150.462h48z" fill="#3DDC84" opacity=".7" />
      </svg>
    ),
  },
  {
    name: 'MediaPipe',
    desc: 'Real-time, on-device hand landmark detection for gesture recognition.',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
    svgIcon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#0097A7" />
        <circle cx="24" cy="24" r="14" fill="#00BCD4" />
        <circle cx="24" cy="24" r="8" fill="#fff" />
        <circle cx="24" cy="14" r="3" fill="#FF6F00" />
        <circle cx="33" cy="28" r="3" fill="#FF6F00" />
        <circle cx="15" cy="28" r="3" fill="#FF6F00" />
        <line x1="24" y1="17" x2="24" y2="24" stroke="#FF6F00" strokeWidth="1.5" />
        <line x1="30.5" y1="26.5" x2="24" y2="24" stroke="#FF6F00" strokeWidth="1.5" />
        <line x1="17.5" y1="26.5" x2="24" y2="24" stroke="#FF6F00" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'TensorFlow Lite',
    desc: 'Quantizing and running lightweight ML models directly on mobile devices.',
    color: 'from-orange-400 to-orange-600',
    bg: 'bg-orange-50',
    svgIcon: (
      <svg viewBox="0 0 256 274" className="w-10 h-10">
        <path d="M145.726 0l109.16 63.239v126.476L191.652 221.4v-63.235l63.236-31.618V63.239L145.726 0z" fill="#FF6F00" />
        <path d="M145.726 0v63.239L82.49 94.856v63.308l-63.234-36.616V63.239L145.726 0z" fill="#FF6F00" />
        <path d="M82.49 158.164v63.308l63.236 36.616V194.78l-63.234-36.616z" fill="#FF6F00" />
        <path d="M82.49 221.472l-63.234-36.616v-63.308l63.234 36.616v63.308z" fill="#C55A11" />
        <path d="M145.726 258.088l-63.234-36.616v-63.308l63.234 36.616v63.308z" fill="#C55A11" />
      </svg>
    ),
  },
  {
    name: 'MobileNetV2',
    desc: 'Neural network backbone for the emotion-aware personalization module.',
    color: 'from-purple-400 to-violet-600',
    bg: 'bg-purple-50',
    svgIcon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="4" y="12" width="8" height="8" rx="2" fill="#7C3AED" />
        <rect x="4" y="28" width="8" height="8" rx="2" fill="#7C3AED" />
        <rect x="20" y="6" width="8" height="8" rx="2" fill="#8B5CF6" />
        <rect x="20" y="20" width="8" height="8" rx="2" fill="#8B5CF6" />
        <rect x="20" y="34" width="8" height="8" rx="2" fill="#8B5CF6" />
        <rect x="36" y="12" width="8" height="8" rx="2" fill="#A78BFA" />
        <rect x="36" y="28" width="8" height="8" rx="2" fill="#A78BFA" />
        <line x1="12" y1="16" x2="20" y2="10" stroke="#7C3AED" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="20" y2="24" stroke="#7C3AED" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="20" y2="38" stroke="#7C3AED" strokeWidth="1.5" opacity=".4" />
        <line x1="12" y1="32" x2="20" y2="10" stroke="#7C3AED" strokeWidth="1.5" opacity=".4" />
        <line x1="12" y1="32" x2="20" y2="24" stroke="#7C3AED" strokeWidth="1.5" />
        <line x1="12" y1="32" x2="20" y2="38" stroke="#7C3AED" strokeWidth="1.5" />
        <line x1="28" y1="10" x2="36" y2="16" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="28" y1="10" x2="36" y2="32" stroke="#8B5CF6" strokeWidth="1.5" opacity=".4" />
        <line x1="28" y1="24" x2="36" y2="16" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="28" y1="24" x2="36" y2="32" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="28" y1="38" x2="36" y2="16" stroke="#8B5CF6" strokeWidth="1.5" opacity=".4" />
        <line x1="28" y1="38" x2="36" y2="32" stroke="#8B5CF6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Wav2Vec 2.0',
    desc: 'Speech recognition architecture fine-tuned for Sinhala pronunciation assessment.',
    color: 'from-teal-400 to-cyan-600',
    bg: 'bg-teal-50',
    svgIcon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="2" y="18" width="4" height="12" rx="2" fill="#0D9488" />
        <rect x="9" y="14" width="4" height="20" rx="2" fill="#14B8A6" />
        <rect x="16" y="8" width="4" height="32" rx="2" fill="#0D9488" />
        <rect x="23" y="12" width="4" height="24" rx="2" fill="#14B8A6" />
        <rect x="30" y="6" width="4" height="36" rx="2" fill="#0D9488" />
        <rect x="37" y="14" width="4" height="20" rx="2" fill="#14B8A6" />
        <rect x="44" y="18" width="4" height="12" rx="2" fill="#0D9488" />
        <circle cx="24" cy="24" r="22" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 3" opacity=".3" />
      </svg>
    ),
  },
  {
    name: 'BC-ResNet-4',
    desc: 'Lightweight model for speech classification on resource-constrained devices.',
    color: 'from-rose-400 to-red-600',
    bg: 'bg-rose-50',
    svgIcon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#F43F5E" opacity=".1" stroke="#F43F5E" strokeWidth="1.5" />
        <rect x="14" y="14" width="20" height="20" rx="4" fill="#F43F5E" opacity=".2" stroke="#F43F5E" strokeWidth="1" />
        <rect x="19" y="19" width="10" height="10" rx="2" fill="#F43F5E" />
        <circle cx="12" cy="12" r="2" fill="#F43F5E" />
        <circle cx="36" cy="12" r="2" fill="#F43F5E" />
        <circle cx="12" cy="36" r="2" fill="#F43F5E" />
        <circle cx="36" cy="36" r="2" fill="#F43F5E" />
        <line x1="13.5" y1="13.5" x2="19" y2="19" stroke="#F43F5E" strokeWidth="1" />
        <line x1="34.5" y1="13.5" x2="29" y2="19" stroke="#F43F5E" strokeWidth="1" />
        <line x1="13.5" y1="34.5" x2="19" y2="29" stroke="#F43F5E" strokeWidth="1" />
        <line x1="34.5" y1="34.5" x2="29" y2="29" stroke="#F43F5E" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core"
          highlight="Technologies"
          subtitle="The technology stack powering Akura's on-device intelligence"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {technologies.map((tech, i) => (
            <RevealOnScroll key={i} delay={`${i * 80}ms`}>
              <div className="group bg-white rounded-2xl p-5 border border-border shadow-card card-hover h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl ${tech.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.svgIcon}
                </div>

                {/* Name */}
                <h4 className="font-display font-bold text-base text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>

                {/* Description */}
                <p className="text-text-muted text-xs leading-relaxed">
                  {tech.desc}
                </p>

                {/* Colored bottom accent */}
                <div className={`mt-auto pt-4 w-10 h-1 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
