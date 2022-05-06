import { getVehiclesService } from '../../services/vehiclesService'
import { loadingVehiclesAction, setVehiclesAction } from '../actions/vehiclesActions'

export const getVehiclesMiddleware = () => {
  return async (dispatch) => {
    dispatch(loadingVehiclesAction(true))
    dispatch(setVehiclesAction(await getVehiclesService()))
    dispatch(loadingVehiclesAction(false))
    
  }
}