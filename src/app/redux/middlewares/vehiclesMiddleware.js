import { addVehicleService, getVehiclesService } from '../../services/vehiclesService'
import { setDriverAction } from '../actions/driversActions'
import { addVechicleAction, handleModalAddVechileAction, loadingAddVehicleAction, loadingVehiclesAction, setSearcherParamsVechicles, setVehiclesAction } from '../actions/vehiclesActions'

export const getVehiclesMiddleware = (page=0, size=50, user=null) => {
  return async (dispatch) => {
    dispatch(loadingVehiclesAction(true))
    dispatch(setSearcherParamsVechicles({ currentPage: page, rowsPerPage: size }))
    dispatch(setVehiclesAction(await getVehiclesService(++page, size, user)))
    dispatch(loadingVehiclesAction(false))
  }
}

export const addVehicleMiddleware = (vehicleData) => {
  return async (dispatch) => {
    dispatch(loadingAddVehicleAction(true))
    const result = await addVehicleService(vehicleData)
    dispatch(addVechicleAction(result))
    dispatch(handleModalAddVechileAction(false))
    dispatch(setDriverAction(null))
    dispatch(loadingAddVehicleAction(false))
  }
}