import React from 'react';
import {Text} from 'react-native';

// Utils
import AppFonts, * as Fonts from '../constants/fonts';
import COLORS from '../constants/colors';

const StyledText = props => {
  const {
    mode = AppFonts.BodyRegular16,
    children,
    style,
    color = COLORS.BLACK,
    ...restOfProps
  } = props;

  return (
    <Text
      {...restOfProps}
      style={[style, {color: color}, mode]}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default StyledText;
