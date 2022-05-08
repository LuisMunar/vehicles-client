import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeStateless from './HomeStateless'
import { getVehiclesMiddleware } from '../../redux/middlewares/vehiclesMiddleware'

const Home = () => {
  const { isLoadingVehicles, pages } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVehiclesMiddleware())
  }, []) // eslint-disable-line

  return <HomeStateless isLoadingVehicles={ isLoadingVehicles } pages={ pages } />
}

export default Home