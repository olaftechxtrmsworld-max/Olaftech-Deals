import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#f97316] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">OT</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  OLAFTECH
                </p>
                <p className="text-[#f97316] text-[10px] font-semibold tracking-widest leading-none">DEALS</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Original Deals, Trusted Connections. Your one-stop shop for quality laptops, smartphones, and tech accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/cart', label: 'Cart' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm text-white/60 hover:text-[#f97316] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Categories</h4>
            <div className="flex flex-col gap-2">
              {['Laptops', 'Smartphones', 'Accessories', 'Power Banks', 'Gadgets'].map((cat) => (
                <Link
                  key={cat}
                  to={`/products?category=${cat.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-white/60 hover:text-[#f97316] transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/2349132696440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#f97316] transition-colors"
              >
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.437-9.884 9.893-9.884 2.645.001 5.13 1.03 6.988 2.89a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.44 9.884-9.891 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.892c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.478-8.413" />
                </svg>
                +234 913 269 6440
              </a>
              <a
                href="mailto:olaftechcompanies@gmail.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#f97316] transition-colors"
              >
                <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                olaftechcompanies@gmail.com
              </a>
              <p className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Badagry, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} OLAFTECH DEALS. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">Original Deals, Trusted Connections.</p>
        </div>
      </div>
    </footer>
  );
}
