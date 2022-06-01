import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

interface ContentContainerProps {
  isIos?: boolean
};

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;

export const ContentContainer = styled.View<ContentContainerProps>`
  padding-top: ${(props) => props.isIos ? `${getStatusBarHeight() + 10}px` : '32px'};
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: ${(props) => props.isIos ? `${getBottomSpace() + 10}px` : '16px'};
  flex: 1;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductDetailContent = styled.View`
  flex: 1;
  margin-bottom: 16px;
  justify-content: flex-end;
`;

export const ProductDetailCard = styled.View`
  height: 300px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  padding: 16px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text700};
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary500};
`;

export const ProductDescription = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text500};
`;

export const ProductSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  background: ${(props) => props.theme.colors.primary300};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.background};
  font-weight: bold;
  font-size: 18px;
`;

export const SizeContainer = styled.View``;

export const SizeText = styled.Text``;