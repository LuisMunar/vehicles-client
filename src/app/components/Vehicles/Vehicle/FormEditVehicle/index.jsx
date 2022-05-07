import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FormEditVehicleStateless from './FormEditVehicleStateless'
import { handleChangeValueVehicleEditActions } from '../../../../redux/actions/vehiclesActions'
import { updateVehicleMiddleware } from '../../../../redux/middlewares/vehiclesMiddleware'

const FormEditVehicle = ({ handleEditClose }) => {
  const { vehicleToEdit } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()
  const [disabledButtonEdit, setDisabledButtonEdit] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(handleChangeValueVehicleEditActions({ name, value }))
    setDisabledButtonEdit(value === '')
  }

  const handleClick = () => {
    dispatch(updateVehicleMiddleware(vehicleToEdit))
    handleEditClose(false)
  }

  return (
    <Fragment>
      <FormEditVehicleStateless
        disabledButtonEdit={ disabledButtonEdit }
        vehicleToEdit={ vehicleToEdit }
        handleEditClose={ handleEditClose }
        handleChange={ handleChange }
        handleClick={ handleClick }
      />
    </Fragment>
  )
}

FormEditVehicle.propTypes = {
  handleEditClose: PropTypes.func.isRequired
}

export default FormEditVehicle