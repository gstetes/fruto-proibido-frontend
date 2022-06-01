import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TextInput } from 'react-native';

interface ContainerProps {
  isIos?: boolean
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding-top: ${(props) => props.isIos ? `${getStatusBarHeight() + 10}px` : '32px'};
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  border: 1px;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 5px;
  height: 40px;
`;