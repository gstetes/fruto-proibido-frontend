import { Dispatch, SetStateAction } from "react";

export interface IProduct {
  name: string;
  price: string;
  imageUrl: string;
};

export interface ProductsContextData {
  activeProduct: IProduct;
  setActiveProduct: Dispatch<SetStateAction<IProduct>>;
  productDrawerVisible: boolean;
  setProductDrawerVisible: Dispatch<SetStateAction<boolean>>;
};