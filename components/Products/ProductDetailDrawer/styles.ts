import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  margin-top: 16px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const ProductNameContainer = styled.View`
  margin-top: 30px;
  padding: 0 10px;
`;

export const ProductName = styled.Text` 
  font-size: 20px;
  color: ${(props) => props.theme.colors.text300};
  font-weight: bold;
`;

export const PriceContainer = styled.View`
  padding: 0 10px;
  margin-top: 30px;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary300};
  font-size: 25px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary300};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text300};
  font-size: 20px;
  font-weight: bold;
`