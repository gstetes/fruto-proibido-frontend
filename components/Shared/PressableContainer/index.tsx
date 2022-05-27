import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

interface PressableContainerProps {
  onPress(): void;
  children: ReactNode;
};

const PressableContainer: React.FC<PressableContainerProps> = ({ onPress, children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default PressableContainer;