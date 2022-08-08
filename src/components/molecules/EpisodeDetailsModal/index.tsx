import React from 'react';

import {CustomText} from '~atoms';
import {Dialog, DialogContent, DialogHeader, DialogProps} from '~modules';
import {seriesTypes} from '~types';

type Props = DialogProps & {
  episode: seriesTypes.SerieEpisodeType;
};

const EpisodeDisplay: React.FC<Props> = ({episode, ...params}) => {
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
