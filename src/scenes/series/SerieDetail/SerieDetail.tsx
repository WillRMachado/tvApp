import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {
  ImageLoader,
  SeriesList,
  SeriesListType,
  SeasonSection,
  CustomText,
  SerieDisplayDetail,
} from '~components';
import CustomTextInput from '~src/components/atoms/CustomTextInput';
import {measures} from '~styles';
import {seriesTypes} from '~types';
import {decode} from 'html-entities';
import {SceneWrapperScrolled} from '~template';

type Props = seriesTypes.SerieType;

const SerieDetail: React.FC<Props> = ({
  serieSelected,
  seriesSeasons,
  seriesEpisodes,
}) => {
  return (
    <>
      <SceneWrapperScrolled>
        <SerieDisplayDetail serieSelected={serieSelected} />
        {seriesSeasons.map((season) => (
          <SeasonSection season={season} seriesEpisodes={seriesEpisodes} />
        ))}
      </SceneWrapperScrolled>
    </>
  );
};

export default SerieDetail;

const styles = StyleSheet.create({
  searchWrapper: {
    margin: measures.fontSize.XS,
  },
});
