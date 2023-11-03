import React from 'react';
import {Text} from 'react-native';

// Utils
import AppFonts, * as Fonts from '../constants/fonts';
import COLORS from '../constants/colors';

const AbrilFont = props => {
  const {
    mode = AppFonts.AbrilFont,
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

export default AbrilFont;
