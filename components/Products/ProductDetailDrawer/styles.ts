import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  flex: 1;
`;

export const ContentContainer = styled.View`
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
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
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text``;

export const ProductDescription = styled.Text``;