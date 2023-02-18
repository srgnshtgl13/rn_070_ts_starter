import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, AuthStackParamList} from './types';
import {useAppSelector} from '@store/hooks';

import Login from '@screens/Login';
import Register from '@screens/Register';
import Home from '@screens/Home';
import Profile from '@screens/Profile';

import {useGetMeQuery} from 'services/userProfileApi';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  const authState = useAppSelector(state => state.auth);
  const isSignedIn = authState.token ? true : false;
  const {error, isFetching, data} = useGetMeQuery(undefined, {
    pollingInterval: 6000,
    skip: !isSignedIn, // if user is not signed in skip this query
  });
  if (error) {
    console.log('error, ', JSON.stringify(error));
  }
  if (isFetching) {
    console.log('reFetching... ', isFetching);
  }
  if (data) {
    console.log('data.email: ', data.email);
  }

  if (!isSignedIn) {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
        },
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
