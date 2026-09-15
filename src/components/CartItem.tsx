import type { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
}

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded-lg bg-gray-50 shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-[#f97316] uppercase tracking-wide capitalize mb-0.5">
          {item.product.category.replace('-', ' ')}
        </p>
        <h4 className="font-bold text-gray-900 leading-snug line-clamp-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {item.product.name}
        </h4>
        <p className="text-[#1e3a6e] font-bold mt-1">{formatPrice(item.product.price)}</p>

        <div className="flex items-center gap-3 mt-2">
          {/* Quantity controls */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg font-bold cursor-pointer"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-900">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-lg font-bold cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.product.id)}
            className="text-red-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
            aria-label="Remove item"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-right shrink-0">
        <p className="font-bold text-gray-900">{formatPrice(item.product.price * item.quantity)}</p>
        {item.quantity > 1 && (
          <p className="text-xs text-gray-400">{item.quantity} × {formatPrice(item.product.price)}</p>
        )}
      </div>
    </div>
  );
}
