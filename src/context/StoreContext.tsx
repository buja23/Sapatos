import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
// import { supabase } from '../lib/supabase'; // Removido
// import { useAuth } from './AuthContext'; // Não é mais obrigatório para o carrinho
import { toast } from 'react-hot-toast';
import { products as initialData } from '../data'; // Importando seus dados fictícios

export interface Product {
  id: number;
  created_at?: string; // Opcional agora
  name: string;
  description: string;
  images: string[];
  stock: number;
  priceSale: number;
  priceOriginal: number;
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export type CartProduct = Product & {
  quantity: number;
};

export interface FilterState {
  searchText: string;
  priceRange: { min: number; max: number };
  sortBy: 'newest' | 'price-asc' | 'price-desc';
}

interface StoreContextType {
  products: Product[];
  allProducts: Product[];
  isCartLoading: boolean;
  isLoading: boolean;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  cart: CartItem[];
  clearCart: () => void;
  updateStock: (productId: number, newStock: number) => void;
  cartItemCount: number;
  cartItems: CartProduct[];
  cartTotal: number;
  filters: FilterState;
  fetchProducts: () => Promise<void>;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  priceBounds: { min: number; max: number };
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  // const { user } = useAuth(); // Desativado para demo livre
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    searchText: '',
    priceRange: { min: 0, max: 99999 },
    sortBy: 'newest',
  });

  // --- 1. CARREGAMENTO DOS DADOS LOCAIS (MOCK) ---
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      // Simula um delay de rede pequeno para parecer real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Carrega do arquivo data.ts
      setAllProducts(initialData);
      
    } catch (error) {
      console.error('Erro mock:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --- 2. AUXILIARES ---

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const products = useMemo(() => {
    let filtered = [...allProducts];

    if (filters.searchText) {
      const lowercasedText = filters.searchText.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowercasedText) ||
          p.description.toLowerCase().includes(lowercasedText)
      );
    }

    filtered = filtered.filter(
      (p) =>
        p.priceSale >= filters.priceRange.min &&
        p.priceSale <= filters.priceRange.max
    );

    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.priceSale - b.priceSale);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.priceSale - a.priceSale);
        break;
      case 'newest':
      default:
        // Se não tiver created_at, mantém a ordem original
        break;
    }

    return filtered;
  }, [allProducts, filters]);

  const cartItems: CartProduct[] = useMemo(() => {
    return cart
      .map((cartItem) => {
        const product = allProducts.find((p) => p.id === cartItem.productId);
        if (product) {
          return { ...product, quantity: cartItem.quantity };
        }
        return null;
      })
      .filter((item): item is CartProduct => item !== null);
  }, [cart, allProducts]);

  // --- 3. AÇÕES DO CARRINHO (LOCAL) ---

  const addToCart = async (productId: number) => {
    // REMOVIDO CHECK DE LOGIN: Permite demo para convidado
    // if (!user) { ... }

    const product = allProducts.find((p) => p.id === productId);
    if (!product) {
      toast.error('Produto não encontrado.');
      return;
    }

    const itemInCart = cart.find((item) => item.productId === productId);
    const currentQuantityInCart = itemInCart ? itemInCart.quantity : 0;

    if (currentQuantityInCart >= product.stock) {
      toast.error(`Estoque esgotado para "${product.name}".`);
      return;
    }

    // Atualização apenas no Estado Local
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.productId === productId);
      if (existingItem) {
        return currentCart.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { productId, quantity: 1 }];
    });
    
    // Feedback visual removido daqui pois geralmente o componente chama o toast,
    // mas se o componente ProductCard não chamar, podemos descomentar abaixo:
    // toast.success('Adicionado!');
  };

  const removeFromCart = async (productId: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.productId !== productId));
  };

  const clearCart = async () => {
    setCart([]);
  };

  const updateStock = async (productId: number, newStock: number) => {
    setAllProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, stock: newStock } : p)));
  };

  const priceBounds = useMemo(() => {
    if (allProducts.length === 0) {
      return { min: 0, max: 1000 };
    }
    const prices = allProducts.map((p) => p.priceSale);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices)),
    };
  }, [allProducts]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.priceSale * item.quantity,
      0
    );
  }, [cartItems]);

  const value = {
    products,
    allProducts,
    isCartLoading,
    isLoading,
    addToCart,
    updateStock,
    cart,
    removeFromCart,
    clearCart,
    cartItemCount,
    cartItems,
    cartTotal,
    filters,
    updateFilters,
    fetchProducts,
    priceBounds,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore deve ser usado dentro de um StoreProvider');
  }
  return context;
}