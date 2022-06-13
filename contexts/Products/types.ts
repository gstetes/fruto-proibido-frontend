import { Dispatch, SetStateAction } from "react";

export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: string;
  image_url?: string;
  sizes?: string[],
  active: boolean;
};

export interface ProductsContextData {
  products: IProduct[];
  activeProduct: IProduct;
  setActiveProduct: Dispatch<SetStateAction<IProduct>>;
  productDrawerVisible: boolean;
  setProductDrawerVisible: Dispatch<SetStateAction<boolean>>;
};