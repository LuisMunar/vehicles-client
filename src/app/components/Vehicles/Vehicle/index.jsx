import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import VehicleStateless from './VehicleStateless'
import FormEditVehicle from './FormEditVehicle'
import { setVehicleToEditAction } from '../../../redux/actions/vehiclesActions'

const Vehicle = ({ vehicle }) => {
  const [edit, setEdit] = useState(false)
  const { loadingVehicleEdit } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(setVehicleToEditAction(vehicle))
    setEdit(true)
  }

  const handleEditClose = () => {
    setEdit(false)
  }

  return edit ? <FormEditVehicle handleEditClose={ handleEditClose } /> : <VehicleStateless vehicle= { vehicle } loadingVehicleEdit={ loadingVehicleEdit } handleEdit={ handleEdit } />
}

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default Vehicle