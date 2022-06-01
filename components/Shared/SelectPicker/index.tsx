import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from '../../../contexts/theme';
import { Platform } from 'react-native';

interface SelectPicker {
  onChange(value: string | number): void;
  items: {
    label: string;
    value: string | number;
  }[];
};

const SelectPicker: React.FC<SelectPicker> = ({ onChange, items }) => {
  const { theme } = useTheme();

  return (
    <RNPickerSelect
      onValueChange={(value) => onChange(value)}
      items={items}
      doneText='Selecionar'
      fixAndroidTouchableBug={true}
      style={{ 
        viewContainer: {
          borderWidth: 1,
          borderRadius: 5,
          padding: Platform.OS === 'ios' ? 5 : 0,
          borderColor: '#000'
        },
        done: {
          color: theme.colors.primary300, 
        },
      }}
    />
  );
};

export default SelectPicker;