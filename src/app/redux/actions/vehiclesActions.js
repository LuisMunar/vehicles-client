import { ADD_VEHICLE, HANDLE_MODAL_ADD_VEHICLE, LOADING_ADD_VEHICLE, LOADING_VEHICLES, SET_SEARCHER_PARAMS, SET_VEHICLES } from '../types/vehiclesType'

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

export const addVechicleAction = (payload) => ({
  type: ADD_VEHICLE,
  payload
})

export const handleModalAddVechileAction = (payload) => ({
  type: HANDLE_MODAL_ADD_VEHICLE,
  payload
})