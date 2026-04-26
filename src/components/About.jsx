import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

import dinukaImage from '../assets/team/dinuka.jpg';
import mihiranImage from '../assets/team/mihiran.jpg';
import dinithiImage from '../assets/team/dinithi.jpg';
import dhuwindhuImage from '../assets/team/du.jpg';
import rahulImage from '../assets/team/rahul.jpg';

const supervisors = [
  {
    name: 'Dr. Dinuka Wijendra',
    role: 'Supervisor',
    avatar: 'DW',
    image: dinukaImage,
    color: 'from-sky-400 to-blue-600',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    department: 'Department of Information Technology',
    email: 'dinuka.w@sliit.lk',
    linkedin: 'https://www.linkedin.com/in/dinuka-wijendra-b87002245/',
  },
  {
    name: 'Ms. Jenny Krishara',
    role: 'Co-Supervisor',
    avatar: 'JK',
    image: null,
    color: 'from-pink-400 to-rose-500',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    department: 'Department of Information Technology',
    email: 'mihiran@example.com',
    linkedin: 'https://www.linkedin.com/in/jenny-krishara-1a09a0111/',
  },
];

const teamMembers = [
  {
    name: 'Mihiran Nanayakkara',
    role: 'Team Leader',
    avatar: 'MN',
    image: mihiranImage,
    color: 'from-sky-400 to-cyan-500',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    department: 'Department of Information Technology',
    email: 'nanayakkaramihiran@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mihirannanayakkara/',
  },
  {
    name: 'Dinithi Piyathilaka',
    role: 'Team Member',
    avatar: 'DP',
    image: dinithiImage,
    color: 'from-emerald-400 to-green-500',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    department: 'Department of Information Technology',
    email: '@example.com',
    linkedin: 'https://www.linkedin.com/in/dinithi-piyathilaka-2001thath/',
  },
  {
    name: 'Dhuwindhu Rathnayaka',
    role: 'Team Member',
    avatar: 'DR',
    image: dhuwindhuImage,
    color: 'from-amber-400 to-orange-500',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    department: 'Department of Information Technology',
    email: 'dhuwindhusrathnayake@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dhuwindhu-shanuka/',
  },
  {
    name: 'Rahul Nanayakkara',
    role: 'Team Member',
    avatar: 'RN',
    image: rahulImage,
    color: 'from-violet-400 to-purple-500',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    department: 'Department of Information Technology',
    email: '@example.com',
    linkedin: 'https://www.linkedin.com/in/rahul-nanayakkara-7a014427b/',
  },
];

const roleColors = {
  Supervisor: 'bg-accent/10 text-accent border-accent/20',
  'Co-Supervisor': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
  'Team Leader': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  'Team Member': 'bg-primary/10 text-primary border-primary/20',
};

function PersonCard({ person, size = 'normal' }) {
  const avatarSize = size === 'large' ? 'w-28 h-28' : 'w-24 h-24';
  const textSize = size === 'large' ? 'text-3xl' : 'text-2xl';

  return (
    <div className="group bg-white rounded-2xl p-6 border border-border shadow-card card-hover text-center h-full flex flex-col items-center">
      <div
        className={`${avatarSize} rounded-full overflow-hidden bg-gradient-to-br ${person.color} flex items-center justify-center text-white font-display font-bold shadow-lg ring-4 ring-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
      >
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <span className={textSize}>{person.avatar}</span>
        )}
      </div>

      <div className="mt-4 flex flex-col items-center">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border mb-3 uppercase tracking-wider ${roleColors[person.role]}`}
        >
          {person.role}
        </span>

        <h4 className="font-display font-bold text-lg text-text-primary group-hover:text-primary transition-colors">
          {person.name}
        </h4>

        <p className="text-text-secondary text-sm mt-1">
          {person.institution}
        </p>

        <p className="text-text-muted text-xs mt-0.5">
          {person.department}
        </p>
      </div>

      <div className="mt-4 flex justify-center gap-3">
  {person.linkedin && (
    <a
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-lg bg-surface-alt flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary-50 transition-all duration-300"
      aria-label={`${person.name} LinkedIn profile`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  )}

  {person.email && (
    <a
      href={`mailto:${person.email}`}
      className="w-8 h-8 rounded-lg bg-surface-alt flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary-50 transition-all duration-300"
      aria-label={`Email ${person.name}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </a>
  )}
</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-surface-alt">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our"
          highlight="Team"
          subtitle="The passionate minds behind Akura"
        />

        {/* Supervisors */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {supervisors.map((person, i) => (
            <RevealOnScroll key={i} delay={`${i * 120}ms`}>
              <PersonCard person={person} size="large" />
            </RevealOnScroll>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <RevealOnScroll key={i} delay={`${i * 120}ms`}>
              <PersonCard person={member} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}