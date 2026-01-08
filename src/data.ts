export interface Product {
  id: number;
  name: string;
  description: string;
  priceOriginal: number;
  priceSale: number;
  images: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Urban Runner X",
    description: "Tênis esportivo de alta performance com amortecimento responsivo. Ideal para corridas urbanas e uso diário com estilo.",
    priceOriginal: 599.90,
    priceSale: 299.90,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
    ],
    stock: 12
  },
  {
    id: 2,
    name: "Oxford Classic Leather",
    description: "Sapato social Oxford em couro legítimo premium. Acabamento artesanal e solado costurado para máxima durabilidade e elegância.",
    priceOriginal: 459.00,
    priceSale: 329.00,
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
      "https://images.unsplash.com/photo-1478186172495-ee2366b44766?w=800&q=80"
    ],
    stock: 8
  },
  {
    id: 3,
    name: "Chelsea Boot Suede",
    description: "Bota Chelsea moderna em camurça. Elásticos laterais reforçados e design minimalista que combina com jeans ou alfaiataria.",
    priceOriginal: 389.90,
    priceSale: 249.90,
    images: [
      "https://images.unsplash.com/photo-1638313809249-1654d04d7e99?w=800&q=80",
      "https://images.unsplash.com/photo-1584735175315-9d58160926ad?w=800&q=80",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&q=80"
    ],
    stock: 15
  },
  {
    id: 4,
    name: "Air Street Low",
    description: "Sneaker casual inspirado no basquete dos anos 80. Couro sintético resistente e solado de borracha antiderrapante.",
    priceOriginal: 429.00,
    priceSale: 199.00,
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80"
    ],
    stock: 5
  },
  {
    id: 5,
    name: "Mocassim Drive Comfort",
    description: "Mocassim leve e flexível, perfeito para o verão. Palmilha em gel que garante conforto absoluto o dia todo.",
    priceOriginal: 259.90,
    priceSale: 149.90,
    images: [
      "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?w=800&q=80",
      "https://images.unsplash.com/photo-1582238466810-82d2753a3952?w=800&q=80",
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?w=800&q=80"
    ],
    stock: 20
  },
  {
    id: 6,
    name: "High Heels Elegance",
    description: "Scarpin clássico com design renovado. Salto estruturado para maior estabilidade e forro interno macio.",
    priceOriginal: 299.00,
    priceSale: 179.00,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1596401057633-565652ca65af?w=800&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?w=800&q=80"
    ],
    stock: 10
  },
  {
    id: 7,
    name: "Boot Tratorada Rock",
    description: "Coturno com solado tratorado e acabamento em verniz. Atitude e conforto para compor looks urbanos poderosos.",
    priceOriginal: 359.90,
    priceSale: 219.90,
    images: [
      "https://images.unsplash.com/photo-1542840410-3092f4a28cc9?w=800&q=80",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=800&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851188b43c5?w=800&q=80"
    ],
    stock: 4
  },
  {
    id: 8,
    name: "Slip On Minimal",
    description: "Tênis sem cadarço prático e versátil. Tecido respirável e design clean para quem valoriza a praticidade.",
    priceOriginal: 189.00,
    priceSale: 99.00,
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=80",
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    stock: 25
  }
];