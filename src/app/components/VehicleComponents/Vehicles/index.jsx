import { useSelector } from 'react-redux'
import VehiclesStateless from './VehiclesStateless'

const Vehicles = () => {
  const { vehicles } = useSelector(({ vehiclesReducer }) => vehiclesReducer)

  return <VehiclesStateless vehicles={ vehicles } />
}

export default Vehicles