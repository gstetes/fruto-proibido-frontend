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
import { useTheme } from '../../contexts/theme';

const Tab = createBottomTabNavigator();

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { 
            backgroundColor: "#000", 
            paddingHorizontal: 16, 
            justifyContent: 'space-between', 
            paddingTop: 10,
            paddingBottom: 5 
          },
          tabBarItemStyle: {
            borderRadius: 5
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
          tabBarActiveBackgroundColor: theme.colors.primary500,
          tabBarInactiveTintColor: theme.colors.text500,
          tabBarInactiveBackgroundColor: theme.colors.backgroundTab,
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