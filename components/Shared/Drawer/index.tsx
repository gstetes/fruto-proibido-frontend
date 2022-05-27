import React, { ReactElement } from 'react';

import ReactDrawer from 'react-native-drawer';
import { useTheme } from '../../../contexts/theme';

interface DrawerProps {
  children: ReactElement;
  content: ReactElement;
  isOpen: boolean;
  onClose(): void;
};

const Drawer: React.FC<DrawerProps> = ({ 
  children, 
  content,
  isOpen,
  onClose, 
}) => {
  const { theme }  = useTheme();

  return (
    <ReactDrawer
      type="overlay"
      openDrawerOffset={0.1}
      closedDrawerOffset={-3}
      open={isOpen}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
      panCloseMask={0.2}
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