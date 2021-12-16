import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Fun from './components/Fun';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Booking from './components/Booking';
import PaymentGateway from './components/PaymentGateway';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        overlayColor: 'transparent',
      }}>
      {/* Screens */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home Screen'}}
      />
      <Drawer.Screen
        name="Fun"
        component={Fun}
        options={{drawerLabel: 'Fun Screen'}}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{drawerLabel: 'About Screen'}}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{drawerLabel: 'Login Screen'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Have Fun" component={MyDrawer} />
        <Stack.Screen name="Fun" component={Fun} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="PaymentGateway" component={PaymentGateway} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
