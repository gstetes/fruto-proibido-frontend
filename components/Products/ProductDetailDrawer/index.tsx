import React, { ReactElement, useState } from 'react';

import { useProducts } from '../../../contexts/Products';
import { useScreen } from '../../../contexts/Screen';
import { ScreenType } from '../../../contexts/Screen/types';

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
  ProductDetailCard
} from './styles';
import { useTheme } from '../../../contexts/theme';

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
                  <ProductTitle>{activeProduct?.name}</ProductTitle>

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