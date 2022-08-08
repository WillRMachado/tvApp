import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ImageLoader, CustomText} from '~components';
import {measures} from '~styles';
import {seriesTypes} from '~types';

type Props = {serieSelected: seriesTypes.SerieType};

const SerieDisplayDetail: React.FC<Props> = ({serieSelected}) => {
  const {name, image, schedule, genres, summary} = serieSelected;

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.wrapperInfo}>
          <ImageLoader width={measures.fontSize.XXL} imageUri={image?.medium} />
          <View style={styles.wrapperDescription}>
            <CustomText title>{name}</CustomText>

            <View style={styles.textBox}>
              {schedule?.days?.map((day) => (
                <CustomText>{`${day} ${schedule.time}`}</CustomText>
              ))}
            </View>
            <View style={styles.textBox}>
              {genres?.map((genre) => (
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

const styles = StyleSheet.create({
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
