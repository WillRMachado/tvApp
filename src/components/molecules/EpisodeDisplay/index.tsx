import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {CustomText} from '~atoms';
import {Modal} from '~modules';
import {Dialog, DialogHeader} from '@react-native-material/core';

const EpisodeDisplay: React.FC = ({...params}) => {
  const [showEpisodeDetails, setShowEpisodeDetails] = useState(false);

  const onPressEpisode = (params) => {
    setShowEpisodeDetails(true);
  };

  return (
    <>
      <TouchableOpacity onPress={onPressEpisode}>
        <CustomText style={styles.text}>epep</CustomText>
      </TouchableOpacity>
      <Dialog visible={showEpisodeDetails} onDismiss={() => null}>
        <DialogHeader title="aaa" />
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
