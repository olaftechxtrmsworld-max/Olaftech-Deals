import { useState } from 'react';
import Button from '../components/Button';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+234 913 269 6440',
    href: 'https://wa.me/2349132696440',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+234 913 269 6440',
    href: 'tel:+2349132696440',
    color: 'text-[#1e3a6e]',
    bg: 'bg-blue-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'olaftechcompanies@gmail.com',
    href: 'mailto:olaftechcompanies@gmail.com',
    color: 'text-[#f97316]',
    bg: 'bg-orange-50',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Badagry, Lagos, Nigeria',
    href: 'https://maps.google.com/?q=Badagry+Lagos',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi OLAFTECH DEALS!\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n${form.message}`
    );
    window.open(`https://wa.me/2349132696440?text=${msg}`, '_blank');
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a6e] to-[#0f1f3d] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Get in Touch</h1>
          <p className="text-white/60 max-w-lg mx-auto">
            Have a question or want to place an order? We're available on WhatsApp, phone, and email, reach out any time.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e3a6e] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Information
            </h2>
            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map(({ icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
                >
                  <div className={`w-12 h-12 rounded-lg ${bg} ${color} flex items-center justify-center shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-semibold text-gray-900">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2349132696440"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-base transition-colors shadow-sm"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with Us on WhatsApp
            </a>

            {/* Business Hours */}
            <div className="mt-6 bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Business Hours</h3>
              <div className="flex flex-col gap-1.5 text-sm">
                {[
                  { day: 'Monday – Friday', hours: '8:00 AM – 7:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-600">{day}</span>
                    <span className="font-semibold text-gray-900">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#1e3a6e] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Send Us a Message
            </h2>
            {sent && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium">
                ✓ Message sent via WhatsApp! We'll respond shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ahmad Ishola"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ahmad@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Laptop inquiry, Price check..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent resize-none"
                />
              </div>
              <Button variant="primary" size="lg" type="submit" fullWidth>
                Send Message via WhatsApp
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
