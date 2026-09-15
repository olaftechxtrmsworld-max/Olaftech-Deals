import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import type { Category } from '../types';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  function handleCategoryChange(id: string) {
    setActiveCategory(id);
    if (id === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  }

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === (activeCategory as Category);
      const matchesSearch =
        search.trim() === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1e3a6e] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Our Products
          </h1>
          <p className="text-white/60 mt-1">
            {products.length} products across {5} categories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a6e] focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-semibold text-[#1e3a6e]">{filtered.length}</span> results
          </div>
        </div>

        <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />

        <div className="mt-6">
          <ProductGrid products={filtered} emptyMessage="No products match your search." />
        </div>
      </div>
    </div>
  );
}
