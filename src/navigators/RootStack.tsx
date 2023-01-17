import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
