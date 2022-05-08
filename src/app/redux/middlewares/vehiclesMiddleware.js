import { NOTIFICATION_SUCCESS } from '../../constants/notificationsConstants'
import { getDriversByName } from '../../services/driversService'
import { addVehicleService, deleteVehicleService, getVehiclesService, updateVehicleService } from '../../services/vehiclesService'
import { setDriverAction } from '../actions/driversActions'
import { showNotificationAction } from '../actions/notificationsActions'
import { addVechicleAction, deleteVehicleAction, handleModalAddVechileAction, loadingAddVehicleAction, loadingVehicleEdit, loadingVehiclesAction, setNewDataVehicleUpdated, setSearcherParamsVechicles, setVehiclesAction } from '../actions/vehiclesActions'

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
    dispatch(showNotificationAction({ type: NOTIFICATION_SUCCESS, message: 'Vehicle added' }))
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

export const deleteVehicleMiddleware = (vehicleId) => {
  return async (dispatch) => {
    await deleteVehicleService(vehicleId)
    dispatch(deleteVehicleAction(vehicleId))
    dispatch(showNotificationAction({ type: NOTIFICATION_SUCCESS, message: 'Vehicle deleted' }))
  }
}