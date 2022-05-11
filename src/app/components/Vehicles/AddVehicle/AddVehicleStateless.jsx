import PropTypes from 'prop-types'
import { Fragment, useEffect, useState } from 'react'
import useForm from 'react-hooks-form-validator'
import { Modal, Grid, Card, CardContent, Typography, TextField, Button, CircularProgress, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { addVehicleFormControl, formatDriverName } from '../../../helpers'

const AddVehicleStateless = (props) => {
  const {
    vehicleToEdit,
    driver,
    loadingAddVehicle,
    modalIsOpen,
    handleModalOpen,
    handleModalClose,
    searchDriver,
    addVehicle,
    handleInputsToEdit,
    handleClickEditVehicle
  } = props
  const [fields, formData] = useForm(addVehicleFormControl)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    const { plate } = vehicleToEdit
    setIsEdit(!plate)
  }, [vehicleToEdit])

  const handleSearchDriver = (e) => {
    handleInputsChange(e)
    const { value } = e.target
    value !== '' && searchDriver(value)
  }

  const handleInputsChange = (e) => {
    if(!isEdit) {
      handleInputsToEdit(e)
    } else {
      const { name, value } = e.target
      fields[name].setValue(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!isEdit) {
      handleClickEditVehicle()
    } else {
      const { driverId, plate, model, type, capacity } = fields
      addVehicle({ driverId: driverId.value, plate: plate.value, model: model.value, type: type.value, capacity: capacity.value, driver })
      formData.reset()
    }
  }

  const setHandleCloseModal = () => {
    handleModalClose()
    formData.reset()
  }

  return (
    <Fragment>
      <Modal
        open={ modalIsOpen }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex align-items-center justify-content-center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={ 4 }>
            <Card>
              <CardContent>
                <form
                  className="full-width"
                  onSubmit={ handleSubmit }
                >
                  <Typography variant="h5" className="mt-2 mb-3">
                    { `${ isEdit ? 'Add new' : 'Edit' } vehicle` }
                  </Typography>

                  {isEdit && <TextField
                    name="driverId"
                    type="number"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Driver Id"
                    error={ fields.driverId.errorMsg !== '' }
                    helperText={ fields.driverId.errorMsg }
                    onChange={ handleSearchDriver }
                    className="mb-2"
                  />}

                  {isEdit && <TextField
                    name="driverName"
                    type="text"
                    value={ formatDriverName(driver) }
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Driver Name"
                    disabled={ true }
                    className="mb-2"
                  />}

                  <TextField
                    value={ vehicleToEdit.plate }
                    name="plate"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Plate"
                    error={ fields.plate.errorMsg !== '' }
                    helperText={ fields.plate.errorMsg }
                    onChange={ handleInputsChange }
                    className="mb-2"
                  />

                  <TextField
                    value={ vehicleToEdit.model }
                    name="model"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Model"
                    error={ fields.model.errorMsg !== '' }
                    helperText={ fields.model.errorMsg }
                    onChange={ handleInputsChange }
                    className="mb-2"
                  />

                  <TextField
                    value={ vehicleToEdit.type }
                    name="type"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Type"
                    error={ fields.type.errorMsg !== '' }
                    helperText={ fields.type.errorMsg }
                    onChange={ handleInputsChange }
                    className="mb-2"
                  />

                  <TextField
                    value={ vehicleToEdit.capacity }
                    name="capacity"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Capacity"
                    error={ fields.capacity.errorMsg !== '' }
                    helperText={ fields.capacity.errorMsg }
                    onChange={ handleInputsChange }
                    className="mb-4"
                  />

                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    disabled={ !isEdit ? false : !formData.isValid || loadingAddVehicle || !driver || !Object.keys(driver).length>0 }
                    className="mb-1"
                  >
                    {
                      loadingAddVehicle ?
                      <CircularProgress color="inherit" size={ 25 } /> :
                      'Add Vechicle'
                    }
                  </Button>

                  <Button
                    type="button"
                    color="primary"
                    variant="outlined"
                    fullWidth
                    className="mb-1"
                    onClick={ setHandleCloseModal }
                  >
                    Cancel
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Modal>

      <Fab
        color="primary"
        aria-label="add"
        className="button-add-vehicle"
        onClick={ handleModalOpen }
      >
        <AddIcon />
      </Fab>
    </Fragment>
  )
}

AddVehicleStateless.propTypes = {
  vehicleToEdit: PropTypes.object.isRequired,
  driver: PropTypes.object,
  loadingAddVehicle: PropTypes.bool.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  searchDriver: PropTypes.func.isRequired,
  addVehicle: PropTypes.func.isRequired,
  handleInputsToEdit: PropTypes.func.isRequired,
  handleClickEditVehicle: PropTypes.func.isRequired
}

export default AddVehicleStateless