import { LOADING_ADD_VEHICLE, LOADING_VEHICLES, SET_SEARCHER_PARAMS, SET_VEHICLES } from '../types/vehiclesType'

export const setSearcherParamsVechicles = (payload) => ({
  type: SET_SEARCHER_PARAMS,
  payload
})

export const setVehiclesAction = (payload) => ({
  type: SET_VEHICLES,
  payload
})

export const loadingVehiclesAction = (payload) => ({
  type: LOADING_VEHICLES,
  payload
})

export const loadingAddVehicleAction = (payload) => ({
  type: LOADING_ADD_VEHICLE,
  payload
})