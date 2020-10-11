// 

//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import StaffScreen from './pages/StaffScreen';
import BookingPackagesScreen from './pages/BookingPackagesScreen';
import CustomerScreen from './pages/CustomerScreen';
import PackagesScreen from './pages/PackagesScreen';
import ScannerScreen from './pages/ScannerScreen';
import SearchScreen from './pages/SearchScreen';
import conclutionScreen from './pages/conclutionScreen';



const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    // Customer: { screen: CustomerScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);

const  StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staff: { screen:  StaffScreen },
    // Customer: { screen: CustomerScreen },
    // Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: ' Staff',
      //Header title
    },
  }
);
const BookingPackagesStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    BookingPackages: { screen: BookingPackagesScreen },
    // Customer: { screen: CustomerScreen },
    // Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'Packages',
      //Header title
    },
  }
);

const CustomerStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Customer: { screen: CustomerScreen },
    // Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'Customer',
      //Header title
    },
  }
);

const PackagesStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
  
    // Customer: { screen: CustomerScreen },
    Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'Packages',
      //Header title
    },
  }
);

const ScannerStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
  
    // Customer: { screen: CustomerScreen },
    // Packages: { screen: PackagesScreen },
    ScannerScreen: { screen: ScannerScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'Scanner',
      //Header title
    },
  }
);

const SearchStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    // Home: { screen: HomeScreen },
    // Customer: { screen: CustomerScreen },
    Search: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
      //Header title
    },
  }
);
const conclutionStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    // Home: { screen: HomeScreen },
    // Customer: { screen: CustomerScreen },
    conclution: { screen: conclutionScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2F4F4F',
      },
      headerTintColor: '#FFFFFF',
      title: 'conclution',
      //Header title
    },
  }
);


const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Staff: { screen: StaffStack }, 
    Customer: { screen: CustomerStack },
    Packages: { screen: PackagesStack },
    BookingPackages: { screen: BookingPackagesStack },
    Search: { screen: SearchStack },
    conclution: { screen: conclutionStack },
    Scanner: { screen: ScannerStack },
    
  },
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `home${focused ?
              '' : '-outline'
            }`;
          }else if (routeName === 'Staff') {
            iconName = `people${focused ?
              '' : '-outline'
            }`;
          } 
          else if (routeName === 'Customer') {
            iconName = `person-add${focused ?
              '' : '-outline'
            }`;
          }
          else if (routeName === 'Packages') {
            iconName = `folder${focused ?
              '' : '-outline'
            }`;
          }  
          else if (routeName === 'BookingPackages') {
            iconName = `add${focused ?
              '' : '-outline'
            }`;
          }
          else if (routeName === 'Scanner') {
            iconName = `qr-code${focused ?
              '' : '-outline'
            }`;
          }
          else if (routeName === 'Search') {
            iconName = `search${focused ?
              '' : '-outline'
            }`;
          }
          else if (routeName === 'conclution') {
            iconName = `albums${focused ?
              '' : '-outline'
            }`;
          }
          return <IconComponent
                   name={iconName}
                   size={25}
                   color={tintColor}
                 />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#5F9EA0',
        inactiveTintColor: 'gray',
      },
    }
);
export default createAppContainer(App);