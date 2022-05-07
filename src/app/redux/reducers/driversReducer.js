import { LOADING_DRIVER, SET_DRIVER_NAME } from '../types/driversType'

const initialState = {
  loadingDriver: false,
  name: ''
}

const driversReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_DRIVER:
      return {
        ...state,
        isLoadingVehicles: payload
      }

    case SET_DRIVER_NAME:
      return {
        ...state,
        name: payload
      }
  
    default:
      return state
  }
}

export default driversReducer