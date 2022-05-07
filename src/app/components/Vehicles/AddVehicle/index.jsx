import { useSelector, useDispatch } from 'react-redux'
import { setDriverAction } from '../../../redux/actions/driversActions'
import { handleModalAddVechileAction } from '../../../redux/actions/vehiclesActions'

import { getDriverMiddleware } from '../../../redux/middlewares/driversMiddleware'
import { addVehicleMiddleware } from '../../../redux/middlewares/vehiclesMiddleware'
import AddVehicleStateless from './AddVehicleStateless'

const AddVehicle = () => {
  const { driver, } = useSelector(({ driversReducer }) => driversReducer)
  const { loadingAddVehicle, modalAddVechicleIsOpen } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  const handleModalOpen = () => {
    dispatch(handleModalAddVechileAction(true))
  }

  const handleModalClose = () => {
    dispatch(setDriverAction(null))
    dispatch(handleModalAddVechileAction(false))
  }

  const searchDriver = (driverId) => {
    dispatch(getDriverMiddleware(driverId))
  }

  const addVehicle = (vehicleData) => {
    dispatch(addVehicleMiddleware(vehicleData))
  }

  return <AddVehicleStateless
    driver={ driver }
    loadingAddVehicle={ loadingAddVehicle }
    modalIsOpen={ modalAddVechicleIsOpen }
    handleModalOpen={ handleModalOpen }
    handleModalClose={ handleModalClose }
    searchDriver={ searchDriver }
    addVehicle={ addVehicle }
  />
}

export default AddVehicle