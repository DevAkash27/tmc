import React from 'react';
import {Image, View} from 'react-native';
import {INFORMATION} from '../../../constants/assets';
import COLORS from '../../../constants/colors';
import StyledText from '../../../components/StyledText';
import AppFonts from '../../../constants/fonts';
import AbrilFont from '../../../components/StyledAbrilText';
import SignUpStyles from '../styles';
import {DESCRIPTION_STRINGS} from '../../../constants/strings';

const DescriptionComponent = () => {
  //common view for description view
  const DescriptionView = ({image, heading, text}) => {
    return (
      <View style={SignUpStyles.descriptionItem}>
        <View style={{flexDirection: 'row'}}>
          <Image source={image} style={SignUpStyles.descriptionIcon} />
          <AbrilFont
            style={SignUpStyles.descriptionHeading}
            color={COLORS.BLACK}>
            {heading}
          </AbrilFont>
        </View>
        <StyledText
          style={{marginTop: 10}}
          mode={AppFonts.BodyRegular14}
          color={COLORS.BLACK}>
          {text}
        </StyledText>
      </View>
    );
  };
  return (
    <View style={SignUpStyles.descriptionContainer}>
      <AbrilFont style={{fontSize: 32}} color={COLORS.BLACK}>
        {DESCRIPTION_STRINGS.WHY_TMC}
      </AbrilFont>
      <DescriptionView
        image={INFORMATION}
        heading={DESCRIPTION_STRINGS.INFO_HEADING}
        text={DESCRIPTION_STRINGS.INFO_TEXT}
      />
      <DescriptionView
        image={INFORMATION}
        heading={DESCRIPTION_STRINGS.JOURNALISM_HEADING}
        text={DESCRIPTION_STRINGS.JOURNALISM_TEXT}
      />

      <DescriptionView
        image={INFORMATION}
        heading={DESCRIPTION_STRINGS.NEWSLETTER_HEADING}
        text={DESCRIPTION_STRINGS.NEWSLETTER_TEXT}
      />
      <DescriptionView
        image={INFORMATION}
        heading={DESCRIPTION_STRINGS.DIALOGUE_HEADING}
        text={DESCRIPTION_STRINGS.DIALOGUE_TEXT}
      />
    </View>
  );
};
export default DescriptionComponent;
