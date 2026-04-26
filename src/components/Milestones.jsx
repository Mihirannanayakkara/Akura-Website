import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

const milestones = [
  { date: 'Sep 2025', title: 'Project Proposal', desc: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.', marks: 12, status: 'completed' },
  { date: 'Jan 2026', title: 'Progress Presentation I', desc: 'Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.', marks: 15, status: 'completed' },
  { date: 'March 2026', title: 'Progress Presentation II', desc: 'Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.', marks: 18, status: 'completed' },
  { date: 'May 2026', title: 'Research Paper', desc: 'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.', marks: 10, status: 'completed' },
  { date: 'May 2026', title: 'Final Report', desc: 'Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also final report.', marks: 19, status: 'in-progress' },
  { date: 'May 2026', title: 'Final Presentation & Viva', desc: 'Viva is held individually to assess each member\'s contribution to the project.', marks: 20, status: 'upcoming' },
  { date: 'April 2026', title: 'Website Assessment', desc: 'The Website helps to promote our research project and reveals all details related to the project.', marks: 2, status: 'upcoming' },
  { date: 'April 2026', title: 'Checklist', desc: 'Checklist for Status documents 1 & 2.', marks: 2, status: 'upcoming' },
  { date: 'April 2026', title: 'Logbook', desc: 'Status of the project is validated through the Logbook.', marks: 2, status: 'upcoming' },
];

function StatusBadge({ status }) {
  const styles = {
    completed: 'bg-green-50 text-green-600 border-green-200',
    'in-progress': 'bg-amber-50 text-amber-600 border-amber-200',
    upcoming: 'bg-gray-50 text-gray-500 border-gray-200',
  };
  const labels = { completed: 'Completed', 'in-progress': 'In Progress', upcoming: 'Upcoming' };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'completed' ? 'bg-green-500' : status === 'in-progress' ? 'bg-amber-500 animate-pulse' : 'bg-gray-400'}`} />
      {labels[status]}
    </span>
  );
}

export default function Milestones() {
  return (
    <section id="milestones" className="relative py-24 sm:py-32">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our" highlight="Milestones" subtitle="Our journey through the academic evaluation process" />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <RevealOnScroll key={i} animation={isLeft ? 'animate-slide-right' : 'animate-slide-left'}>
                  <div className="relative flex items-start md:items-center">
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-5 h-5 rounded-full border-4 bg-white ${
                        m.status === 'completed' ? 'border-green-500 shadow-lg shadow-green-200'
                        : m.status === 'in-progress' ? 'border-amber-500 shadow-lg shadow-amber-200 animate-pulse'
                        : 'border-gray-300'
                      }`} />
                    </div>
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className="bg-white rounded-2xl p-6 border border-border shadow-card card-hover group">
                        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                          <span className="px-3 py-1 rounded-lg gradient-bg-warm text-white text-xs font-bold shadow-sm">{m.date}</span>
                          <StatusBadge status={m.status} />
                        </div>
                        <h4 className="font-display font-bold text-xl text-text-primary mb-2 group-hover:text-primary transition-colors">{m.title}</h4>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{m.desc}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 rounded-full bg-surface-elevated overflow-hidden">
                            <div className="h-full rounded-full gradient-bg-warm transition-all duration-1000"
                              style={{ width: m.status === 'completed' ? '100%' : m.status === 'in-progress' ? '60%' : '0%' }} />
                          </div>
                          <span className="text-xs text-text-muted font-semibold whitespace-nowrap">Marks: {m.marks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
