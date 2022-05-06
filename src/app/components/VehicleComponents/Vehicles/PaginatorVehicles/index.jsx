import { useDispatch, useSelector } from 'react-redux'
import { getVehiclesMiddleware } from '../../../../redux/middlewares/vehiclesMiddleware'
import PaginatorVehilesStateless from './PaginatorVehiclesStateless'

const PaginatorVehicles = () => {
  const { pages, rowsTotal, currentPage, rowsPerPage } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  const changePage = (newPage) => {
    dispatch(getVehiclesMiddleware(newPage, rowsPerPage))
  }

  const changeRowsPerPage = (newRowsQty) => {
    dispatch(getVehiclesMiddleware(0, newRowsQty))
  }

  return <PaginatorVehilesStateless
    pages={ pages }
    rowsTotal={ rowsTotal }
    currentPage={ currentPage }
    rowsPerPage={ rowsPerPage }
    changePage={ changePage }
    changeRowsPerPage={ changeRowsPerPage }
  />
}

export default PaginatorVehicles