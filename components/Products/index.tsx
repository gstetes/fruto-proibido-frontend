import React from  'react';

import ProductCard from '../Shared/ProductCard';
import ProductDetailDrawer from './ProductDetailDrawer';
import { Container, ProductsContainer, Title } from './styles';

const productFake = {
  name: 'Teste',
  description: 'Produto de teste',
  price: '50,00',
  imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
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