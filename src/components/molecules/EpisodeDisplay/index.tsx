import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {CustomText} from '~atoms';
import {Modal} from '~modules';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
} from '@react-native-material/core';
import EpisodeDetailsModal from '../EpisodeDetailsModal';
import {measures} from '~styles';

const EpisodeDisplay: React.FC = ({episode}) => {
  const [showEpisodeDetails, setShowEpisodeDetails] = useState(false);

  const onPressEpisode = (params) => {
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
