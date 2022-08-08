import {createSlice, createAsyncThunk, ActionReducerMapBuilder} from '~modules';
import {getShowSeasonEpisodes} from '~src/service/tvMaze';
import {RootState} from '~store';
import {seriesTypes} from '~types';

type StateType = {
  isLoading: boolean;
  hasError: boolean;
  episodes: seriesTypes.SerieEpisodeType[];
  seasons: number[];
};

const initialState: StateType = {
  isLoading: false,
  hasError: false,
  episodes: [],
  seasons: [],
};

const seriesDetailData = createSlice({
  name: 'seriesDetail',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    asyncFetchSeriesSeasonBuilder(builder);
  },
});

const asyncFetchSeriesSeasonBuilder = (
  builder: ActionReducerMapBuilder<StateType>,
) => {
  builder.addCase(asyncFetchSeriesSeason.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(asyncFetchSeriesSeason.rejected, (state) => {
    state.hasError = true;
    state.isLoading = false;
  });
  builder.addCase(asyncFetchSeriesSeason.fulfilled, (state, action) => {
    const receivedData = action.payload;
    state.episodes = receivedData;
    const seasons = receivedData.map((episode) => episode.season);
    const seasonsSet = new Set(seasons);
    state.seasons = [...seasonsSet];
    state.isLoading = false;
  });
};

const asyncFetchSeriesSeason = createAsyncThunk<
  seriesTypes.SerieEpisodeType[],
  number | string,
  {state: RootState}
>('seriesSeason/fetch', async (serieId) => {
  const response = await getShowSeasonEpisodes(serieId);
  return response?.data || [];
});

export {asyncFetchSeriesSeason};
export default seriesDetailData.reducer;
