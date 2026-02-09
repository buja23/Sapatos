export interface Product {
  id: number;
  name: string;
  description: string;
  priceOriginal: number;
  priceSale: number;
  images: string[];
  stock: number;
  category: string;       
  subcategory: string[];  
  sizes?: number[];       
  colors: string[];       
  toeShape?: 'Fino' | 'Quadrado' | 'Redondo'; 
  material?: string;      
}

export const products: Product[] = [
  {
    id: 1,
    name: "Scarpin Verniz Nude Royal",
    description: "Clássico salto 10cm.",
    priceOriginal: 359.90,
    priceSale: 289.90,
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"],
    stock: 10,
    category: "sapatos",
    subcategory: ["scarpin", "classico"],
    sizes: [34, 35, 36, 37, 38],
    colors: ["Nude"],
    toeShape: 'Fino',
    material: 'Verniz'
  },
  {
    id: 2,
    name: "Sandália Festa Gold",
    description: "Tiras finas, salto alto.",
    priceOriginal: 499.90,
    priceSale: 399.90,
    images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop"],
    stock: 5,
    category: "sapatos",
    subcategory: ["sandalias", "festa"],
    sizes: [35, 36, 37, 38],
    colors: ["Dourado"],
    toeShape: 'Fino'
  },
  {
    id: 3,
    name: "Mule Quadrado Preto",
    description: "Conforto e estilo moderno.",
    priceOriginal: 299.90,
    priceSale: 199.90,
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"],
    stock: 15,
    category: "sapatos",
    subcategory: ["mule", "casual"],
    sizes: [34, 35, 36, 37, 38, 39, 40],
    colors: ["Preto"],
    toeShape: 'Quadrado',
    material: 'Couro'
  }
];