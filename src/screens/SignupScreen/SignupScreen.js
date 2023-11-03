import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ContextComponent from './components/ContextComponent';
import DescriptionComponent from './components/DescriptionComponent';
import Header from './components/HeaderComponent';
import MissionComponent from './components/MissionComponent';
import StarterComponent from './components/StarterComponent';
import SignUpStyles from './styles';

const SignupScreen = () => {
  return (
    <SafeAreaView style={SignUpStyles.parentView}>
      <Header />
      {/*---scrollView for signup */}
      <ScrollView
        style={SignUpStyles.scrollViewContainer}
        contentContainerStyle={{
          justifyContent: 'center',
        }}>
        {/*---context component-*/}
        <ContextComponent />
        {/*---our journalism text component */}
        <MissionComponent />
        {/*---description component */}
        <DescriptionComponent />
        {/*---starter component */}
        <StarterComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
