import PropTypes from 'prop-types'

import { TablePagination } from '@mui/material'

const PaginatorVehiclesStateless = ({ rowsTotal, currentPage, rowsPerPage, changePage, changeRowsPerPage }) => {
  const handleChangePage = (_, newPage) => {
    newPage > 0 && changePage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    changeRowsPerPage(parseInt(event.target.value, 10))
  }

  return <TablePagination
    component="div"
    rowsPerPageOptions={[50, 100, 200, 400, 800]}
    count={ rowsTotal }
    page={ currentPage }
    rowsPerPage={ rowsPerPage }
    onPageChange={ handleChangePage }
    onRowsPerPageChange={ handleChangeRowsPerPage }
  />
}

PaginatorVehiclesStateless.propTypes = {
  pages: PropTypes.number.isRequired,
  rowsTotal: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  changeRowsPerPage: PropTypes.func.isRequired
}

export default PaginatorVehiclesStateless