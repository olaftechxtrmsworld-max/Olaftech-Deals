import { Link, useNavigate } from 'react-router';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const featured = products.filter((p) => p.badge && p.badge !== 'Out of Stock').slice(0, 4);

const categoryItems = [
  {
    id: 'laptops',
    label: 'Laptops',
    icon: '💻',
    count: products.filter((p) => p.category === 'laptops').length,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 'smartphones',
    label: 'Smartphones',
    icon: '📱',
    count: products.filter((p) => p.category === 'smartphones').length,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    icon: '🎧',
    count: products.filter((p) => p.category === 'accessories').length,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 'power-banks',
    label: 'Power Banks',
    icon: '🔋',
    count: products.filter((p) => p.category === 'power-banks').length,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 'gadgets',
    label: 'Gadgets',
    icon: '🔊',
    count: products.filter((p) => p.category === 'gadgets').length,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=280&fit=crop&auto=format',
  },
];

const whyUs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '100% Original Products',
    desc: 'Every product we sell is sourced directly from authorized distributors, no counterfeits, no compromises.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Prices',
    desc: 'We benchmark prices against top suppliers daily to ensure you always get the best value in the market.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Expert Support',
    desc: 'Our knowledgeable team is available on WhatsApp and phone to help you find the perfect product.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Lagos same-day delivery and next-day nationwide for orders placed before 2PM.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a6e] via-[#1a3060] to-[#0f1f3d] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#f97316] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                <span className="text-sm font-medium">Original Deals, Trusted Connections</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Quality Tech.
                <br />
                <span className="text-[#f97316]">Better Deals.</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                Discover premium laptops, smartphones, and accessories at prices that make sense. Every product is genuine, every deal is real.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
                  Shop Now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/about')} className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 mt-10">
                {[
                  { value: '500+', label: 'Products Sold' },
                  { value: '14+', label: 'Categories' },
                  { value: '200+', label: 'Happy Clients' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-extrabold text-[#f97316]" style={{ fontFamily: 'Outfit, sans-serif' }}>{value}</p>
                    <p className="text-white/50 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=420&fit=crop&auto=format"
                  alt="Premium laptop on a clean desk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a6e]/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center text-white font-bold text-sm">OT</div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Verified Authentic</p>
                  <p className="text-xs text-gray-500">All products guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#1e3a6e]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Shop by Category
            </h2>
            <p className="text-gray-500 mt-2">Browse our curated selection of tech products</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoryItems.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 bg-gray-200"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a6e]/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{cat.label}</p>
                  <p className="text-white/70 text-xs">{cat.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1e3a6e]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Featured Products
              </h2>
              <p className="text-gray-500 mt-1">Hand-picked deals from our top inventory</p>
            </div>
            <Link to="/products" className="text-sm font-semibold text-[#f97316] hover:text-[#ea6c0a] transition-colors hidden sm:flex items-center gap-1">
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" onClick={() => navigate('/products')}>View All Products</Button>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1e3a6e]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Why Choose OLAFTECH DEALS?
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              We've built our reputation on trust, authenticity, and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1e3a6e] flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Ready to shop smarter?
            </h2>
            <p className="text-white/80 mt-2 text-lg">
              Browse our full catalog and find your perfect tech deal today.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Button
              size="lg"
              className="!bg-white !text-[#111111] !border-2 !border-[#111111] hover:!bg-gray-100 font-bold"
              onClick={() => navigate('/products')}
            >
              Browse Products
            </Button>
            <a
              href="https://wa.me/+2349132696440"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
