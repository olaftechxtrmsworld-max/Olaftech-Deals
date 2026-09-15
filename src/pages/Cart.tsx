import { useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
}

export default function Cart() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const whatsappMessage = encodeURIComponent(
    `Hi OLAFTECH DEALS! I'd like to order the following items:\n\n${cart
      .map((item) => `• *${item.product.name}* × ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`)
      .join('\n')}\n\n*Total: ${formatPrice(cartTotal)}*\n\nPlease confirm availability and delivery.`
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-5 px-4">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl">🛒</div>
        <h2 className="text-2xl font-extrabold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Your cart is empty
        </h2>
        <p className="text-gray-500 text-center max-w-sm">
          Looks like you haven't added any products yet. Browse our catalog and find something great!
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/products')}>
          Shop Now
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1e3a6e] text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Shopping Cart
          </h1>
          <p className="text-white/60 mt-1">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-gray-900">Your Items</h2>
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700 transition-colors font-medium cursor-pointer"
              >
                Clear all
              </button>
            </div>
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <h2 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Order Summary
              </h2>
              <div className="flex flex-col gap-3 mb-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm text-gray-600">
                    <span className="line-clamp-1 flex-1 mr-2">{item.product.name} × {item.quantity}</span>
                    <span className="font-medium shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between font-bold text-gray-900 text-lg">
                  <span>Total</span>
                  <span className="text-[#1e3a6e]">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Delivery fee calculated at checkout</p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/2349132696440?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order via WhatsApp
                </a>
                <Button variant="outline" fullWidth onClick={() => navigate('/products')}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
