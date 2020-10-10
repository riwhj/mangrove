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



const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Customer: { screen: CustomerScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'MANGROVE',
      //Header title
    },
  }
);

const  StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staff: { screen:  StaffScreen },
    Customer: { screen: CustomerScreen },
    Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
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
    Customer: { screen: CustomerScreen },
    Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
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
    Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
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
  
    Customer: { screen: CustomerScreen },
    Packages: { screen: PackagesScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Packages',
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
  },
);
export default createAppContainer(App);