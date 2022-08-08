import React from 'react';
import {SeasonSection, SerieDisplayDetail, Spinner} from '~components';
import {seriesTypes} from '~types';
import {SceneWrapperScrolled} from '~template';

type Props = {
  serieSelected: seriesTypes.SerieType;
  seriesEpisodes: seriesTypes.SerieEpisodeType[];
  seriesSeasons: number[];
  isLoading?: boolean;
};

const SerieDetail: React.FC<Props> = ({
  serieSelected,
  seriesSeasons,
  seriesEpisodes,
  isLoading,
}) => {
  return (
    <SceneWrapperScrolled>
      <SerieDisplayDetail serieSelected={serieSelected} />
      {isLoading ? (
        <Spinner />
      ) : (
        seriesSeasons.map((season) => (
          <SeasonSection
            key={season}
            season={season}
            seriesEpisodes={seriesEpisodes}
          />
        ))
      )}
    </SceneWrapperScrolled>
  );
};

export default SerieDetail;
