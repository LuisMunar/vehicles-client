import axios from 'axios'
import apiConfig from '../config/apiConfig'

const httpService = axios.create({
  baseURL: apiConfig.baseUrl
})

export const httpGetMethod = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    httpService.get(endpoint, { params })
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}

export const httpPostMethod = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    httpService.post(endpoint, params)
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}

export const httpPutMethod = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    httpService.put(endpoint, params)
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}