import { TableContainer, Table, TableRow, TableBody, TableCell, Skeleton} from '@mui/material'

const TableLoader = () => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableBody>
          { Array.from(Array(9).keys()).map((i => <TableRow key={ i }><TableCell><Skeleton /></TableCell></TableRow>)) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableLoader