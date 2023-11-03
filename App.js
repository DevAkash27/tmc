import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import COLORS from './src/constants/colors';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.WHITE}}>
      <SignupScreen />
    </SafeAreaView>
  );
};

export default App;
