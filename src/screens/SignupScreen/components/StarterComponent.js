import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {AUTHOR, BUSINESS, FOOD} from '../../../constants/assets';
import COLORS from '../../../constants/colors';
import StyledText from '../../../components/StyledText';
import AppFonts from '../../../constants/fonts';
import AbrilFont from '../../../components/StyledAbrilText';
import StarterCard from './StarterCard';
import SignUpStyles from '../styles';
import {STARTER_STRINGS} from '../../../constants/strings';

const StarterComponent = () => {
  //dummy data for starter list
  const listData = [
    {
      image: FOOD,
      authorImage: AUTHOR,
      firstName: 'FirstName',
      lastName: 'LastName',
      date: '10 July 2020',
      heading: 'Why rebel foods is alive and kicking',
      desc: 'Detractors had predicted its death but the company behind brands such as Faasos, Behrouz Biryani and Mandarin Oak has proved them wrong.',
    },
    {
      image: BUSINESS,
      authorImage: AUTHOR,
      firstName: 'FirstName',
      lastName: 'LastName',
      date: '10 July 2020',
      heading: 'Fantasy gaming’s trial by fire',
      desc: 'So far there has been a lot of talk about potential, but very little money is actually being made—and mostly by only one company',
    },
  ];

  //flst list render item
  const renderList = data => {
    return (
      <View style={SignUpStyles.starterItem}>
        <Image
          source={data?.item?.image}
          style={SignUpStyles.starterListImage}
        />
        <StyledText
          style={SignUpStyles.starterlistHeading}
          mode={AppFonts.BodySemiBold18}
          color={COLORS.BLACK}>
          {data?.item?.heading}
        </StyledText>
        <StyledText
          style={SignUpStyles.starterListDesc}
          mode={AppFonts.BodyRegular14}
          color={COLORS.BLACK}>
          {data?.item?.desc}
        </StyledText>
        <View style={SignUpStyles.separator} />
        <View style={SignUpStyles.authorView}>
          <Image
            source={data?.item?.authorImage}
            style={SignUpStyles.authorImage}
          />
          <StyledText
            style={{marginStart: 10}}
            mode={AppFonts.BodyRegular14}
            color={COLORS.BLACK}>
            {data?.item?.firstName}
          </StyledText>
          <StyledText
            style={{marginStart: 10}}
            mode={AppFonts.BodyRegular14}
            color={COLORS.BLACK}>
            {data?.item?.lastName}
          </StyledText>
        </View>
        <StyledText
          style={{marginTop: 10, marginStart: 10}}
          mode={AppFonts.BodyRegular12}
          color={COLORS.BLACK}>
          {data?.item?.date}
        </StyledText>
      </View>
    );
  };
  return (
    <View style={SignUpStyles.starterParent}>
      <AbrilFont style={{fontSize: 32}} color={COLORS.BLACK}>
        {STARTER_STRINGS.GET_START}
      </AbrilFont>
      <AbrilFont style={{fontSize: 32}} color={COLORS.BLACK}>
        {STARTER_STRINGS.FREE}
      </AbrilFont>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={listData}
        renderItem={renderList}
      />
      <AbrilFont style={SignUpStyles.signupNow} color={COLORS.BLACK}>
        {STARTER_STRINGS.COLLECTION}
      </AbrilFont>
      <StarterCard />
    </View>
  );
};
export default StarterComponent;
