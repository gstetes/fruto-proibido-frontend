import React from 'react';
import { 
  Container,
  Title
} from './styles';

interface ScreenHeaderProps { 
  title: string;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default ScreenHeader;