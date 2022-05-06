import { TableContainer, Table, TableRow, TableBody, TableCell, Skeleton} from '@mui/material'

const LoaderVehicles = () => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableBody>
          { Array.from(Array(10).keys()).map((i => <TableRow key={ i }><TableCell><Skeleton /></TableCell></TableRow>)) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LoaderVehicles