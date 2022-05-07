import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDriverNameAction } from '../../../redux/actions/driversActions'

import { getDriverMiddleware } from '../../../redux/middlewares/driversMiddleware'
import { addVehicleMiddleware } from '../../../redux/middlewares/vehiclesMiddleware'
import AddVehicleStateless from './AddVehicleStateless'

const AddVehicle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { name, } = useSelector(({ driversReducer }) => driversReducer)
  const { loadingAddVehicle } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = () => {
    dispatch(setDriverNameAction(''))
    setModalIsOpen(false)
  }

  const searchDriver = (driverId) => {
    dispatch(getDriverMiddleware(driverId))
  }

  const addVehicle = (vehicleData) => {
    dispatch(addVehicleMiddleware(vehicleData))
  }

  return <AddVehicleStateless
    name={ name }
    loadingAddVehicle={ loadingAddVehicle }
    modalIsOpen={ modalIsOpen }
    handleModalOpen={ handleModalOpen }
    handleModalClose={ handleModalClose }
    searchDriver={ searchDriver }
    addVehicle={ addVehicle }
  />
}

export default AddVehicle