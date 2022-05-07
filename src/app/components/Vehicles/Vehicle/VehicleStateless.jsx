import PropTypes from 'prop-types'
import { TableRow, TableCell, ButtonGroup, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { formatDate } from '../../../helpers'

const VehicleStateless = ({ vehicle, handleEdit, handleDelete }) => {
  const { id, driver, type, model, capacity, plate, creation_date } = vehicle

  const setVehicleIdToDelete = () => handleDelete(id)

  return (
    <TableRow key={ id } hover>
      <TableCell>
        { id }
      </TableCell>
      <TableCell>
        { driver.first_name } { driver.last_name }
      </TableCell>
      <TableCell>
        { type }
      </TableCell>
      <TableCell>
        { model }
      </TableCell>
      <TableCell>
        { capacity }
      </TableCell>
      <TableCell>
        { plate }
      </TableCell>
      <TableCell>
        { formatDate(creation_date) }
      </TableCell>
      <TableCell>
      <ButtonGroup variant="text" aria-label="text button group">
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={ handleEdit }>
          <EditIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={ setVehicleIdToDelete }>
          <DeleteForeverIcon />
        </IconButton>
      </ButtonGroup>
      </TableCell>
    </TableRow>
  )
}

VehicleStateless.propTypes = {
  vehicle: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default VehicleStateless