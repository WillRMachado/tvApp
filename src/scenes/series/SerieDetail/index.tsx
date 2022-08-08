import React, {useEffect, useState} from 'react';
import SerieDetail from './SerieDetail';
import {useAppDispatch, useAppSelector} from '~utils';
import {asyncFetchSeries, asyncSearchSeries} from '~store/reducers/series';
import debounce from 'lodash/debounce';
import {RoutesProps} from '~src/navigation/routeNames';
import {seriesTypes} from '~types';
import {getShowSeason} from '~src/service/tvMaze';
import {asyncFetchSeriesSeason} from '~src/store/reducers/serieDetail';

type Props = RoutesProps<seriesTypes.SerieType>;

const SerieDetailIndex: React.FC<Props> = (props) => {
  const {params} = props.route;
  const serieSelected = params;

  const dispatch = useAppDispatch();

  const seriesSeasons = useAppSelector(
    (state) => state.store.seriesDetail.seasons,
  );

  const seriesEpisodes = useAppSelector(
    (state) => state.store.seriesDetail.episodes,
  );

  const isLoading = useAppSelector(
    (state) => state.store.seriesDetail.isLoading,
  );

  const fetchSeason = async () => {
    dispatch(asyncFetchSeriesSeason(serieSelected.id));
  };

  useEffect(() => {
    fetchSeason();
  }, []);

  return (
    <SerieDetail
      serieSelected={serieSelected}
      seriesSeasons={seriesSeasons}
      seriesEpisodes={seriesEpisodes}
      isLoading={isLoading}
    />
  );
};

export default SerieDetailIndex;
