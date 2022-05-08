import { LOADING_DRIVER, SET_DRIVER } from '../types/driversType'

const initialState = {
  loadingDriver: false,
  driver: null
}

const driversReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_DRIVER:
      return {
        ...state,
        isLoadingVehicles: payload
      }

    case SET_DRIVER:
      return {
        ...state,
        driver: payload
      }
  
    default:
      return state
  }
}

export default driversReducer