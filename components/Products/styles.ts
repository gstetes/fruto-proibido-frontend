import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
  padding: 32px 20px;
  width: 100%;
`;

export const ProductsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text700};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
`;