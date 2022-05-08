import { SHOW_NOTIFICATION } from '../types/notificationsTypes'

export const showNotificationAction = (payload) => ({
  type: SHOW_NOTIFICATION,
  payload
})