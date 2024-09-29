import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignupScreen';
import DashboardScreen from './src/components/DashboardScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ title: 'Dashboard' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
