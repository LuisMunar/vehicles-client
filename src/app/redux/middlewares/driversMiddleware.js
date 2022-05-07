import { loadingDriverAction, setDriverNameAction } from '../actions/driversActions'
import { getDriverNameService } from '../../services/driversService'

export const getDriverMiddleware = (driverId) => {
  return async (dispatch) => {
    dispatch(loadingDriverAction(true))
    dispatch(setDriverNameAction(await getDriverNameService(driverId)))
    dispatch(loadingDriverAction(false))
  }
}