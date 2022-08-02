import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SeriesList, SeriesListType} from '~components';
import CustomTextInput from '~src/components/atoms/CustomTextInput';
import {measures} from '~styles';
import {seriesTypes} from '~types';

type Props = SeriesListType & {
  onChangeTextSearch: (arg0: string) => void;
  isSearching: boolean;
  seriesSearchedList: seriesTypes.SerieType[];
};

const DisplaySeries: React.FC<Props> = ({
  seriesList,
  onEndReached,
  onChangeTextSearch,
  isSearching,
  seriesSearchedList,
}) => {
  return (
    <>
      <View style={styles.searchWrapper}>
        <CustomTextInput
          onChangeText={onChangeTextSearch}
          trailingIconName="search-web"
        />
      </View>

      {isSearching ? (
        <SeriesList
          seriesList={seriesSearchedList}
          onEndReached={onEndReached}
        />
      ) : (
        <SeriesList seriesList={seriesList} onEndReached={onEndReached} />
      )}
    </>
  );
};

export default DisplaySeries;

const styles = StyleSheet.create({
  searchWrapper: {
    margin: measures.fontSize.XS,
  },
});