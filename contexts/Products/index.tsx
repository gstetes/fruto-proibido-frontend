import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ProductsContextData } from "./types";
import api from '../../services/api';
import { Alert } from "react-native";

const ProductsContext = createContext({} as ProductsContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export const ProductsProvider: React.FC<ReactProps> = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [productDrawerVisible, setProductDrawerVisible] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      const url = `/products`;
      const response = await api.get(url);
      setProducts(response.data);
    } catch (err) {
      Alert.alert('Erro ao receber produtos');
    };
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
    value={{ 
      products,
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