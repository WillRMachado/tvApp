import {createSlice, createAsyncThunk, ActionReducerMapBuilder} from '~modules';
import {getShowsList, searchShowsList} from '~src/service/tvMaze';
import {RootState} from '~store';
import {addPageFromUndefined, parseNetworkError} from '~utils';
import {seriesTypes} from '~types';
import {searchToList} from '~src/service/dto/tvMaze';

type StateType = {
  isLoading: boolean;
  isLoadingSearch: boolean;
  hasError: boolean;
  hasErrorSearch: boolean;
  endReached: boolean;
  lastPageFetch?: number;
  seriesList: seriesTypes.SerieType[];
  seriesSearchedList: seriesTypes.SerieType[];
};

const initialState: StateType = {
  isLoading: false,
  isLoadingSearch: false,
  hasError: false,
  hasErrorSearch: false,
  endReached: false,
  lastPageFetch: undefined,
  seriesList: [],
  seriesSearchedList: [],
};

const seriesData = createSlice({
  name: 'seriesDetail',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    asyncFetchSeriesBuilder(builder);
    asyncSearchSeriesBuilder(builder);
  },
});

const asyncFetchSeriesBuilder = (
  builder: ActionReducerMapBuilder<StateType>,
) => {
  builder.addCase(asyncFetchSeries.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(asyncFetchSeries.rejected, (state) => {
    state.hasError = true;
    state.isLoading = false;
  });
  builder.addCase(asyncFetchSeries.fulfilled, (state, action) => {
    const fetchedPage = action.payload.page;
    state.seriesList = [...state.seriesList, ...action.payload.list];
    state.lastPageFetch = fetchedPage;
    state.isLoading = false;
  });
};

const asyncFetchSeries = createAsyncThunk<
  {list: seriesTypes.SerieType[]; page?: number},
  undefined,
  {state: RootState}
>(
  'series/fetch',
  async (_, thunkAPI) => {
    const stateRoot = thunkAPI.getState();
    const {lastPageFetch} = stateRoot.store.series;

    const pageToFetch = addPageFromUndefined(lastPageFetch);

    try {
      const response = await getShowsList(pageToFetch);
      return {
        list: response?.data || [],
        page: pageToFetch,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(parseNetworkError(error));
    }
  },
  {
    condition: (_, thunkAPI) => {
      const stateRoot = thunkAPI.getState();
      const seriesStore = stateRoot.store.series;
      const {isLoading} = seriesStore;
      if (isLoading) return false;
      return true;
    },
  },
);

const asyncSearchSeriesBuilder = (
  builder: ActionReducerMapBuilder<StateType>,
) => {
  builder.addCase(asyncSearchSeries.pending, (state) => {
    state.isLoadingSearch = true;
  });
  builder.addCase(asyncSearchSeries.rejected, (state) => {
    state.hasErrorSearch = true;
    state.isLoadingSearch = false;
  });
  builder.addCase(asyncSearchSeries.fulfilled, (state, action) => {
    state.seriesSearchedList = [...action.payload];
    state.isLoadingSearch = false;
  });
};

const asyncSearchSeries = createAsyncThunk<
  seriesTypes.SerieType[],
  string,
  {state: RootState}
>(
  'seriesSearch/fetch',
  async (term: string) => {
    const response = await searchShowsList(term);
    return searchToList(response?.data || []);
  },
  {
    condition: (_, thunkAPI) => {
      const stateRoot = thunkAPI.getState();
      const seriesStore = stateRoot.store.series;
      const {isLoadingSearch} = seriesStore;
      if (isLoadingSearch) return false;
      return true;
    },
  },
);

export {asyncFetchSeries, asyncSearchSeries};
export default seriesData.reducer;
