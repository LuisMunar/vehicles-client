import { httpGetMethod } from './httpSerivce'
import apiConfig from '../config/apiConfig'

export const getDriverService = (diverId) => {
  return new Promise(async (resolve) => {
    const { data:{ result } } = await httpGetMethod(apiConfig.driversEndpoint, { id: diverId })
    const { rows } = result
    resolve(rows.length>0 ? rows[0] : {})
  })
}
