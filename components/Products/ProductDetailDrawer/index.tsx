import React, { ReactElement, useState } from 'react';

import { useProducts } from '../../../contexts/Products';

import Drawer from '../../Shared/Drawer';
import Loading from '../../Shared/Loading';
import { 
  Button, 
  ButtonContainer, 
  ButtonText, 
  Container, 
  Price, 
  PriceContainer, 
  ProductImage, 
  ProductName, 
  ProductNameContainer 
} from './styles';

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
  } = useProducts()

  return (
    <Drawer 
      isOpen={productDrawerVisible}
      onClose={() => (
        setProductDrawerVisible(false),
        setActiveProduct(null)
      )}
      content={
        <Container>
          <ProductImage
            source={{
              uri: activeProduct?.imageUrl
            }}
          />
          <ProductNameContainer>
            <ProductName>{activeProduct?.name}</ProductName>
          </ProductNameContainer>
          <PriceContainer>
            <Price>
              {`R$ ${activeProduct?.price}`}
            </Price>
          </PriceContainer>
          <ButtonContainer>
            <Button  onPress={() => setIsLoading(true)}>
              {!isLoading ? (
                <ButtonText>
                  Adicionar ao carrinho
                </ButtonText>
              ) : (
                <Loading size="large"/>
              )}              
            </Button>
          </ButtonContainer>
        </Container>
      }
    >
      {children}
    </Drawer>
  );
};

export default ProductDetailDrawer;