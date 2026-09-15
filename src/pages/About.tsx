import { useNavigate } from 'react-router';
import Button from '../components/Button';

const values = [
  {
    icon: '🎯',
    title: 'Our Mission',
    desc: 'To provide every Nigerian professional, student, and entrepreneur with access to genuine, high-quality technology at prices that reflect real value, not inflated margins.',
  },
  {
    icon: '🤝',
    title: 'Our Commitment',
    desc: 'Every product we sell is 100% original and sourced from verified distributors. Our reputation is built on trust, and we protect that above everything else.',
  },
  {
    icon: '🚀',
    title: 'Our Vision',
    desc: 'To become Nigeria\'s most trusted tech retailer, known for authentic products, expert advice, and exceptional after-sales support.',
  },
];

// const team = [
//   {
//     name: 'Olaf Emmanuel',
//     role: 'Founder & CEO',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format&facepad=2',
//     bio: '8 years of experience in the Nigerian tech retail market.',
//   },
//   {
//     name: 'Adaeze Nwosu',
//     role: 'Head of Sales',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format&facepad=2',
//     bio: 'Passionate about connecting customers with the right products.',
//   },
//   {
//     name: 'Emeka Obi',
//     role: 'Technical Advisor',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format&facepad=2',
//     bio: 'Certified IT professional with expertise across all major brands.',
//   },
// ];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a6e] to-[#0f1f3d] text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f97316] font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            We Are OLAFTECH DEALS
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            A Lagos-based technology retailer dedicated to delivering original gadgets, laptops, and accessories at competitive prices, backed by honest expertise and trusted service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=420&fit=crop&auto=format"
                alt="OLAFTECH DEALS store"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a6e]/30 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#1e3a6e] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Our Story
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
                <p>
                  OLAFTECH DEALS was founded with a simple belief: everyone deserves access to quality technology without the fear of buying counterfeits or overpaying.
                </p>
                <p>
                  What started as a small operation helping friends and colleagues find the best laptop deals quickly grew into a trusted business serving hundreds of customers across Lagos and beyond.
                </p>
                <p>
                  Today, we stock premium laptops from HP, Dell, and Lenovo; smartphones including iPhone and Samsung; and a wide range of accessories, all sourced directly from authorized distributors.
                </p>
                <p>
                  Our tagline <strong className="text-[#1e3a6e]">"Original Deals, Trusted Connections"</strong> isn't just a phrase, it's the promise we make to every customer, every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1e3a6e] text-center mb-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1e3a6e] text-center mb-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map(({ name, role, image, bio }) => (
              <div key={name} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1e3a6e]/10 bg-gray-100">
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>{name}</h3>
                <p className="text-sm text-[#f97316] font-semibold mb-2">{role}</p>
                <p className="text-sm text-gray-500">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="bg-[#1e3a6e] text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Products Sold' },
              { value: '200+', label: 'Happy Customers' },
              { value: '14+', label: 'Product Categories' },
              { value: '3+', label: 'Years in Business' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-[#f97316]" style={{ fontFamily: 'Outfit, sans-serif' }}>{value}</p>
                <p className="text-white/60 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Ready to experience the OLAFTECH difference?
          </h2>
          <p className="text-gray-500 mb-6">Browse our catalog or reach out. We're here to help you find exactly what you need.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => navigate('/products')}>Shop Now</Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
