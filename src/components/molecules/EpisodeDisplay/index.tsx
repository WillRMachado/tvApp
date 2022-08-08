import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {CustomText} from '~atoms';

import EpisodeDetailsModal from '../EpisodeDetailsModal';
import {measures} from '~styles';
import {seriesTypes} from '~types';

type Props = {episode: seriesTypes.SerieEpisodeType};

const EpisodeDisplay: React.FC<Props> = ({episode}) => {
  const [showEpisodeDetails, setShowEpisodeDetails] = useState(false);

  const onPressEpisode = () => {
    setShowEpisodeDetails(true);
  };

  const onDismissDialog = () => {
    setShowEpisodeDetails(false);
  };

  return (
    <>
      <TouchableOpacity onPress={onPressEpisode} style={styles.wrapper}>
        <CustomText style={styles.text}>{episode.name}</CustomText>
      </TouchableOpacity>
      <EpisodeDetailsModal
        visible={showEpisodeDetails}
        onDismiss={onDismissDialog}
        episode={episode}
      />
    </>
  );
};

export default EpisodeDisplay;

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: measures.fontSize.XS,
    marginTop: measures.fontSize.XXS,
  },
  text: {
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
});
