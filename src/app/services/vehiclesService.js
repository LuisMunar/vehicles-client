import apiConfig from '../config/apiConfig'
import { httpDeleteMethod, httpGetMethod, httpPostMethod, httpPutMethod } from './httpSerivce'

export const getVehiclesService = (page, size, driversId) => {
  return new Promise(async (resolve) => {
    const { data } = await httpGetMethod(apiConfig.vehiclesEndpoint, { page, size, drivers_id: driversId ? JSON.stringify(driversId) : driversId })
    resolve(data.result)
  })
}

export const addVehicleService = (vehicleDataToAdd) => {
  return new Promise(async (resolve) => {
    const { driverId, plate, model, type, capacity, driver } = vehicleDataToAdd
    const { data: { result } } = await httpPostMethod(apiConfig.vehiclesEndpoint, {
      driver_id: driverId,
      plate,
      model,
      type,
      capacity
    })

    resolve({
      ...result,
      driver
    })
  })
}

export const updateVehicleService = (vehicleDataToUpdate) => {
  return new Promise(async (resolve) => {
    const { id, plate, model, type, capacity } = vehicleDataToUpdate
    const { data: { result } } = await httpPutMethod(apiConfig.vehiclesEndpoint, { id, plate, model, type, capacity })
    resolve(result)
  })
}

export const deleteVehicleService = (vehicleId) => {
  return new Promise(async (resolve) => {
    const { data: { result } } = await httpDeleteMethod(apiConfig.vehiclesEndpoint, { id: vehicleId })
    resolve(result)
  })
}