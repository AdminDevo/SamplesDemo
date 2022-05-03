import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef, isMountedRef} from '../../Utility/rNavigation';

import Home from '../Home';

const RootStack = createStackNavigator();
const createRootStack = () => (
  <RootStack.Navigator screenOptions={{gestureEnabled: false}}>
    <RootStack.Screen
      name="Traffic Signal"
      component={Home}
      options={{headerShown: true}}
    />
  </RootStack.Navigator>
);

export default () => {
  //   useEffect(() => {
  //     isMountedRef.current = true;
  //     return () => (isMountedRef.current = false);
  //   }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {createRootStack()}
    </NavigationContainer>
  );
};
