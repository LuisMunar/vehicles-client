import PropTypes from 'prop-types'
import { TableRow, TableCell } from '@mui/material'

import { formatDate } from '../../../helpers'

const VehicleStateless = ({ vehicle }) => {
  const { id, driver, type, model, capacity, plate, creation_date } = vehicle

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
    </TableRow>
  )
}

VehicleStateless.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default VehicleStateless