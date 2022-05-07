import { LOADING_ADD_VEHICLE, LOADING_VEHICLES, SET_SEARCHER_PARAMS, SET_VEHICLES } from '../types/vehiclesType'

const initialState = {
  vehicles: [],
  pages: 0,
  rowsTotal: 0,
  currentPage: 0,
  rowsPerPage: 50,
  isLoadingVehicles: false,
  loadingAddVehicle: false
}

const vehiclesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCHER_PARAMS:
      return {
        ...state,
        currentPage: payload.currentPage,
        rowsPerPage: payload.rowsPerPage
      }
    case SET_VEHICLES:
      return {
        ...state,
        rowsTotal: payload.count,
        pages: payload.totalPages,
        vehicles: payload.rows
      }

    case LOADING_VEHICLES:
      return {
        ...state,
        isLoadingVehicles: payload
      }

    case LOADING_ADD_VEHICLE:
      return {
        ...state,
        loadingAddVehicle: payload
      }
  
    default:
      return state
  }
}

export default vehiclesReducer