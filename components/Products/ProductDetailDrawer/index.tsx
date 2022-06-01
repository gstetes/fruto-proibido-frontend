import React, { ReactElement, useEffect, useState } from 'react';

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
  FavoriteButton,
} from './styles';
import { Platform, TouchableOpacity } from 'react-native';
import SelectPicker from '../../Shared/SelectPicker';

interface ProductDetailDrawerProps {
  children: ReactElement;
};

const ProductDetailDrawer: React.FC<ProductDetailDrawerProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [productDetailsVisible, setProductDetailsVisible] = useState(true);

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

  const items = [
    {
      label: "P",
      value: 'P'
    },
    {
      label: "M",
      value: 'M'
    },
    {
      label: "G",
      value: 'G'
    },
  ];

  useEffect(() => {
    if (productDrawerVisible === true) {
      setProductDetailsVisible(true);
    };
  }, [productDrawerVisible]);

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
                  color={theme.colors.background} 
                  size={30}
                  onPress={() => (
                    setProductDrawerVisible(false),
                    setActiveProduct(null),
                    setScreenType(ScreenType.home)
                  )}
                />
                <AntDesign
                  name="eyeo" 
                  size={35} 
                  color={theme.colors.background} 
                  onPress={() => setProductDetailsVisible(!productDetailsVisible)}
                />
              </HeaderContent>
              {productDetailsVisible && 
                <ProductDetailContent>
                  <ProductDetailCard style={styles.card}>
                    <ProductSection>
                      <ProductTitle>{activeProduct?.name}</ProductTitle>
                      <FavoriteButton>
                        <AntDesign name="hearto" size={25} color={theme.colors.primary300}/>
                      </FavoriteButton>
                    </ProductSection>
                    <ProductSection>
                      <ProductPrice>{`R$ ${activeProduct?.price}`}</ProductPrice>
                      <SizeContainer>
                        <SelectPicker
                          items={items}
                          onChange={(value) => setSizeSelected(value)}
                        />
                      </SizeContainer>
                    </ProductSection>
                    <ProductSection style={{ flex: 1 }}>
                      <ProductDescription>{activeProduct?.description}</ProductDescription>
                    </ProductSection>
                    <Button activeOpacity={0.6}>
                      <ButtonText>Adicionar ao carrinho</ButtonText>
                    </Button>
                  </ProductDetailCard>
                </ProductDetailContent>
              }
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