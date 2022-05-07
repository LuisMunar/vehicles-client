import apiConfig from '../config/apiConfig'
import { httpGetMethod, httpPostMethod, httpPutMethod } from './httpSerivce'

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

// fetch('http://localhost:8000/vehicles', {
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     id: 10005,
//     plate: 'plate updated I',
//     model: 'model updated I',
//     type: 'type updated I',
//     capacity: 'capacity updated I'
//   })
// })
//   .then(response => response.json())
//   .then(aaa => console.log(aaa))

// fetch('http://localhost:8000/vehicles?id=10005', { method: 'DELETE' })
//   .then(response => response.json())
//   .then(aaa => console.log(aaa))