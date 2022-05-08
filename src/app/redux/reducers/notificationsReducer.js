import { SHOW_NOTIFICATION } from '../types/notificationsTypes'
import { generateRandomNumber } from '../../helpers'

const initialState = {
  controller: null,
  type: '',
  message: ''
}

const notificationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      const { type, message } = payload
      return {
        ...state,
        controller: generateRandomNumber(),
        type,
        message
      }
  
    default:
      return state
  }
}

export default notificationsReducer