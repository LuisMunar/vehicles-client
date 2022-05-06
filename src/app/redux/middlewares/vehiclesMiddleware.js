import { getVehiclesService } from '../../services/vehiclesService'
import { loadingVehiclesAction, setSearcherParamsVechicles, setVehiclesAction } from '../actions/vehiclesActions'

export const getVehiclesMiddleware = (page=1, size=50, user=null) => {
  return async (dispatch) => {
    dispatch(loadingVehiclesAction(true))
    dispatch(setSearcherParamsVechicles({ currentPage: page, rowsPerPage: size }))
    dispatch(setVehiclesAction(await getVehiclesService(page, size, user)))
    dispatch(loadingVehiclesAction(false))
  }
}