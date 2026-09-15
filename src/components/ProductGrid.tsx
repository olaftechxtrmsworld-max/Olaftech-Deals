import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({ products, emptyMessage = 'No products found.' }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <p className="font-semibold text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
