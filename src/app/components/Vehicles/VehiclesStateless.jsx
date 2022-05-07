import PropTypes from 'prop-types'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Box } from '@mui/material'

import Vehicle from './Vehicle'

const VehiclesStateless = ({ vehicles }) => {
  return (
    <Box height={{ xs: 740, md: 500, xl: 850 }} className="position-relative">
    <TableContainer className="position-absolute full-height full-width">
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell-head">
              Vehicle Id
            </TableCell>
            <TableCell className="table-cell-head">
              Driver
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
    </TableContainer>
    </Box>
  )
}

VehiclesStateless.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default VehiclesStateless