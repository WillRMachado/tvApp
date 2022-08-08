import React, {useEffect, useState} from 'react';
import DisplaySeries from './DisplaySeries';
import {useAppDispatch, useAppSelector} from '~utils';
import {asyncFetchSeries, asyncSearchSeries} from '~store/reducers/series';
import debounce from 'lodash/debounce';

const DisplaySeriesIndex: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);

  const dispatch = useAppDispatch();

  const seriesList = useAppSelector((state) => state.store.series.seriesList);
  const seriesSearchedList = useAppSelector(
    (state) => state.store.series.seriesSearchedList,
  );
  const isLoadingPage = useAppSelector((state) => state.store.series.isLoading);
  const isLoadingSearch = useAppSelector(
    (state) => state.store.series.isLoadingSearch,
  );
  const hasError = useAppSelector((state) => state.store.series.hasError);
  const hasErrorSearch = useAppSelector(
    (state) => state.store.series.hasErrorSearch,
  );

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    dispatch(asyncFetchSeries());
  };

  const searchSeries = async (term: string) => {
    dispatch(asyncSearchSeries(term));
  };

  const onEndReached = () => {
    fetchSeries();
  };

  const onChangeTextSearch = (text: string) => {
    searchSeries(text);
    text.length >= 1 ? setIsSearching(true) : setIsSearching(false);
  };

  const debouncedSearch = debounce(onChangeTextSearch, 1000);

  return (
    <DisplaySeries
      seriesList={seriesList}
      onEndReached={onEndReached}
      onChangeTextSearch={debouncedSearch}
      seriesSearchedList={seriesSearchedList}
      isSearching={isSearching}
      isLoadingPage={isLoadingPage}
      isLoadingSearch={isLoadingSearch}
      hasError={hasError}
      hasErrorSearch={hasErrorSearch}
    />
  );
};

export default DisplaySeriesIndex;
