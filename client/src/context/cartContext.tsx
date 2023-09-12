import { createContext, PropsWithChildren, useState } from "react";

interface ICartContext {
  setCartItems: React.Dispatch<React.SetStateAction<[]>>;
  setProducts: React.Dispatch<React.SetStateAction<[]>>;
  cartItems: [];
  products: [];
}

export const MyCartContext = createContext<ICartContext>({
  cartItems: [],
  setCartItems: () => {},
  setProducts: () => {},
  products: [],
});

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cartItems, setCartItems] = useState<[]>([]);
  const [products, setProducts] = useState<[]>([]);

  return (
    <MyCartContext.Provider
      value={{
        setCartItems,
        cartItems,
        products,
        setProducts,
      }}
    >
      {children}
    </MyCartContext.Provider>
  );
};

export default CartProvider;
