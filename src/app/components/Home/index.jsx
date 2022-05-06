import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeStateless from './HomeStateless'
import { getVehiclesMiddleware } from '../../redux/middlewares/vehiclesMiddleware'

const Home = () => {
  const { isLoadingVehicles } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVehiclesMiddleware(0, 50, 7))
  }, []) // eslint-disable-line

  return <HomeStateless isLoadingVehicles={ isLoadingVehicles } />
}

export default Home