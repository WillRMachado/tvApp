import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {CircleSnail} from 'react-native-progress';
import {Spinner} from '~components';
import {SeriesItem} from '~molecules';
import {seriesTypes} from '~types';

export type Props = {
  seriesList: seriesTypes.SerieType[];
  onEndReached: () => void;
};

const SeriesList: React.FC<Props> = ({isLoading, seriesList, onEndReached}) => {
  return (
    <View style={styles.listWrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={seriesList}
          renderItem={({item}) => <SeriesItem {...item} />}
          keyExtractor={(item) => String(item.id)}
          onEndReachedThreshold={0.1}
          onEndReached={onEndReached}
        />
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
