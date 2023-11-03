import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {BACKGROUND} from '../../../constants/assets';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../constants/colors';
import StyledText from '../../../components/StyledText';
import AppFonts from '../../../constants/fonts';
import SignUpStyles from '../styles';
import {CONTEXT_STRINGS} from '../../../constants/strings';

const ContextComponent = () => {
  return (
    <View>
      <Image source={BACKGROUND} style={SignUpStyles.contextBackground} />
      <View style={SignUpStyles.contextHeading}>
        <StyledText mode={AppFonts.BodySemiBold32} color={COLORS.WHITE}>
          {CONTEXT_STRINGS.CONTEXT_TEXT}
        </StyledText>
        <StyledText
          style={SignUpStyles.margin10}
          mode={AppFonts.BodySemiBold24}
          color={COLORS.WHITE}>
          {CONTEXT_STRINGS.READ_STORY}
        </StyledText>

        <StyledText
          style={SignUpStyles.startReadingText}
          mode={AppFonts.BodyRegular18}
          color={COLORS.WHITE}>
          {CONTEXT_STRINGS.JOIN_NOW}
        </StyledText>
        <TouchableOpacity style={SignUpStyles.getStartedContainer}>
          <LinearGradient
            colors={[COLORS.BLUE_GRADIENT, COLORS.PURPLE_GRADIENT]}
            start={{x: 0, y: 0.5}}
            end={{x: 1.2, y: 0.5}}
            style={SignUpStyles.getStartedButton}>
            <Text style={{color: COLORS.WHITE}}>
              {CONTEXT_STRINGS.GET_STARTED}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ContextComponent;
