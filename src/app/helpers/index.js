import moment from 'moment'

export const formatDate = (date) => {
  return moment(date).format('DD-MM-YYYY')
}

export const addVehicleFormControl = {
  driverId: {
    validationFns: [
      (fieldValue) => {
        const validation = fieldValue !== '' && fieldValue !== undefined
        return [validation, 'Driver id is required']
      }
    ]
  },
  plate: {
    validationFns: [
      (fieldValue) => {
        const validation = fieldValue !== '' && fieldValue !== undefined
        return [validation, 'Plate is required']
      }
    ]
  },
  model: {
    validationFns: [
      (fieldValue) => {
        const validation = fieldValue !== '' && fieldValue !== undefined
        return [validation, 'Model is required']
      }
    ]
  },
  type: {
    validationFns: [
      (fieldValue) => {
        const validation = fieldValue !== '' && fieldValue !== undefined
        return [validation, 'Type is required']
      }
    ]
  },
  capacity: {
    validationFns: [
      (fieldValue) => {
        const validation = fieldValue !== '' && fieldValue !== undefined
        return [validation, 'Capacity is required']
      }
    ]
  }
}

export const formatDriverName = (driver) => {
  if(!driver) {
    return ''
  }
  
  return Object.keys(driver).length>0 ? `${ driver.first_name } ${ driver.last_name }` : 'Driver does not exist'
}