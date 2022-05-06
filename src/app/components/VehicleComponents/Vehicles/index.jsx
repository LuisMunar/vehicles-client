import { useSelector } from 'react-redux'
import VehiclesStateless from './VehiclesStateless'

const Vehicles = () => {
  const { vehicles, pages } = useSelector(({ vehiclesReducer }) => vehiclesReducer)

  return <VehiclesStateless vehicles={ vehicles } pages={ pages } />
}

export default Vehicles