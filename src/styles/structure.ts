import {StatusBar, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from '~modules';
import mainTheme from './themes/main';

const statusBarHeight = StatusBar.currentHeight || 0;
const standardPadding = 10;

const fontSize = {
  XXXS: responsiveFontSize(0.1),
  XXS: responsiveFontSize(0.5),
  XS: responsiveFontSize(1.5),
  S: responsiveFontSize(2),
  M: responsiveFontSize(2.5),
  L: responsiveFontSize(3),
  XL: responsiveFontSize(6),
  XXL: responsiveFontSize(20),
  iconXXL: responsiveFontSize(25),
};
const layout = {
  XXXS: responsiveFontSize(30),
  XXS: responsiveFontSize(40),
  XS: responsiveFontSize(50),
  S: responsiveFontSize(60),
  M: responsiveFontSize(70),
  L: responsiveFontSize(80),
  XL: responsiveFontSize(90),
  XXL: responsiveFontSize(100),
  iconXXL: responsiveFontSize(110),
};

const border = {
  borderWidthStandard: responsiveWidth(100) / 500,
  borderRadiusStandard: responsiveWidth(100) / 25,
  borderRadiusDetail: responsiveWidth(100) / 75,
};

const measures = {
  standardPadding: standardPadding,
  responsiveHeight: responsiveHeight(100),
  responsiveWidth: responsiveWidth(100),
  paddingAdjustedScreenHeight:
    responsiveHeight(100) - standardPadding * 2 - statusBarHeight,
  paddingAdjustedScreenWidth: responsiveWidth(100) - standardPadding * 2,
  fontSize,
  border,
  layout,
};

const structure = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: standardPadding,
    backgroundColor: mainTheme.colors.background,
  },
});

export {measures, structure};
