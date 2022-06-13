import React from  'react';

import ProductCard from '../Shared/ProductCard';
import ProductDetailDrawer from './ProductDetailDrawer';
import { Container } from './styles';
import { FlatList, Platform } from 'react-native';
import ScreenHeader from '../Shared/ScreenHeader';
import { useProducts } from '../../contexts/Products';

const {
  products 
} = useProducts();

const Products: React.FC = () => {
  return (
    <ProductDetailDrawer>
      <Container isIos={Platform.OS === 'ios'}>
        <ScreenHeader title="Produtos" />
        <FlatList 
          data={products}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) =>
            <ProductCard product={item.item}/>
          }
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        />
      </Container>
    </ProductDetailDrawer>    
  )
};

export default Products;