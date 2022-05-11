import { useSelector, useDispatch } from 'react-redux'
import { setDriverAction } from '../../../redux/actions/driversActions'
import { handleChangeValueVehicleEditActions, handleModalAddVechileAction, resetFormVehicleEditAction } from '../../../redux/actions/vehiclesActions'

import { getDriverMiddleware } from '../../../redux/middlewares/driversMiddleware'
import { addVehicleMiddleware, updateVehicleMiddleware } from '../../../redux/middlewares/vehiclesMiddleware'
import AddVehicleStateless from './AddVehicleStateless'

const AddVehicle = () => {
  const { driver, } = useSelector(({ driversReducer }) => driversReducer)
  const { loadingAddVehicle, modalAddVechicleIsOpen, vehicleToEdit } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  const handleModalOpen = () => {
    dispatch(handleModalAddVechileAction(true))
  }

  const handleModalClose = () => {
    dispatch(handleModalAddVechileAction(false))
    dispatch(resetFormVehicleEditAction())
    dispatch(setDriverAction(null))
  }

  const searchDriver = (driverId) => {
    dispatch(getDriverMiddleware(driverId))
  }

  const addVehicle = (vehicleData) => {
    dispatch(addVehicleMiddleware(vehicleData))
  }

  const handleInputsToEdit = (e) => {
    const { name, value } = e.target
    dispatch(handleChangeValueVehicleEditActions({ name, value }))
  }

  const handleClickEditVehicle = () => {
    dispatch(updateVehicleMiddleware(vehicleToEdit))
  }

  return <AddVehicleStateless
  vehicleToEdit={ vehicleToEdit }
    driver={ driver }
    loadingAddVehicle={ loadingAddVehicle }
    modalIsOpen={ modalAddVechicleIsOpen }
    handleModalOpen={ handleModalOpen }
    handleModalClose={ handleModalClose }
    searchDriver={ searchDriver }
    addVehicle={ addVehicle }
    handleInputsToEdit= { handleInputsToEdit }
    handleClickEditVehicle={ handleClickEditVehicle }
  />
}

export default AddVehicle