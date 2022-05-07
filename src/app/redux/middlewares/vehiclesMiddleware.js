import { getDriversByName } from '../../services/driversService'
import { addVehicleService, getVehiclesService, updateVehicleService } from '../../services/vehiclesService'
import { setDriverAction } from '../actions/driversActions'
import { addVechicleAction, handleModalAddVechileAction, loadingAddVehicleAction, loadingVehicleEdit, loadingVehiclesAction, setNewDataVehicleUpdated, setSearcherParamsVechicles, setVehiclesAction } from '../actions/vehiclesActions'

export const getVehiclesMiddleware = (page=0, size=50, driversId=null) => {
  return async (dispatch) => {
    dispatch(loadingVehiclesAction(true))
    dispatch(setSearcherParamsVechicles({ currentPage: page, rowsPerPage: size }))
    dispatch(setVehiclesAction(await getVehiclesService(++page, size, driversId)))
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

export const getVehiclesByDriverName = (driverName) => {
  return async (dispatch) => {
    if(driverName === '') {
      dispatch(getVehiclesMiddleware())
      return
    }

    dispatch(loadingVehiclesAction(true))
    const drivers = await getDriversByName(driverName)
    if(drivers && drivers.length>0) {
      dispatch(getVehiclesMiddleware(0, 50, drivers.map(user => user.id)))
      return
    }

    dispatch(setVehiclesAction({ count: 0, totalPages: 0, rows: [] }))
    dispatch(loadingVehiclesAction(false))
  }
}

export const updateVehicleMiddleware = (vehicleToEdit) => {
  return async (dispatch) => {
    dispatch(loadingVehicleEdit(true))
    await updateVehicleService(vehicleToEdit)
    dispatch(setNewDataVehicleUpdated(vehicleToEdit))
    dispatch(loadingVehicleEdit(false))
  }
}