import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

const documents = [
  { title: 'Project Proposal', type: 'DOC', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgBU4K5qccxCTb09tHR1ULSyAQ9MGBpmnJigZaXrXu1rjCM?e=ppWGfZ' },
  { title: 'Checklist 1', type: 'DOC', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgB1Pfb3uFsMTq3R1cafUqHgAWql9LVlDFR-Vqpj_pY9pPo?e=gJnntr' },
  { title: 'Progress Presentation - 1', type: 'PPT', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgBBoo00JRuTTIr2QCMC7KM8ATGiiV_p2LqC5g5kAHjC9pM?e=jO3Kat' },
  { title: 'Research Paper', type: 'PDF', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgBwVJVRjS_eQ5xdAfoSx7tZAaIZC-kjRJJEHamqbfE_VZA?e=HWL0Dg' },
  { title: 'Progress Presentation - 2', type: 'PPT', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgBtWw5vIoO-QIsaIIYgy5sMAeXuswO_4NAkNvoNYcnJxCM?e=Kdl1tf' },
  { title: 'Final Report & Presentation', type: 'PDF', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgA1p4OI0o2XSKuPTes3LsC9Abh0NpQJ2aqj5qXuG571y9M?e=jnoJPT' },
  { title: 'Checklist 2', type: 'DOC', link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22197528_my_sliit_lk/IgCm9mS2rhavR7yQtQNaQkfEAWRqnV9wgcaMavnSn_CFtEY?e=Rxm4s1' },
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
                <div className="group bg-white rounded-2xl p-6 border border-border shadow-card card-hover h-full flex flex-col items-center text-center">
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
