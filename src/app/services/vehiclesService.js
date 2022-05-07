import apiConfig from '../config/apiConfig'
import { httpGetMethod, httpPostMethod } from './httpSerivce'

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

// fetch('http://localhost:8000/vehicles', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     driver_id: 7,
//     plate: 'plate',
//     model: 'model',
//     type: 'type',
//     capacity: 'capacity'
//   })
// })
//   .then(response => response.json())
//   .then(aaa => console.log(aaa))

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