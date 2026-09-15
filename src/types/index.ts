export type Category = 'laptops' | 'smartphones' | 'accessories' | 'power-banks' | 'gadgets';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  specs: Record<string, string>;
  inStock: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
