import React, { ReactElement, useState } from 'react';

import { useProducts } from '../../../contexts/Products';
import { useScreen } from '../../../contexts/Screen';
import { ScreenType } from '../../../contexts/Screen/types';
import { useTheme } from '../../../contexts/theme';

import Drawer from '../../Shared/Drawer';
import Loading from '../../Shared/Loading';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  Container,
  Image, 
  ContentContainer,
  HeaderContent,
  ProductDetailContent,
  ProductTitle,
  ProductDetailCard,
  ProductPrice,
  ProductDescription,
  ProductSection,
  Button,
  ButtonText,
  SizeContainer,
  SizeText,
} from './styles';
import { Platform } from 'react-native';

interface ProductDetailDrawerProps {
  children: ReactElement;
};

const ProductDetailDrawer: React.FC<ProductDetailDrawerProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    productDrawerVisible,
    setProductDrawerVisible,
    setActiveProduct,
    activeProduct,
  } = useProducts();

  const { setScreenType } = useScreen();

  const { theme } = useTheme();

  const styles = {
    card: {
      shadowColor: theme.colors.text500,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: Platform.OS === 'ios' ? 0 : 1,
    }
  }

  return (
    <Drawer 
      isOpen={productDrawerVisible}
      onClose={() => (
        setProductDrawerVisible(false),
        setActiveProduct(null),
        setScreenType(ScreenType.home)
      )}
      content={
        <Container>
          {/* @ts-ignore */}
          <Image
            source={{ uri: activeProduct?.imageUrl }}
            resizeMode="cover"
          >
            <ContentContainer>
              <HeaderContent>
                <AntDesign
                  name="leftcircleo"
                  color={theme.colors.background} size={30}
                  onPress={() => (
                    setProductDrawerVisible(false),
                    setActiveProduct(null),
                    setScreenType(ScreenType.home)
                  )}
                />
              </HeaderContent>
              <ProductDetailContent>
                <ProductDetailCard style={styles.card}>
                  <ProductSection>
                    <ProductTitle>{activeProduct?.name}</ProductTitle>
                    <AntDesign name="hearto" size={25} color={theme.colors.primary300}/>
                  </ProductSection>
                  <ProductSection>
                    <ProductPrice>{`R$ ${activeProduct?.price}`}</ProductPrice>
                    <SizeContainer>
                      <SizeText>Tamanho</SizeText>
                    </SizeContainer>
                  </ProductSection>
                  <ProductSection style={{ flex: 1 }}>
                    <ProductDescription>{activeProduct?.description}</ProductDescription>
                  </ProductSection>
                  <Button>
                    <ButtonText>Adicionar ao carrinho</ButtonText>
                  </Button>
                </ProductDetailCard>
              </ProductDetailContent>
            </ContentContainer>
          </Image>
        </Container>        
      }
    >
      {children}
    </Drawer>
  );
};


export default ProductDetailDrawer;