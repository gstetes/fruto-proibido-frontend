import React from  'react';

import { Container } from './styles';
import { FlatList, Platform } from 'react-native';
import ScreenHeader from '../Shared/ScreenHeader';
import ProductDetailDrawer from '../Products/ProductDetailDrawer';
import ProductCard from '../Shared/ProductCard';
import { useTheme } from '../../contexts/theme';

const productFake = [
  {
    id: 1,
    name: 'Teste',
    description: 'Produto de teste',
    price: '50,00',
    imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
  },
  {
    id: 2,
    name: 'Teste',
    description: 'Produto de teste',
    price: '50,00',
    imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
  },
  {
    id: 3,
    name: 'Teste',
    description: 'Produto de teste',
    price: '50,00',
    imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
  },
  {
    id: 4,
    name: 'Teste',
    description: 'Produto de teste',
    price: '50,00',
    imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
  },
  {
    id: 5,
    name: 'Teste',
    description: 'Produto de teste',
    price: '50,00',
    imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
  },
  {
    id: 6,
    name: 'Teste',
    description: 'Produto de teste',
    price: '50,00',
    imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/112/725/products/01ea7274-2456-4f5f-9004-1046fae871b61-0f8ae78f3d4f33d0e115959546718972-1024-1024.jpeg'
  },
];

const Favorites: React.FC = () => {
  return (
    <ProductDetailDrawer>
      <Container isIos={Platform.OS === 'ios'}>
        <ScreenHeader title="Favoritos" />
        <FlatList 
            data={productFake}
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

export default Favorites;