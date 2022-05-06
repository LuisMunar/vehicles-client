import PropTypes from 'prop-types'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import Vehicle from './Vehicle'
import PaginatorVehicles from './PaginatorVehicles'

const VehiclesStateless = ({ vehicles }) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              Vehicle Id
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { vehicles.map((vehicle) => (<Vehicle key={ vehicle.id } vehicle={ vehicle } />)) }
        </TableBody>
      </Table>

      <PaginatorVehicles />
    </TableContainer>
  )
}

VehiclesStateless.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default VehiclesStateless