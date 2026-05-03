import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

// TODO: Replace with your actual Web3Forms access key
// Get your free key at https://web3forms.com (enter your email to receive it)
const WEB3FORMS_ACCESS_KEY = '81fe1597-8264-417b-bb2f-4098f8559d74';

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+94 71 367 6809', href: 'tel:+94713676809' },
  { icon: '✉️', label: 'Email', value: 'nanayakkaramihiran@gmail.com', href: 'mailto:nanayakkaramihiran@gmail.com' },
  { icon: '📍', label: 'Location', value: 'SLIIT, Malabe, Sri Lanka', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} — Akura Website`,
          from_name: 'Akura Website',
        }),
      });

      const result = await response.json();
      console.log('Web3Forms response:', result);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const buttonLabel = {
    idle: 'Send Message →',
    sending: 'Sending...',
    success: '✓ Message Sent!',
    error: 'Try Again →',
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
                  <input id="contact-name" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" className="w-full px-5 py-3.5 rounded-xl bg-surface-alt border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" required disabled={status === 'sending'} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-text-primary mb-2">Email Address</label>
                  <input id="contact-email" type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email address" className="w-full px-5 py-3.5 rounded-xl bg-surface-alt border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" required disabled={status === 'sending'} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-text-primary mb-2">Message</label>
                  <textarea id="contact-message" rows="5" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Write your message or query here..." className="w-full px-5 py-3.5 rounded-xl bg-surface-alt border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none" required disabled={status === 'sending'} />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                    <span>⚠️</span>
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Success message */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
                    <span>✅</span>
                    <span>Your message has been sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <button id="contact-submit" type="submit" disabled={status === 'sending'} className={`relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden group transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                  <span className="absolute inset-0 gradient-bg-warm" />
                  <span className="relative flex items-center justify-center gap-2">
                    {buttonLabel[status]}
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
