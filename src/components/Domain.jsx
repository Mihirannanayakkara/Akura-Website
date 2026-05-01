import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';
import literatureSurveyImage from '../assets/literature-survey-akura.svg';
import mainObjectiveImage from '../assets/main-objective-akura.svg';

const literatureSurvey = {
  eyebrow: 'Project Scope',
  title: 'Literature Survey',
  image: literatureSurveyImage,
  imageAlt: 'Akura multimodal Sinhala learning literature survey illustration',
  paragraphs: [
    'Early childhood literacy development depends on timely feedback, active interaction, and sustained learner engagement. Prior studies show that mobile learning tools are most effective when they support guided interaction rather than passive content delivery.',
    'Existing Sinhala kindergarten learning applications still lack real-time corrective feedback and adaptive personalization. Previous work in handwriting tutoring, emotion-aware learning, gesture-based numeracy, and child speech recognition shows strong potential, but these solutions are usually isolated.',
    'Akura addresses this gap by combining real-time Sinhala handwriting guidance, emotion-aware lesson adaptation, gesture-based numeracy, and pronunciation feedback into one on-device learning platform for children aged 3–6.',
  ],
  stats: [
    { value: '4', label: 'Learning Areas Reviewed' },
    { value: '3–6', label: 'Target Age Group' },
    { value: 'On-device', label: 'Deployment Focus' },
  ],
  references: [
    {
      id: '[1]',
      text: 'Kuhl, P. K. Early language acquisition: Cracking the speech code.',
    },
    {
      id: '[8]',
      text: 'Sathintha et al. A mobile-based application for enhancing kindergarten learning.',
    },
    {
      id: '[9]',
      text: 'Danna and Velay. Basic and supplementary sensory feedback in handwriting.',
    },
    {
      id: '[15]',
      text: 'Fernández-Herrero. Affective intelligent tutoring systems and educational impact.',
    },
    {
      id: '[20]',
      text: 'Yuliana and Suharjito. Fingermath hand gesture game for early mathematics learning.',
    },
    {
      id: '[25]',
      text: 'Shahin et al. Wav2Vec2-based mispronunciation detection and diagnosis.',
    },
  ],
};

const researchGaps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    title: 'Static Content Only',
    desc: "Existing Sinhala learning applications mainly provide fixed lessons, images, sounds, and simple quizzes. They do not adapt to the child's performance or provide meaningful guidance during the learning process, making the experience less interactive and less personalized.",
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: 'No Stroke-Order Tutoring',
    desc: 'Current Sinhala handwriting tools mostly evaluate the final written character rather than the writing process. They do not provide stroke-by-stroke correction, direction guidance, or immediate feedback while the child is practicing Sinhala letters.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'No Emotion Adaptation',
    desc: "Most learning platforms ignore the child's emotional state during activities. They provide the same content and difficulty level even when a child is frustrated, sad, confused, or disengaged, which can reduce motivation and learning effectiveness.",
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Low-End Device Gap',
    desc: 'Many AI-based educational tools depend on high-performance devices, cloud processing, or continuous internet access. This makes them less suitable for Sri Lankan children who may rely on basic mobile devices or have limited connectivity.',
    color: 'bg-module-gesture/10 text-module-gesture',
  },
];

const modules = [
  {
    icon: '✍️',
    color: 'from-sky-400 to-blue-600',
    bgLight: 'bg-sky-50 dark:bg-sky-950/40',
    title: 'Handwriting Validation',
    tech: 'Vector-based Path Sampling',
    desc: 'Real-time stroke-order tutoring and character validation for Sinhala letters using efficient vector-based path sampling algorithms optimized for mobile.',
  },
  {
    icon: '😊',
    color: 'from-pink-400 to-rose-600',
    bgLight: 'bg-rose-50 dark:bg-rose-950/40',
    title: 'Emotion-Aware Personalization',
    tech: 'MobileNetV2',
    desc: 'Detects child emotions through facial expressions and dynamically adjusts difficulty, pacing, and encouragement for optimal engagement.',
  },
  {
    icon: '🤟',
    color: 'from-amber-400 to-orange-600',
    bgLight: 'bg-amber-50 dark:bg-amber-950/40',
    title: 'Gesture-Based Adaptive Numeracy',
    tech: 'MediaPipe',
    desc: 'Hand gesture recognition enables intuitive, touchless numeracy learning through interactive counting and number formation exercises.',
  },
  {
    icon: '🗣️',
    color: 'from-emerald-400 to-green-600',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    title: 'Sinhala Pronunciation Assessment',
    tech: 'Wav2Vec 2.0 & BC-ResNet-4',
    desc: 'Fine-tuned speech models assess Sinhala pronunciation accuracy with phoneme-level feedback for corrective guidance.',
  },
];

export default function Domain() {
  return (
    <section id="domain" className="relative py-24 sm:py-32 bg-surface-alt">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research"
          highlight="Domain"
          subtitle="Exploring the intersection of AI and early childhood education to bridge the literacy gap in Sri Lanka"
        />

        {/* Literature Survey */}
        {/* Literature Survey */}
<RevealOnScroll className="mb-20">
  <div className="relative overflow-hidden rounded-3xl bg-surface-card border border-border shadow-card-lg">
    <div className="absolute top-0 left-0 right-0 h-1 gradient-bg-warm" />
    <div className="absolute -top-24 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
    <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />

    <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 p-8 sm:p-10 lg:p-12">
      {/* Left side content */}
      <div>
        <p className="text-text-secondary text-sm sm:text-base mb-2">
          {literatureSurvey.eyebrow}
        </p>

        <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
          {literatureSurvey.title}
        </h3>

        <div className="h-1 w-20 rounded-full gradient-bg-warm mt-5 mb-10" />

        <div className="space-y-5">
          {literatureSurvey.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-text-secondary text-sm sm:text-base leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {literatureSurvey.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-surface-alt border border-border-light p-4 shadow-card"
            >
              <p className="font-display text-2xl font-bold gradient-text-warm">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        
      </div>

      {/* Right side image */}
      <div className="relative lg:border-l lg:border-border lg:pl-10 flex items-center">
        <div className="relative w-full">
          <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-accent/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl bg-surface-alt border border-border shadow-card-lg">
            <img
              src={literatureSurvey.image}
              alt={literatureSurvey.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>

          
        </div>
      </div>
    </div>
  </div>
</RevealOnScroll>

        {/* Research Gap */}
        <div className="mb-20">
          <RevealOnScroll>
            <h3 className="font-display text-3xl font-bold text-text-primary mb-2">
              Research <span className="gradient-text-warm">Gap</span>
            </h3>
            <div className="h-1 w-16 rounded-full gradient-bg-warm mb-10" />
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {researchGaps.map((gap, i) => (
              <RevealOnScroll key={i} delay={`${i * 100}ms`}>
                <div className="group bg-surface-card rounded-2xl p-6 border border-border shadow-card card-hover h-full">
                  <div className={`w-12 h-12 rounded-xl ${gap.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {gap.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary mb-2">{gap.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{gap.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Research Objectives & Methodology */}
        {/* Research Objectives & Methodology */}
<div>
  <RevealOnScroll>
    <div className="mb-10">
      <p className="text-text-secondary text-sm sm:text-base mb-2">
        Research Objectives
      </p>

      <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        Objectives & <span className="gradient-text-warm">Methodology</span>
      </h3>

      <div className="h-1 w-20 rounded-full gradient-bg-warm mb-8" />
    </div>
  </RevealOnScroll>

  {/* Main Objective */}
  <RevealOnScroll className="mb-12">
    <div className="relative overflow-hidden rounded-3xl bg-surface-card border border-border shadow-card-lg p-8 sm:p-10">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bg-warm" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

      <div className="relative grid lg:grid-cols-[0.35fr_1fr] gap-8 items-start">
        <div>
  <div className="relative overflow-hidden rounded-3xl bg-surface-alt border border-border-light shadow-card p-4 mb-6">
    <img
      src={mainObjectiveImage}
      alt="Akura adaptive Sinhala learning platform illustration"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

        <div>
          <p className="text-text-secondary text-sm sm:text-base leading-8">
            This research aims to develop an adaptive mobile-based Sinhala
            learning platform for early childhood education in Sri Lanka by
            leveraging multimodal artificial intelligence, gesture recognition,
            speech processing, facial emotion recognition, and real-time
            handwriting validation to support children aged 3–6 in learning
            Sinhala letters, pronunciation, numeracy, and writing skills. The
            platform provides personalized, age-appropriate learning experiences
            through interactive activities, immediate corrective feedback,
            emotion-aware lesson adaptation, and gamified engagement methods,
            with the goal of improving early Sinhala literacy and numeracy
            outcomes through an accessible on-device educational solution.
          </p>

          
        </div>
      </div>
    </div>
  </RevealOnScroll>

  {/* Sub Objectives */}
  <RevealOnScroll>
    <div className="mb-8">
      <h4 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
        Sub <span className="gradient-text-warm">Objectives</span>
      </h4>

      <p className="text-text-secondary text-sm sm:text-base leading-7 mt-3 max-w-3xl">
        Each sub objective focuses on one core learning challenge in early
        Sinhala education and is implemented through a dedicated AI-based
        module.
      </p>
    </div>
  </RevealOnScroll>

  <div className="grid sm:grid-cols-2 gap-6">
    {modules.map((mod, i) => (
      <RevealOnScroll key={i} delay={`${i * 120}ms`}>
        <div className="group relative bg-surface-card rounded-2xl p-6 border border-border shadow-card card-hover overflow-hidden h-full">
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${mod.color}`} />

          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className={`${mod.bgLight} w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                {mod.icon}
              </div>

              <div>
                <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Sub Objective {String(i + 1).padStart(2, '0')}
                </span>

                <h4 className="font-display font-bold text-lg text-text-primary">
                  {mod.title}
                </h4>

                <span className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${mod.color} text-white`}>
                  {mod.tech}
                </span>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed">
              {mod.desc}
            </p>
          </div>
        </div>
      </RevealOnScroll>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
