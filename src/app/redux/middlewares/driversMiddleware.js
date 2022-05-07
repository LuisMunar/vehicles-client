import { loadingDriverAction, setDriverAction } from '../actions/driversActions'
import { getDriverService } from '../../services/driversService'

export const getDriverMiddleware = (driverId) => {
  return async (dispatch) => {
    dispatch(loadingDriverAction(true))
    dispatch(setDriverAction(await getDriverService(driverId)))
    dispatch(loadingDriverAction(false))
  }
}