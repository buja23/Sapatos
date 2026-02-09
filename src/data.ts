// Importe suas imagens aqui se quiser usar imports
// import img1 from './assets/produtos/sapato1.jpg';

export interface Product {
  id: number;
  name: string;
  description: string;
  priceOriginal: number;
  priceSale: number;
  images: string[];
  stock: number;
  category: string;       // Categoria MÃE (sapatos, bolsas)
  subcategory: string[];  // Subcategorias (scarpin, festa, couro, verao)
  sizes?: number[];       // Tamanhos disponíveis
  colors: string[];       // Cores do produto
}

export const products: Product[] = [
  // --- SAPATOS ---
  {
    id: 1,
    name: "Scarpin Verniz Nude Royal",
    description: "Clássico salto 10cm.",
    priceOriginal: 359.90,
    priceSale: 289.90,
    images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"],
    stock: 10,
    category: "sapatos",
    subcategory: ["scarpin", "classico", "trabalho"],
    sizes: [34, 35, 36, 37, 38],
    colors: ["Nude"]
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
    subcategory: ["sandalias", "festa", "salto-fino"],
    sizes: [35, 36, 37, 38],
    colors: ["Dourado"]
  },
  {
    id: 3,
    name: "Tênis Casual White",
    description: "Conforto para o dia a dia.",
    priceOriginal: 299.90,
    priceSale: 259.90,
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"],
    stock: 20,
    category: "sapatos",
    subcategory: ["tenis", "casual", "dia-a-dia"],
    sizes: [34, 35, 36, 37, 38, 39],
    colors: ["Branco"]
  },

  // --- BOLSAS ---
  {
    id: 4,
    name: "Bolsa Tote Caramelo",
    description: "Espaçosa, cabe notebook.",
    priceOriginal: 899.90,
    priceSale: 799.90,
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"],
    stock: 3,
    category: "bolsas",
    subcategory: ["tote", "trabalho", "couro"],
    sizes: [], // Bolsas não têm tamanho numérico
    colors: ["Caramelo"]
  },
  
  // --- Adicione mais produtos seguindo esse padrão ---
];