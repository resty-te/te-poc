import {
  CommonActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {LandingScreen} from '../screens/LandingScreen';
import { HomeTabs } from './HomeTabs';

const Stack = createNativeStackNavigator();

export const GeneralNavigator = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Stack.Navigator initialRouteName="landing">
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
