import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '../../../contexts/theme';

interface LoadingProps {
  size: 'small' | 'large';
};

const Loading: React.FC<LoadingProps> = ({ size }) => {
  const { theme } = useTheme();

  return (
    <ActivityIndicator size={size} color={theme.colors.backgroundTab}/>
  );
};

export default Loading;