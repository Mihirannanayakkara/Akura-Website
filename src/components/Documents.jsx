import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

const documents = [
  { title: 'Topic Assessment Form', type: 'DOC', link: 'https://drive.google.com/file/d/1ZAmaL3AJxVKTt7Fz8axW8OZcg44lsT9C/view?usp=drive_link' },
  { title: 'Project Proposal', type: 'DOC', link: 'https://drive.google.com/drive/folders/1Ji03BtMdT8ssVVZon5FxlYGIB0S4BzFb?usp=drive_link' },
  { title: 'Proposal Presentation', type: 'PPT', link: 'https://drive.google.com/file/d/1R56X4h7QhaKv04y70Y-QA0y-N6DVYcxE/view?usp=drive_link' },
  { title: 'Checklist 1', type: 'DOC', link: 'https://drive.google.com/file/d/1ZifW6ltdhmcxtp_kxb7EFuNpM-099NHa/view?usp=drive_link' },
  { title: 'Progress Presentation - 1', type: 'PPT', link: 'https://docs.google.com/presentation/d/19faIcO0f7Gw_Y5jSWfS1wjNpiMMOWpmG/edit?usp=drive_link&ouid=113352622269529392763&rtpof=true&sd=true' },
  { title: 'Research Paper', type: 'PDF', link: 'https://drive.google.com/file/d/13iQWPAwCBXx1R3eW5VdT9iF_g2RhFQiq/view?usp=drive_link' },
  { title: 'Progress Presentation - 2', type: 'PPT', link: 'https://docs.google.com/presentation/d/1v9F9XxOHGzKwZBoQPac1aoGNoR2Bajd6/edit?usp=drive_link&ouid=113352622269529392763&rtpof=true&sd=true' },
  { title: 'Final Report & Presentation', type: 'PDF', link: 'https://drive.google.com/drive/folders/1rPpWPS8qu-3wbIQdVOfo-RCgtMXyxwD7?usp=drive_link' },
  { title: 'Checklist 2', type: 'DOC', link: 'https://docs.google.com/spreadsheets/d/1wOChm_YifM66NN8pWID_3bWGW_mpUNZz/edit?usp=drive_link&ouid=113352622269529392763&rtpof=true&sd=true' },
];

const typeConfig = {
  DOC: {
    gradient: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-50',
    text: 'text-sky-600',
    border: 'border-sky-200',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  PPT: {
    gradient: 'from-orange-400 to-red-500',
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-200',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h3a2 2 0 100-4H9v7" />
      </svg>
    ),
  },
  PDF: {
    gradient: 'from-rose-400 to-pink-600',
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-200',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
};

export default function Documents() {
  return (
    <section id="documents" className="relative py-24 sm:py-32 bg-surface-alt">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our" highlight="Documents" subtitle="Access all project documentation, presentations, and deliverables" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, i) => {
            const config = typeConfig[doc.type];
            return (
              <RevealOnScroll key={i} delay={`${i * 80}ms`}>
                <div className="group bg-surface-card rounded-2xl p-6 border border-border shadow-card card-hover h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-5`}>
                    {config.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg text-text-primary mb-5 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h4>
                  <div className="mt-auto w-full">
                    <a
                      href={doc.link}
                      className={`flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl border-2 ${config.border} ${config.text} hover:bg-gradient-to-r hover:${config.gradient} hover:text-white hover:border-transparent transition-all duration-300 text-sm font-semibold`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Document
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
