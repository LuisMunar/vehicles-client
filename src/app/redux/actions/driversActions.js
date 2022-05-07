import { LOADING_DRIVER, SET_DRIVER } from '../types/driversType'

export const loadingDriverAction = (payload) => ({
  type: LOADING_DRIVER,
  payload
})

export const setDriverAction = (payload) => ({
  type: SET_DRIVER,
  payload
})