import { useSelector } from 'react-redux'
import PaginatorVehilesStateless from './PaginatorVehiclesStateless'

const PaginatorVehicles = () => {
  const { pages, currentPage } = useSelector(({ vehiclesReducer }) => vehiclesReducer)

  return <PaginatorVehilesStateless pages={ pages } currentPage={ currentPage } />
}

export default PaginatorVehicles