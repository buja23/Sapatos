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
  // --- 1 a 4: VÃO PARA O DESTAQUE (FeaturedProducts) ---
  {
    id: 1,
    name: "Scarpin Royal Nude",
    description: "A definição de elegância atemporal. Scarpin em couro napa soft na cor nude, com salto agulha de 10cm e acabamento interno aveludado para conforto supremo.",
    priceOriginal: 499.90,
    priceSale: 359.90,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1596401057633-565652ca65af?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 12
  },
  {
    id: 2,
    name: "Sandália Gold Celebration",
    description: "Perfeita para momentos inesquecíveis. Sandália de tiras finas em acabamento metalizado dourado, com design minimalista que alonga a silhueta.",
    priceOriginal: 589.00,
    priceSale: 429.00,
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1618932260643-2b6795a23390?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606764267425-603125e98585?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 8
  },
  {
    id: 3,
    name: "Bota Chelsea Madame",
    description: "O encontro do conforto com o estilo urbano. Bota Chelsea em camurça bege clara, solado tratorado sutil e elásticos laterais no tom da peça.",
    priceOriginal: 649.90,
    priceSale: 499.90,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1584735175315-9d58160926ad?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 15
  },
  {
    id: 4,
    name: "Sneaker Couture White",
    description: "Luxo casual. Tênis sneaker inteiramente branco com detalhes em dourado discreto. Produzido em couro premium para durabilidade e sofisticação.",
    priceOriginal: 529.00,
    priceSale: 399.00,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 5
  },

  // --- 5 em diante: VÃO PARA O CARROSSEL (NewArrivals) ---
  
  {
    id: 5,
    name: "Mocassim Loafer Classic",
    description: "Para a mulher moderna que não abre mão do conforto. Mocassim estilo Loafer com fivela dourada e acabamento em couro verniz preto.",
    priceOriginal: 359.90,
    priceSale: 289.90,
    images: [
      "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582238466810-82d2753a3952?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 20
  },
  {
    id: 6,
    name: "Mule Elegance Rose",
    description: "Praticidade chique. Mule de bico fino na cor rose quartz, ideal para compor looks de alfaiataria ou jeans premium.",
    priceOriginal: 299.00,
    priceSale: 199.00,
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 10
  },
  {
    id: 7,
    name: "Sandália Block Heel",
    description: "Estabilidade e beleza. Sandália de salto bloco médio, perfeita para o dia a dia de trabalho com um toque de classe.",
    priceOriginal: 359.90,
    priceSale: 259.90,
    images: [
      "https://images.unsplash.com/photo-1530435460869-d13625869bbf?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 4
  },
  {
    id: 8,
    name: "Bolsa Couro Caramel",
    description: "O acessório indispensável. Bolsa estruturada em couro legítimo caramelo, com ferragens douradas de alta durabilidade.",
    priceOriginal: 899.00,
    priceSale: 699.00,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 25
  },
  {
    id: 9,
    name: "Clutch Festa Gold",
    description: "Brilhe em qualquer evento. Clutch rígida com acabamento em glitter dourado fino e fecho de encaixe magnético.",
    priceOriginal: 299.90,
    priceSale: 189.90,
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616194726553-6dd73b310461?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 8
  },
  {
    id: 10,
    name: "Sapatilha Matelassê",
    description: "Conforto clássico. Sapatilha preta com textura matelassê e biqueira em verniz. Ideal para composições elegantes no dia a dia.",
    priceOriginal: 199.90,
    priceSale: 129.90,
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 18
  },
  {
    id: 11,
    name: "Anabela Summer Vibes",
    description: "A cara do verão europeu. Sandália anabela com salto de corda (espadrille) e amarração no tornozelo.",
    priceOriginal: 329.90,
    priceSale: 249.90,
    images: [
      "https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576487771764-8451848a6231?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 6
  },
  {
    id: 12,
    name: "Scarpin Verniz Black",
    description: "Poder e sofisticação. Scarpin preto em verniz alto brilho, bico fino e salto 11cm. O básico nada básico que todo closet precisa.",
    priceOriginal: 459.90,
    priceSale: 349.90,
    images: [
      "https://images.unsplash.com/photo-1581100494733-fcca935214d6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 10
  },
  {
    id: 13,
    name: "Cinto Couro Monograma",
    description: "O detalhe que faz a diferença. Cinto em couro marrom com fivela dourada trabalhada no monograma da marca.",
    priceOriginal: 189.90,
    priceSale: 149.90,
    images: [
      "https://images.unsplash.com/photo-1624223019157-48332d7e5200?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624223030248-93ee6e79203a?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 30
  },
  {
    id: 14,
    name: "Rasteira Pedrarias",
    description: "Luxo aos seus pés. Sandália rasteira com aplicação manual de pedrarias cristais. Conforto com muito glamour.",
    priceOriginal: 229.90,
    priceSale: 159.90,
    images: [
      "https://images.unsplash.com/photo-1572297794908-f259691763c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=800&auto=format&fit=crop"
    ],
    stock: 14
  }
];