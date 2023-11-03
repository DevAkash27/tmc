import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {TICK} from '../../../constants/assets';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../constants/colors';
import StyledText from '../../../components/StyledText';
import AppFonts from '../../../constants/fonts';
import AbrilFont from '../../../components/StyledAbrilText';
import SignUpStyles from '../styles';
import {STARTER_STRINGS} from '../../../constants/strings';

const StarterCard = () => {
  const TextView = ({text}) => {
    return (
      <View style={SignUpStyles.starterText}>
        <Image source={TICK} style={SignUpStyles.tickIcon} />
        <StyledText
          style={{marginStart: 10}}
          mode={AppFonts.BodyRegular14}
          color={COLORS.BLACK}>
          {text}
        </StyledText>
      </View>
    );
  };
  return (
    <View style={SignUpStyles.StarterCardContainer}>
      <AbrilFont style={SignUpStyles.StarterCredits} color={COLORS.BLACK}>
        {STARTER_STRINGS.FREE_CREDITS}
      </AbrilFont>
      <View style={{marginEnd: 10}}>
        <TextView text={STARTER_STRINGS.GET_CREDITS} />
        <TextView text={STARTER_STRINGS.USE_CREDITS} />
        <TextView text={STARTER_STRINGS.EXPIRE_CREDITS} />
      </View>

      <TouchableOpacity style={{marginTop: '16%'}}>
        <LinearGradient
          colors={[COLORS.BLUE_GRADIENT, COLORS.PURPLE_GRADIENT]}
          start={{x: 0, y: 0.5}}
          end={{x: 1.2, y: 0.5}}
          style={SignUpStyles.signUpFree}>
          <Text style={{color: COLORS.WHITE}}>{STARTER_STRINGS.SIGN_UP}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default StarterCard;
