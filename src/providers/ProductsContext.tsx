import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProduct } from "../types";
import { toast } from "react-toastify";

export const ProductsContext = createContext({} as IProductsContext);

interface IProductsProviderProps {
  children: React.ReactNode;
}

interface IProductsContext {
  products: IProduct[];
  productCart: IProduct[];
  searchTerm: string;
  cont:number;
   setCont: (value: React.SetStateAction<number>) => void
  addProductToCart: (productId: number) => void;
  removeAll: (cartId: number) => void;
  removeCart: (cartId: number) => void;
  handleSearch: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productCart, setProductCart] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cont, setCont] = useState<number>(0)

  const getProducts = async () => {
    const token = JSON.parse(
      localStorage.getItem("@KenzieBurger:token") || "null"
    );
    try {
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProductToCart = (productId: Number) => {
    if (!productCart.some((item) => item.id === productId)) {
      const cartProducts = products.find((product) => product.id === productId);

      if (cartProducts) {
        setProductCart([...productCart, cartProducts]);
        setCont(cont + 1)
      }
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  };

  const removeAll = (cartId: number) => {
    const remove = productCart.filter((cartItem) => cartItem.id === cartId);

    setProductCart(remove);
  };

  const removeCart = (cartId: number) => {
    const remove = productCart.filter((cartItem) => cartItem.id !== cartId);

    setProductCart(remove);
  };

  const handleSearch = (event:React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProductToCart,
        productCart,
        removeAll,
        removeCart,
        handleSearch,
        searchTerm,
        setCont,
        cont
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
