import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#domain', label: 'Domain' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#documents', label: 'Documents' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/5'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" onClick={(e) => handleClick(e, '#home')}>
            <div className="w-9 h-9 rounded-xl gradient-bg-warm flex items-center justify-center font-display font-bold text-white text-lg shadow-md group-hover:scale-110 transition-transform">
              A
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-text-primary">
              Akura
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === href.slice(1)
                    ? 'text-primary bg-primary-50'
                    : 'text-text-secondary hover:text-primary hover:bg-primary-50/50'
                }`}
              >
                {label}
                {activeSection === href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-0.5 bg-text-primary rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong border-t border-border px-4 py-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? 'text-primary bg-primary-50 border border-primary/20'
                  : 'text-text-secondary hover:text-primary hover:bg-primary-50/50'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
