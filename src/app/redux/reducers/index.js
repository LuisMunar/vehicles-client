import { combineReducers } from 'redux'

import driversReducer from './driversReducer'
import vehiclesReducer from './vehiclesReducer'

export default combineReducers({
  driversReducer,
  vehiclesReducer
})