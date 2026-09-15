import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-150 ${
      isActive ? 'text-[#f97316]' : 'text-white/80 hover:text-white'
    }`;

  return (
    <nav className="bg-[#1e3a6e] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#f97316] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">OT</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                OLAFTECH
              </p>
              <p className="text-[#f97316] text-[10px] font-semibold tracking-widest leading-none">
                DEALS
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/products" className={linkClass}>Products</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/cart')}
              className="relative text-white/80 hover:text-white transition-colors"
              aria-label="Shopping cart"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-9H5.4M7 13l-1.4 7h12.8M7 13H5.4M17 21a2 2 0 100-4 2 2 0 000 4zm-10 0a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#f97316] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#142a52] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/products', label: 'Products', end: false },
              { to: '/about', label: 'About', end: false },
              { to: '/contact', label: 'Contact', end: false },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold py-1 ${isActive ? 'text-[#f97316]' : 'text-white/80'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
