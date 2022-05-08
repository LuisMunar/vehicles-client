import { combineReducers } from 'redux'

import driversReducer from './driversReducer'
import vehiclesReducer from './vehiclesReducer'
import notificationsReducer from './notificationsReducer'

export default combineReducers({
  driversReducer,
  vehiclesReducer,
  notificationsReducer
})