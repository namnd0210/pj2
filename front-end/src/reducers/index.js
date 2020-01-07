import { combineReducers } from 'redux';

import data from './dataReducer';
import loadingData from './loadingDataReducer';

const reducers = combineReducers({
  data: data,
  loadingData: loadingData
})

export default reducers