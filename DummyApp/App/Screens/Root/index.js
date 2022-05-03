import React, {useEffect, useState} from 'react';
import {View, Alert, Text} from 'react-native';
import Navigation from './Router';

export default () => {
  useEffect(() => {
    // Do code for any auth and session type things.
  });
  return (
    <View style={{flex: 1}}>
      <Navigation />
      {/* {!loading ? null : <Loading />} */}
    </View>
  );
};
