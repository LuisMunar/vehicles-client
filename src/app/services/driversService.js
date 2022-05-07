import { httpGetMethod } from './httpSerivce'
import apiConfig from '../config/apiConfig'

export const getDriverService = (diverId) => {
  return new Promise(async (resolve) => {
    const { data:{ result } } = await httpGetMethod(apiConfig.driversEndpoint, { id: diverId })
    resolve(typeof(result) === 'string' ? {} : result)
  })
}

export const getDriversByName = (driverName) => {
  return new Promise(async (resolve) => {
    const { data:{ result } } = await httpGetMethod(apiConfig.driverNameEndpoint.replace('{{name}}', driverName))
    resolve(typeof(result) === 'string' ? {} : result)
  })
}
