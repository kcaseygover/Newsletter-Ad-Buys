import { combineReducers } from 'redux'
import tableReducer from './table'
import appReducer from './adsBuy';

const rootReducer = combineReducers({
  appReducer, tableReducer
})

export default rootReducer
