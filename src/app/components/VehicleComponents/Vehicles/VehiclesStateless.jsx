import PropTypes from 'prop-types'
import { TableContainer, Table, TableBody } from '@mui/material'

import Vehicle from './Vehicle'

const VehiclesStateless = ({ vehicles }) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableBody>
          { vehicles.map((vehicle) => (<Vehicle key={ vehicle.id } vehicle={ vehicle } />)) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

VehiclesStateless.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default VehiclesStateless