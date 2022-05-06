import PropTypes from 'prop-types'
import { TableRow, TableCell } from '@mui/material'

const VehicleStateless = ({ vehicle }) => {
  const { id } = vehicle

  return (
    <TableRow key={ id }>
      <TableCell>
        { id }
      </TableCell>
    </TableRow>
  )
}

VehicleStateless.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default VehicleStateless