import { httpGetMethod } from './httpSerivce'
import apiConfig from '../config/apiConfig'

export const getDriverService = (diverId) => {
  return new Promise(async (resolve) => {
    const { data } = await httpGetMethod(apiConfig.driversEndpoint, { id: diverId })
    resolve(data.result)
  })
}

export const getDriverNameService = async (driverId) => {
  const { rows } = await getDriverService(driverId)
  return rows.length>0 ? `${ rows[0].first_name } ${ rows[0].last_name }` : 'Driver does not exist'
}