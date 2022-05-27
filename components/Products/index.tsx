import React from  'react';

import ProductCard from '../Shared/ProductCard';
import ProductDetailDrawer from './ProductDetailDrawer';
import { Container, ProductsContainer, Title } from './styles';

const productFake = {
  name: 'Teste',
  price: '50,00',
  imageUrl: 'https://static.cdnlive.com.br/uploads/594/unidade/16425999325450_zoom.jpg'
};

const Products: React.FC = () => {
  return (
    <ProductDetailDrawer>
      <Container>
        <Title>Produtos</Title>
        <ProductsContainer>
          <ProductCard
            product={productFake}
          />
          <ProductCard
            product={productFake}
          />
        </ProductsContainer>
      </Container>
    </ProductDetailDrawer>    
  )
};

export default Products;