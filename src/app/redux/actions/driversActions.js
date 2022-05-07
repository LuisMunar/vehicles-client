import { LOADING_DRIVER, SET_DRIVER_NAME } from '../types/driversType'

export const loadingDriverAction = (payload) => ({
  type: LOADING_DRIVER,
  payload
})

export const setDriverNameAction = (payload) => ({
  type: SET_DRIVER_NAME,
  payload
})