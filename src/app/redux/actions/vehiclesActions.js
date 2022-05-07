import {
  ADD_VEHICLE,
  HANDLE_MODAL_ADD_VEHICLE,
  LOADING_ADD_VEHICLE,
  LOADING_VEHICLES,
  LOADING_VEHICLE_EDIT,
  SET_SEARCHER_PARAMS,
  SET_VEHICLES,
  SET_VEHICLE_TO_EDIT,
  HANDLE_CHANGE_VALUE_VECHILE_EDIT,
  SET_NEW_DATA_VEHICLE_UPDATED
} from '../types/vehiclesType'

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

export const loadingVehicleEdit = (payload) => ({
  type: LOADING_VEHICLE_EDIT,
  payload
})

export const setVehicleToEditAction = (payload) => ({
  type: SET_VEHICLE_TO_EDIT,
  payload
})

export const handleChangeValueVehicleEditActions = (payload) => ({
  type: HANDLE_CHANGE_VALUE_VECHILE_EDIT,
  payload
})

export const setNewDataVehicleUpdated = (payload) => ({
  type: SET_NEW_DATA_VEHICLE_UPDATED,
  payload
})