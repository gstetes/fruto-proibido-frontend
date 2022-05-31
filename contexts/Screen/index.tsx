import { createContext, useContext, useState } from "react";

import { ScreenContextData, ScreenType } from './types';

const ScreenContext = createContext({} as ScreenContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export const ScreenProvider: React.FC<ReactProps> = ({ children }) => {
  const [screenType, setScreenType] = useState<ScreenType>(ScreenType.home);

  return (
    <ScreenContext.Provider
      value={{
        screenType,
        setScreenType
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreen = () => useContext(ScreenContext);