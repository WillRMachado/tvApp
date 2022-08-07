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
      <TouchableOpacity onPress={onPressEpisode}>
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
  text: {
    textAlign: 'left',
  },
});
