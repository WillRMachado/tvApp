import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {CustomText, Spinner} from '~components';
import {SeriesItem} from '~molecules';
import {seriesTypes} from '~types';

export type Props = {
  seriesList: seriesTypes.SerieType[];
  onEndReached: () => void;
  isLoading?: boolean;
  hasError?: boolean;
};

const SeriesList: React.FC<Props> = ({
  isLoading,
  hasError,
  seriesList,
  onEndReached,
}) => {
  if (isLoading) return <Spinner />;

  return (
    <View style={styles.listWrapper}>
      {seriesList.length > 0 ? (
        <FlatList
          data={seriesList}
          renderItem={({item}) => <SeriesItem {...item} />}
          keyExtractor={(item) => String(item.id)}
          onEndReachedThreshold={0.1}
          onEndReached={onEndReached}
        />
      ) : (
        <CustomText>
          {hasError
            ? 'Looks like there was an error trying to get result, please try again later'
            : 'No results to be shown'}
        </CustomText>
      )}
    </View>
  );
};

export default SeriesList;

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  },
});
