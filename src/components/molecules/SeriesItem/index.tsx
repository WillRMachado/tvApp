import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageLoader, CustomText} from '~components';
import {useTheme} from '~modules';
import {navigate, useNavigation} from '~src/navigation/actions';
import routes from '~src/navigation/routeNames';
import {measures, ThemesType, ThemeColorsTypes} from '~styles';
import {seriesTypes} from '~types';

type Props = seriesTypes.SerieType;

const imageSizeAdjustFactor = 0.95;

const SeriesItem: React.FC<Props> = (props) => {
  const {name, image} = props;
  const {colors}: ThemesType = useTheme();
  const styles = dynamicStyles(colors);

  const navigation = useNavigation();

  const onPressDefault = () =>
    navigation.dispatch(navigate(routes.series.displayDetails, props));

  return (
    <TouchableOpacity onPress={onPressDefault} style={styles.itemWrapper}>
      <ImageLoader
        width={measures.paddingAdjustedScreenWidth * imageSizeAdjustFactor}
        imageUri={image?.original}
      />
      <View style={styles.textWrapper}>
        <CustomText style={styles.text}>{name?.toUpperCase()}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default SeriesItem;

const dynamicStyles = (colors: ThemeColorsTypes) => {
  return StyleSheet.create({
    itemWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWrapper: {},
    text: {
      marginBottom: measures.fontSize.L,
      color: colors.primary,
    },
  });
};
