import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'

import VehicleStateless from './VehicleStateless'
import FormEditVehicle from './FormEditVehicle'
import { modalDeleteVehicleAction, setVehicleToEditAction } from '../../../redux/actions/vehiclesActions'

const Vehicle = ({ vehicle }) => {
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(setVehicleToEditAction(vehicle))
    setEdit(true)
  }

  const handleEditClose = () => {
    setEdit(false)
  }

  const handleDelete = (vehicleId) => {
    dispatch(modalDeleteVehicleAction({
      modalDeleteVehicle: true,
      vehicleIdDelete: vehicleId
    }))
  }

  return (
    <Fragment>
      {
        edit ?
        <FormEditVehicle
          handleEditClose={ handleEditClose }
        /> :
        <VehicleStateless
          vehicle= { vehicle }
          handleEdit={ handleEdit }
          handleDelete={ handleDelete }
        />
      }
    </Fragment>
  )
}

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default Vehicle