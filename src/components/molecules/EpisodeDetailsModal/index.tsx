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

const EpisodeDisplay: React.FC = ({episode, ...params}) => {
  return (
    <>
      <Dialog {...params}>
        <DialogHeader title={episode.name} />
        <DialogContent>
          <CustomText>{episode.summary}</CustomText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EpisodeDisplay;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
