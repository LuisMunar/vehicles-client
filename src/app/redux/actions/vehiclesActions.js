import { LOADING_VEHICLES, SET_VEHICLES } from '../types/vehiclesType'

export const setVehiclesAction = (payload) => ({
  type: SET_VEHICLES,
  payload
})

export const loadingVehiclesAction = (payload) => ({
  type: LOADING_VEHICLES,
  payload
})