import { categories } from '../data/products';

interface CategoryFilterProps {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 cursor-pointer ${
            active === cat.id
              ? 'bg-[#1e3a6e] text-white shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1e3a6e] hover:text-[#1e3a6e]'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
