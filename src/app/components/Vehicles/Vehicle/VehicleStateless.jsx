import PropTypes from 'prop-types'
import { TableRow, TableCell, ButtonGroup, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import { formatDate, validateVehicleUpdating } from '../../../helpers'

const VehicleStateless = ({ vehicle, loadingVehicleEdit, vehicleIdDelete, handleEdit, handleDelete }) => {
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
        { validateVehicleUpdating(loadingVehicleEdit, id, vehicleIdDelete, type) }
      </TableCell>
      <TableCell>
      { validateVehicleUpdating(loadingVehicleEdit, id, vehicleIdDelete, model) }
      </TableCell>
      <TableCell>
      { validateVehicleUpdating(loadingVehicleEdit, id, vehicleIdDelete, capacity) }
      </TableCell>
      <TableCell>
      { validateVehicleUpdating(loadingVehicleEdit, id, vehicleIdDelete, plate) }
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
  loadingVehicleEdit: PropTypes.bool.isRequired,
  vehicleIdDelete: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default VehicleStateless