import {createSlice, createAsyncThunk, ActionReducerMapBuilder} from '~modules';
import {
  getShowSeasonEpisodes,
  getShowsList,
  searchShowsList,
} from '~src/service/tvMaze';
import {RootState} from '~store';
import {addPageFromUndefined, parseNetworkError} from '~utils';
import {seriesTypes} from '~types';
import {searchToList} from '~src/service/dto/tvMaze';

type StateType = {
  isLoading: boolean;
  hasError: boolean;
  episodes: Record<string, any>;
  seasons: [];
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
  {list: seriesTypes.SerieType[]; page?: number},
  number | string,
  {state: RootState}
>(
  'seriesSeason/fetch',
  async (serieId) => {
    const response = await getShowSeasonEpisodes(serieId);
    return response?.data || {};
  },
  // {
  //   condition: (_, thunkAPI) => {
  //     const stateRoot = thunkAPI.getState();
  //     const seriesStore = stateRoot.store.series;
  //     const {isLoading} = seriesStore;
  //     if (isLoading) return false;
  //     return true;
  //   },
  // },
);

export {asyncFetchSeriesSeason};
export default seriesDetailData.reducer;
