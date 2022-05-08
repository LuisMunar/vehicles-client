import {
  ADD_VEHICLE,
  DELETE_VEHICLE,
  HANDLE_CHANGE_VALUE_VECHILE_EDIT,
  HANDLE_MODAL_ADD_VEHICLE,
  LOADING_ADD_VEHICLE,
  LOADING_VEHICLES,
  LOADING_VEHICLE_EDIT,
  MODAL_DELETE_VEHICLE,
  SET_NEW_DATA_VEHICLE_UPDATED,
  SET_SEARCHER_PARAMS,
  SET_VEHICLES,
  SET_VEHICLE_TO_EDIT
} from '../types/vehiclesType'

const initialState = {
  vehicles: [],
  pages: 0,
  rowsTotal: 0,
  currentPage: 0,
  rowsPerPage: 50,
  isLoadingVehicles: false,
  loadingAddVehicle: false,
  modalAddVechicleIsOpen: false,
  loadingVehicleEdit: false,
  vehicleToEdit: {
    id: '',
    plate: '',
    model: '',
    type: '',
    capacity: '',
    driver: {
      id: '',
      firstName: '',
      lastName: ''
    },
    creationDate: ''
  },
  modalDeleteVehicle: false,
  vehicleIdDelete: null
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

    case ADD_VEHICLE:
      return {
        ...state,
        vehicles: [...state.vehicles, payload]
      }
    
    case HANDLE_MODAL_ADD_VEHICLE:
      return {
        ...state,
        modalAddVechicleIsOpen: payload
      }

    case LOADING_VEHICLE_EDIT:
      return {
        ...state,
        loadingVehicleEdit: payload
      }

    case SET_VEHICLE_TO_EDIT:
      return {
        ...state,
        vehicleToEdit: {
          ...state.vehicleToEdit,
          id: payload.id,
          plate: payload.plate,
          model: payload.model,
          type: payload.type,
          capacity: payload.capacity,
          driver: {
            ...state.vehicleToEdit.driver,
            id: payload.driver.id,
            firstName: payload.driver.first_name,
            lastName: payload.driver.last_name
          },
          creationDate: payload.creation_date
        }
      }

    case HANDLE_CHANGE_VALUE_VECHILE_EDIT:
      return {
        ...state,
        vehicleToEdit: {
          ...state.vehicleToEdit,
          [payload.name]: payload.value
        }
      }

    case SET_NEW_DATA_VEHICLE_UPDATED:
      return {
        ...state,
        vehicles: [...state.vehicles.map(vehicle => {
          if(vehicle.id === payload.id) {
            return {
              ...vehicle,
              capacity: payload.capacity,
              model: payload.model,
              plate: payload.plate,
              type: payload.type
            }
          }

          return vehicle
        })]
      }
    
    case DELETE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.filter((vehicle) => vehicle.id !== payload)
      }

    case MODAL_DELETE_VEHICLE:
      return {
        ...state,
        modalDeleteVehicle: payload.modalDeleteVehicle,
        vehicleIdDelete: payload.vehicleIdDelete
      }
  
    default:
      return state
  }
}

export default vehiclesReducer