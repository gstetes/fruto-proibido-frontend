import React from 'react';
import { 
  Container,
  Title
} from './styles';
import { Image } from 'react-native';
interface ScreenHeaderProps { 
  title: string;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image source={require('../../../assets/images/logo_dark.png')} resizeMode="cover" style={{ width: 80, height: 40, alignSelf: 'center' }} />
    </Container>
  );
};

export default ScreenHeader;