import { Dispatch, SetStateAction } from "react";

export enum ScreenType {
  home = 'Home',
  productDetail = 'ProductDetail'
};

export interface ScreenContextData {
  screenType: ScreenType;
  setScreenType: Dispatch<SetStateAction<ScreenType>>;
};