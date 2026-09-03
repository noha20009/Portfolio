import React, { useState } from 'react';
import { Mail, MapPin, Download, Send, CheckCircle2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';

const EMAIL = 'machkourinouhayla@gmail.com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le portfolio - ${form.name}`);
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`, '_blank');
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-2 font-headline">
            Contact
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
          <p className="text-lg text-on-surface-variant mt-4 max-w-2xl">
            Je suis actuellement à l'écoute de nouvelles opportunités. N'hésitez pas à me contacter !
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: info cards + socials */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="glass-card p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-accent shrink-0">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-on-surface-variant mb-1">Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=machkourinouhayla@gmail.com" target="_blank" rel="noreferrer" className="text-on-surface hover:text-accent transition-colors font-medium truncate block">
                    machkourinouhayla@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card p-6 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-tertiary shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-on-surface-variant mb-1">Localisation</p>
                  <p className="text-on-surface font-medium">Béni Mellal, Maroc</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card p-6 rounded-lg flex flex-col gap-4">
                <p className="text-on-surface font-semibold">Retrouvez-moi sur</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/nouhayla-machkouri-589217255"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/60 border border-glass-border rounded-lg text-on-surface hover:text-accent hover:border-accent transition-colors text-sm font-medium"
                  >
                    <FaLinkedin size={18} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/noha20009"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/60 border border-glass-border rounded-lg text-on-surface hover:text-accent hover:border-accent transition-colors text-sm font-medium"
                  >
                    <FaGithub size={18} /> GitHub
                  </a>
                </div>
                <a
                  href="/cv/nouhayla_Machkouri_CV.pdf"
                  download="nouhayla_Machkouri_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg text-xs font-semibold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/20 active:scale-95 self-start"
                >
                  <Download size={16} /> Mon CV complet
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right column: minimalist form */}
          <Reveal delay={0.1}>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold text-on-surface mb-6 font-headline">Envoyer un message</h3>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-b border-tertiary/40 bg-transparent py-2 text-on-surface focus:outline-none focus:ring-0 focus:border-accent transition-colors font-body placeholder:text-on-surface-variant/60"
                    placeholder="Nom complet"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b border-tertiary/40 bg-transparent py-2 text-on-surface focus:outline-none focus:ring-0 focus:border-accent transition-colors font-body placeholder:text-on-surface-variant/60"
                    placeholder="Adresse email"
                    type="email"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border-b border-tertiary/40 bg-transparent py-2 text-on-surface focus:outline-none focus:ring-0 focus:border-accent transition-colors resize-none font-body placeholder:text-on-surface-variant/60"
                    placeholder="Votre message"
                    rows="3"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                    <CheckCircle2 size={18} /> Gmail s'est ouvert avec votre message !
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white py-3 px-6 rounded text-xs font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/20 active:scale-95 self-start"
                >
                  Envoyer <Send size={14} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
