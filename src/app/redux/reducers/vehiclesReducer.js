import { LOADING_VEHICLES, SET_VEHICLES } from '../types/vehiclesType'

const initialState = {
  vehicles: [],
  pages: 0,
  currentPage: 0,
  isLoadingVehicles: false
}

const vehiclesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VEHICLES:
      const { totalPages, currentPage, rows } = payload
      return {
        ...state,
        pages: totalPages,
        currentPage,
        vehicles: rows
      }

    case LOADING_VEHICLES:
      return {
        ...state,
        isLoadingVehicles: payload
      }
  
    default:
      return state
  }
}

export default vehiclesReducer