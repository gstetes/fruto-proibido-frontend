import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 48%;
  min-width: 48%;
  border-radius: 10px;
  padding-bottom: 10px;  
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 10px;
`;

export const ProductNameContainer = styled.View`
  margin-top: 10px;
  padding: 0 5px;
  max-width: 100%;
`;

export const ProductName = styled.Text`  
  color: ${(props) => props.theme.colors.text500};
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
  color: ${(props) => props.theme.colors.text700};
`;

export const SeeMore = styled.Text`
  color: ${(props) => props.theme.colors.primary500};
`;

export const ProductDescription = styled.Text`
  padding: 0 5px;
  margin-top: 5px;

  color: ${(props) => props.theme.colors.text300};
`;