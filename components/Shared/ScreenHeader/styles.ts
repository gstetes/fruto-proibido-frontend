import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text700};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 16px;
  padding: 0 2px;
`;