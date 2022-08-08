import {combineReducers} from 'redux';

import seriesReducer from './series';
import seriesDetailReducer from './serieDetail';

const store = combineReducers({
  series: seriesReducer,
  seriesDetail: seriesDetailReducer,
});

export default store;
