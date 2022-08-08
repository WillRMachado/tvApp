import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageLoader, CustomText, CustomIcon, EpisodeDisplay} from '~components';
import {useTheme} from '~modules';
import {navigate, useNavigation} from '~src/navigation/actions';
import routes from '~src/navigation/routeNames';
import globalStyles, {measures, ThemesType, ThemeColorsTypes} from '~styles';
import {SceneWrapper} from '~template';
import {seriesTypes} from '~types';

type Props = seriesTypes.SerieType;

const SerieDisplayDetail: React.FC<Props> = ({
  serieSelected,
  seriesEpisodes,
}) => {
  const {colors}: ThemesType = useTheme();
  const styles = dynamicStyles(colors);

  const {name, image, schedule, genres, summary} = serieSelected;

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.wrapperInfo}>
          <ImageLoader width={measures.fontSize.XXL} imageUri={image.medium} />
          <View style={styles.wrapperDescription}>
            <CustomText title>{name}</CustomText>

            <View style={styles.textBox}>
              {schedule.days.map((day) => (
                <CustomText>{`${day} ${schedule.time}`}</CustomText>
              ))}
            </View>
            <View style={styles.textBox}>
              {genres.map((genre) => (
                <CustomText>{genre}</CustomText>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.wrapperInfo}>
          <View style={styles.textBox}>
            <CustomText>{summary}</CustomText>
          </View>
        </View>
      </View>
    </>
  );
};

export default SerieDisplayDetail;

const dynamicStyles = (colors: ThemeColorsTypes) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'column',
      marginBottom: measures.fontSize.XS,
    },
    wrapperInfo: {
      flexDirection: 'row',
    },
    wrapperDescription: {
      flex: 1,
      flexDirection: 'column',
      marginHorizontal: measures.fontSize.XS,
    },
    textBox: {
      marginTop: measures.fontSize.XS,
    },
  });
};
