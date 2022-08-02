import {combineReducers} from 'redux';

import seriesReducer from './series';

const store = combineReducers({
  series: seriesReducer,
});

export default store;
