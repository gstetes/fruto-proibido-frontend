import React, { ReactElement } from 'react';

import ReactDrawer from 'react-native-drawer';
import { useTheme } from '../../../contexts/theme';

interface DrawerProps {
  children: ReactElement;
  content: ReactElement;
  isOpen: boolean;
  onClose(): void;
  openDrawerOffset?: number;
};

const Drawer: React.FC<DrawerProps> = ({ 
  children, 
  content,
  isOpen,
  onClose, 
  openDrawerOffset = 0,
}) => {
  const { theme }  = useTheme();

  return (
    <ReactDrawer
      type="overlay"
      openDrawerOffset={openDrawerOffset}
      closedDrawerOffset={-3}
      open={isOpen}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      panCloseMask={openDrawerOffset !== 0 ? openDrawerOffset : 0.1}
      content={content}
      tapToClose={true}
      acceptPan={true}
      onClose={() => onClose()}
    >
      {children}
    </ReactDrawer>
  );
};
export default Drawer;