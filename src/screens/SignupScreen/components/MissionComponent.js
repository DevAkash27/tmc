import React from 'react';
import {View} from 'react-native';
import COLORS from '../../../constants/colors';
import AbrilFont from '../../../components/StyledAbrilText';
import GradientText from '../../../components/GradientText';
import SignUpStyles from '../styles';
import {MISSION_STRINGS} from '../../../constants/strings';

const MissionComponent = () => {
  return (
    <View style={SignUpStyles.missionContainer}>
      <AbrilFont style={{fontSize: 32}} color={COLORS.BLACK}>
        {MISSION_STRINGS.OUR_JOURNALISM}
      </AbrilFont>
      <AbrilFont style={SignUpStyles.missionText1} color={'#051462'}>
        {MISSION_STRINGS.OUR_MISSION}
      </AbrilFont>
      <GradientText style={SignUpStyles.gradientText} color={COLORS.BLACK}>
        {MISSION_STRINGS.INDEPENDENT}
      </GradientText>
      <AbrilFont style={SignUpStyles.gradientText} color={COLORS.DARK_BLUE}>
        {MISSION_STRINGS.MEDIA}
      </AbrilFont>
      <GradientText style={SignUpStyles.gradientText} color={COLORS.BLACK}>
        {MISSION_STRINGS.STORIES}
      </GradientText>
    </View>
  );
};
export default MissionComponent;
