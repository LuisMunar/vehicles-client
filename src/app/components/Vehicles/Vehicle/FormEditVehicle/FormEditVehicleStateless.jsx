import PropTypes from 'prop-types'
import { TableRow, TableCell, ButtonGroup, IconButton, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

import { formatDate } from '../../../../helpers'

const FormEditVehicleStateless = ({ vehicleToEdit, handleEditClose, handleChange, handleClick, disabledButtonEdit }) => {
  const { id, plate, model, type, capacity, driver, creationDate } = vehicleToEdit

  return (
    <TableRow key={ id } hover>
      <TableCell>
        { id }
      </TableCell>
      <TableCell>
        { driver.firstName } { driver.lastName }
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          name="type"
          type="text"
          value={ type }
          variant="outlined"
          color="primary"
          label="Type"
          onChange={ handleChange }
        />
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          name="model"
          type="text"
          value={ model }
          variant="outlined"
          color="primary"
          label="Model"
          onChange={ handleChange }
        />
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          name="capacity"
          type="text"
          value={ capacity }
          variant="outlined"
          color="primary"
          label="Capacity"
          onChange={ handleChange }
        />
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          name="plate"
          type="text"
          value={ plate }
          variant="outlined"
          color="primary"
          label="Plate"
          onChange={ handleChange }
        />
      </TableCell>
      <TableCell>
        { formatDate(creationDate) }
      </TableCell>
      <TableCell>
      <ButtonGroup aria-label="text button group">
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={ handleClick } disabled={ disabledButtonEdit }>
          <CheckIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={ handleEditClose }>
          <CloseIcon />
        </IconButton>
      </ButtonGroup>
      </TableCell>
    </TableRow>
  )
}

FormEditVehicleStateless.propTypes = {
  disabledButtonEdit: PropTypes.bool.isRequired,
  vehicleToEdit: PropTypes.object.isRequired,
  handleEditClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default FormEditVehicleStateless