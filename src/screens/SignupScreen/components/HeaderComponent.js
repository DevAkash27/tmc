import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import {ELLIPSE, MENU_ICON, SEARCH_ICON} from '../../../constants/assets';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../constants/colors';
import TouchableImage from '../../../components/TouchableImage';
import {CONTEXT_STRINGS} from '../../../constants/strings';
import SignUpStyles from '../styles';

const Header = () => {
  return (
    <SafeAreaView style={SignUpStyles.headerContainer}>
      {/*-----menu icon----*/}
      <TouchableImage src={MENU_ICON} style={SignUpStyles.menuIcon} />
      {/*-----ellipse icon----*/}
      <Image source={ELLIPSE} style={SignUpStyles.ellipseIcon} />
      {/*-----search icon----*/}
      <TouchableImage src={SEARCH_ICON} style={SignUpStyles.searchIcon} />
      {/*-----signupButton----*/}
      <TouchableOpacity>
        <LinearGradient
          colors={[COLORS.BLUE_GRADIENT, COLORS.PURPLE_GRADIENT]}
          start={{x: 0, y: 0.5}}
          end={{x: 1.2, y: 0.5}}
          style={SignUpStyles.signUpButton}>
          <Text style={{color: COLORS.WHITE}}>{CONTEXT_STRINGS.SIGNUP}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Header;
