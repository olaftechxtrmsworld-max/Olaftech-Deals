import { createBrowserRouter, Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <p className="text-6xl font-extrabold text-[#1e3a6e]" style={{ fontFamily: 'Outfit, sans-serif' }}>404</p>
      <h2 className="text-2xl font-bold text-gray-900">Page not found</h2>
      <p className="text-gray-500">The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-2 text-[#f97316] font-semibold hover:underline">Go back home</a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: Products },
      { path: 'products/:id', Component: ProductDetail },
      { path: 'cart', Component: Cart },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
