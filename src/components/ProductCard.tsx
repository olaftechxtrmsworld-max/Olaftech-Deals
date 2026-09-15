import { useNavigate } from 'react-router';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import Button from './Button';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div
      className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col cursor-pointer group"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-md ${
              product.badge === 'Out of Stock'
                ? 'bg-gray-200 text-gray-600'
                : product.badge === 'Best Seller' || product.badge === 'Top Rated'
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
          <span className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-md bg-red-500 text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide mb-1 capitalize">
          {product.category.replace('-', ' ')}
        </p>
        <h3 className="font-bold text-gray-900 mb-1 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">{product.shortDescription}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-[#1e3a6e]">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <Button
          variant="primary"
          size="sm"
          fullWidth
          disabled={!product.inStock}
          onClick={(e) => {
            e.stopPropagation();
            if (product.inStock) addToCart(product);
          }}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
}
