import PropTypes from 'prop-types'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import Vehicle from './Vehicle'
import PaginatorVehicles from './PaginatorVehicles'

const VehiclesStateless = ({ vehicles, pages }) => {
  return (
    <TableContainer className="full-height">
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell-head">
              Vehicle Id
            </TableCell>
            <TableCell className="table-cell-head">
              Driver Id
            </TableCell>
            <TableCell className="table-cell-head">
              Type
            </TableCell>
            <TableCell className="table-cell-head">
              Model
            </TableCell>
            <TableCell className="table-cell-head">
              Capacity
            </TableCell>
            <TableCell className="table-cell-head">
              Plate
            </TableCell>
            <TableCell className="table-cell-head">
              Creation Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { vehicles.map((vehicle) => (<Vehicle key={ vehicle.id } vehicle={ vehicle } />)) }
        </TableBody>
      </Table>

      { pages>1 && <PaginatorVehicles /> }
    </TableContainer>
  )
}

VehiclesStateless.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default VehiclesStateless