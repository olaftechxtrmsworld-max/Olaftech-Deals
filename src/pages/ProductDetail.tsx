import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);
  const related = product ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4) : [];

  if (!product || !id) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Button variant="secondary" onClick={() => navigate('/products')}>Back to Products</Button>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  function handleAddToCart() {
    if (!product) return;
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const whatsappMessage = encodeURIComponent(
    `Hi OLAFTECH DEALS! I'm interested in ordering:\n\n*${product.name}*\nPrice: ${formatPrice(product.price)}\nQuantity: ${quantity}\n\nPlease confirm availability.`
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1e3a6e] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#1e3a6e] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 lg:h-[420px] object-cover"
            />
            {product.badge && product.badge !== 'Out of Stock' && (
              <span
                className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg ${
                  product.badge === 'Best Seller' || product.badge === 'Top Rated'
                    ? 'bg-[#1e3a6e] text-white'
                    : product.badge === 'Best Value'
                    ? 'bg-green-600 text-white'
                    : 'bg-[#f97316] text-white'
                }`}
              >
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-red-500 text-white">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-[#f97316] uppercase tracking-wide capitalize mb-2">
              {product.category.replace('-', ' ')}
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {product.name}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-5">{product.description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-3xl font-extrabold text-[#1e3a6e]">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className={`w-2.5 h-2.5 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-400'}`}
              />
              <span className={`text-sm font-semibold ${product.inStock ? 'text-green-700' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock — Ready to ship' : 'Currently Out of Stock'}
              </span>
            </div>

            {/* Quantity */}
            {product.inStock && (
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg font-bold cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                variant="primary"
                size="lg"
                disabled={!product.inStock}
                onClick={handleAddToCart}
                className="flex-1"
              >
                {added ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-9H5.4M7 13l-1.4 7h12.8M7 13H5.4M17 21a2 2 0 100-4 2 2 0 000 4zm-10 0a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    Add to Cart
                  </>
                )}
              </Button>
              <a
                href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Specifications
              </h2>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex items-start gap-4 px-4 py-3 text-sm ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <span className="font-semibold text-gray-600 w-32 shrink-0">{key}</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-extrabold text-[#1e3a6e] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
