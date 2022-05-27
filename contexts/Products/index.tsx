import { createContext, useContext, useState } from "react";
import { ProductsContextData } from "./types";

const ProductsContext = createContext({} as ProductsContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export const ProductsProvider: React.FC<ReactProps> = ({ children }) => {
  const [productDrawerVisible, setProductDrawerVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <ProductsContext.Provider
    value={{ 
      productDrawerVisible,
      setProductDrawerVisible,
      activeProduct,
      setActiveProduct
    }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);