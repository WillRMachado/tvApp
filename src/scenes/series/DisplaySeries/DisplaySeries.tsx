import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SeriesList, SeriesListType} from '~components';
import CustomTextInput from '~src/components/atoms/CustomTextInput';
import {measures} from '~styles';
import {seriesTypes} from '~types';
import {SceneWrapper} from '~template';

type Props = SeriesListType & {
  onChangeTextSearch: (arg0: string) => void;
  isSearching: boolean;
  seriesSearchedList: seriesTypes.SerieType[];
  isLoadingPage?: boolean;
  isLoadingSearch?: boolean;
  hasError?: boolean;
  hasErrorSearch?: boolean;
};

const DisplaySeries: React.FC<Props> = ({
  seriesList,
  onEndReached,
  onChangeTextSearch,
  isSearching,
  seriesSearchedList,
  isLoadingPage,
  isLoadingSearch,
  hasError,
  hasErrorSearch,
}) => {
  return (
    <SceneWrapper isLoading={isLoadingPage}>
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
          isLoading={isLoadingSearch}
          hasError={hasErrorSearch}
        />
      ) : (
        <SeriesList
          seriesList={seriesList}
          onEndReached={onEndReached}
          hasError={hasError}
        />
      )}
    </SceneWrapper>
  );
};

export default DisplaySeries;

const styles = StyleSheet.create({
  searchWrapper: {
    margin: measures.fontSize.XS,
  },
});
