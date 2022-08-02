import React, {useEffect, useState} from 'react';
import SerieDetail from './SerieDetail';
import {useAppDispatch, useAppSelector} from '~utils';
import {asyncFetchSeries, asyncSearchSeries} from '~store/reducers/series';
import debounce from 'lodash/debounce';
import {RoutesProps} from '~src/navigation/routeNames';
import {seriesTypes} from '~types';
import {getShowSeason} from '~src/service/tvMaze';

type Props = RoutesProps<seriesTypes.SerieType>;

const SerieDetailIndex: React.FC<Props> = (props) => {
  const {params} = props.route;
  const serieSelected = params;

  const getA = async () => {
    const jj = await getShowSeason(6);
    console.log({jj});
    return jj;
  };

  useEffect(() => {
    console.log('init');
    getA();
    console.log('end');
  }, []);

  return <SerieDetail serieSelected={serieSelected} />;
};

export default SerieDetailIndex;
