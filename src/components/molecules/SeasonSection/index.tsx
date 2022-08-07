import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ImageLoader, CustomText, CustomIcon, EpisodeDisplay} from '~components';
import {useTheme} from '~modules';
import {navigate, useNavigation} from '~src/navigation/actions';
import routes from '~src/navigation/routeNames';
import globalStyles, {measures, ThemesType, ThemeColorsTypes} from '~styles';
import {seriesTypes} from '~types';

type Props = seriesTypes.SerieType;

const SeriesItem: React.FC<Props> = ({season, seriesEpisodes}) => {
  const {colors}: ThemesType = useTheme();
  const styles = dynamicStyles(colors);

  const [isOpen, setIsOpen] = useState(false);

  const navigation = useNavigation();

  const onPressSection = () => setIsOpen((state) => !state);

  const episodesInSeason = seriesEpisodes.filter(
    (episode) => episode.season === season,
  );


  return (
    <>
      <TouchableOpacity onPress={onPressSection} style={styles.sectionWrapper}>
        <View style={styles.sectionInside}>
          <CustomText>{`Season ${season}`}</CustomText>
          <CustomIcon
            name={isOpen ? 'chevron-down' : 'chevron-right'}
            size={measures.fontSize.L}
          />
        </View>
      </TouchableOpacity>
      {isOpen &&
        episodesInSeason.map((episode) => <EpisodeDisplay episode={episode} />)}
    </>
  );
};

export default SeriesItem;

const dynamicStyles = (colors: ThemeColorsTypes) => {
  return StyleSheet.create({
    sectionWrapper: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: measures.fontSize.XXS,
    },
    sectionInside: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: measures.fontSize.XS,

      borderWidth: measures.fontSize.XXXS,
    },
    textWrapper: {},
    text: {
      marginBottom: measures.fontSize.L,
      color: colors.primary,
    },
  });
};
