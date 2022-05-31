import React from 'react';
import { 
  Container, 
  Price,
  PriceContainer, 
  ProductImage, 
  ProductName, 
  ProductNameContainer,
  SeeMore,
  ProductDescription,
 } from './styles';
import PressableContainer from '../PressableContainer';
import { useProducts } from '../../../contexts/Products';
import { IProduct } from '../../../contexts/Products/types';
import { useScreen } from '../../../contexts/Screen';
import { ScreenType } from '../../../contexts/Screen/types';

interface ProductCardProps {
  product: IProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  const {
    setProductDrawerVisible,
    setActiveProduct
  } = useProducts();

  const { setScreenType } = useScreen();

  return (
    <PressableContainer 
      onPress={() => (
        setProductDrawerVisible(true),
        setActiveProduct(product),
        setScreenType(ScreenType.productDetail)
      )}
    >
      <Container>
        <ProductImage source={{ uri: product.imageUrl }} resizeMode="cover"/>
        <ProductNameContainer>
          <ProductName>{product.name}</ProductName>
        </ProductNameContainer>
        <ProductDescription>
          {product.description}
        </ProductDescription>
        <PriceContainer>
          <Price>
            {`R$ ${product.price}`}
          </Price>
          <SeeMore>
            ver mais
          </SeeMore>
        </PriceContainer>
      </Container>
    </PressableContainer>
  );
};

export default ProductCard;