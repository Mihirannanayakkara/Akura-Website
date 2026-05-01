import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+94 71 367 6809', href: 'tel:+94725916168' },
  { icon: '✉️', label: 'Email', value: 'nanayakkaramihiran@gmail.com', href: 'mailto:akura@sliit.lk' },
  { icon: '📍', label: 'Location', value: 'SLIIT, Malabe, Sri Lanka', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact" highlight="Us" subtitle="Have questions about our research? We'd love to hear from you." />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <RevealOnScroll className="lg:col-span-2" animation="animate-slide-right">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Get in Touch</h3>
                <p className="text-text-secondary leading-relaxed">Reach out to Team Akura for collaborations, inquiries, or feedback about our research project.</p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className="group flex items-center gap-4 bg-surface-card rounded-2xl p-4 border border-border shadow-card card-hover">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl group-hover:bg-primary-100 transition-colors">{item.icon}</div>
                    <div>
                      <div className="text-xs text-text-muted uppercase tracking-wider font-semibold">{item.label}</div>
                      <div className="text-text-primary font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Form */}
          <RevealOnScroll className="lg:col-span-3" animation="animate-slide-left">
            <form id="contact-form" onSubmit={handleSubmit} className="bg-surface-card rounded-3xl p-8 border border-border shadow-card-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-text-primary mb-2">Full Name</label>
                  <input id="contact-name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" className="w-full px-5 py-3.5 rounded-xl bg-surface-alt border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" required />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-text-primary mb-2">Email Address</label>
                  <input id="contact-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email address" className="w-full px-5 py-3.5 rounded-xl bg-surface-alt border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" required />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-text-primary mb-2">Message</label>
                  <textarea id="contact-message" rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Write your message or query here..." className="w-full px-5 py-3.5 rounded-xl bg-surface-alt border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none" required />
                </div>
                <button id="contact-submit" type="submit" className="relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30">
                  <span className="absolute inset-0 gradient-bg-warm" />
                  <span className="relative flex items-center justify-center gap-2">
                    {submitted ? '✓ Message Sent!' : 'Send Message →'}
                  </span>
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
