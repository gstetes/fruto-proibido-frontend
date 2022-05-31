import React from 'react';

//Components
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

//Screens
import Products from '../../components/Products';
import SearchProducts from '../../components/SearchProducts';
import Favorites from '../../components/Favorites';
import Cart from '../../components/Cart';
import Profile from '../../components/Profile';

//Hoks
import { useTheme } from '../../contexts/theme';
import { useScreen } from '../../contexts/Screen';
import { ScreenType } from '../../contexts/Screen/types';

const Tab = createBottomTabNavigator();

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { screenType } = useScreen();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { 
            display: screenType === ScreenType.productDetail ? 'none' : 'flex',
            position: 'absolute',
            bottom: 15,
            left: 15,
            right: 15,
            backgroundColor: theme.colors.background, 
            paddingHorizontal: 16, 
            paddingTop: 10,
            paddingBottom: 5,
            borderRadius: 15,
            height: 60,
            elevation: 1,
            shadowColor: theme.colors.tabBarShadow,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
          },
          tabBarItemStyle: {
            borderRadius: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch(route.name) {
              case 'Products':
                iconName = 'home-outline';
                break;
              case 'SearchProducts':
                iconName = 'search-outline';
                break;
              case 'Favorites':
                iconName = 'heart-outline';
                break;
              case 'Cart':
                iconName = 'cart-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
            };

            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: theme.colors.primary300,
          tabBarActiveBackgroundColor: theme.colors.primary100,
          tabBarInactiveTintColor: theme.colors.text700,
          tabBarInactiveBackgroundColor: theme.colors.background,
          tabBarShowLabel: false
        })}
        initialRouteName="Products"
      >
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="SearchProducts" component={SearchProducts} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;