import React from 'react';
import { Container, Price, PriceContainer, ProductImage, ProductName, ProductNameContainer } from './styles';
import PressableContainer from '../PressableContainer';
import { useProducts } from '../../../contexts/Products';
import { IProduct } from '../../../contexts/Products/types';

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

  return (
    <PressableContainer 
      onPress={() => (
        setProductDrawerVisible(true),
        setActiveProduct(product)
      )}
    >
      <Container>
        <ProductImage source={{ uri: product.imageUrl }} resizeMode="cover"/>
        <ProductNameContainer>
          <ProductName>{product.name}</ProductName>
        </ProductNameContainer>
        <PriceContainer>
          <Price>
            {`R$ ${product.price}`}
          </Price>
        </PriceContainer>
      </Container>
    </PressableContainer>
  );
};

export default ProductCard;