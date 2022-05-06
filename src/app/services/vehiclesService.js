import apiConfig from '../config/apiConfig'
import { httpGetMethod } from './httpSerivce'

export const getVehiclesService = (page, size, user) => {
  return new Promise(async (resolve) => {
    const { data } = await httpGetMethod(apiConfig.vehiclesEndpoint, { page, size, user })
    resolve(data.result)
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