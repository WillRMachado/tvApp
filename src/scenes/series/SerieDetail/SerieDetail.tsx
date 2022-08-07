import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {ImageLoader, SeriesList, SeriesListType, SeasonSection} from '~components';
import CustomTextInput from '~src/components/atoms/CustomTextInput';
import {measures} from '~styles';
import {seriesTypes} from '~types';

type Props = seriesTypes.SerieType;

const SerieDetail: React.FC<Props> = (props) => {
  // console.log({props: props.name});
  return (
    <>
      <View>
        <ImageLoader imageUri="" />
        <Text>titulo</Text>
      </View>
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <SeasonSection />
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text>sessao</Text>
        <Text>ico</Text>
      </View>
      <View>
        <Text>epi</Text>
      </View>
      {/* <View style={styles.searchWrapper}>
        <CustomTextInput
          onChangeText={onChangeTextSearch}
          trailingIconName="search-web"
        />
      </View> */}

      {/* {isSearching ? (
        <SeriesList
          seriesList={seriesSearchedList}
          onEndReached={onEndReached}
        />
      ) : (
        <SeriesList seriesList={seriesList} onEndReached={onEndReached} />
      )} */}
    </>
  );
};

export default SerieDetail;

const styles = StyleSheet.create({
  searchWrapper: {
    margin: measures.fontSize.XS,
  },
});
