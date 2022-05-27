import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.backgroundProductCard};
  max-width: 48%;
  min-width: 48%;
  border-radius: 10px;
  padding-bottom: 10px;  
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProductNameContainer = styled.View`
  margin-top: 10px;
  padding: 0 5px;
  max-width: 100%;
`;

export const ProductName = styled.Text`  
`;

export const PriceContainer = styled.View`
  padding: 0 5px;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.secundary300};
`;