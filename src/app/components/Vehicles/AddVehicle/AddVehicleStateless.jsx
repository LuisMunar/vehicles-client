// import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import useForm from 'react-hooks-form-validator'
import { Modal, Grid, Card, CardContent, Typography, TextField, Button, CircularProgress, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { addVehicleFormControl } from '../../../helpers'

const AddVehicleStateless = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [loading, setLoading] = useState(false)
  const [fields, formData] = useForm(addVehicleFormControl)

  const handleInputsChange = (e) => {
    fields[e.target.name].setValue(e.target.value)

    console.log(formData.isValid)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('fields => ', fields)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }

  return (
    <Fragment>
      <Modal
        open={open}
        onClose={handleClose}
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
                    Add new vehicle
                  </Typography>

                  <TextField
                    name="driverId"
                    type="number"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Driver Id"
                    error={ fields.driverId.errorMsg !== '' }
                    helperText={ fields.driverId.errorMsg }
                    onChange={ handleInputsChange }
                    className="mb-2"
                  />

                  <TextField
                    name="driverName"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                    label="Driver Name"
                    error={ fields.driverName.errorMsg !== '' }
                    helperText={ fields.driverName.errorMsg }
                    onChange={ handleInputsChange }
                    className="mb-2"
                  />

                  <TextField
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
                    disabled={ !formData.isValid || loading }
                    className="mb-1"
                  >
                    {
                      loading ?
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
        onClick={ handleOpen }
      >
        <AddIcon />
      </Fab>
    </Fragment>
  )
}

AddVehicleStateless.propTypes = {
  // drivers: PropTypes.array.isRequired
}

export default AddVehicleStateless