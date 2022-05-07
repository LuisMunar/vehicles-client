import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getVehiclesByDriverName } from '../../../redux/middlewares/vehiclesMiddleware'
import SearcherVehiclesStateless from './SearcherVehiclesStateless'

const SearcherVehicles = () => {
  const [driverName, setDriverName] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setDriverName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getVehiclesByDriverName(driverName.trim()))
  }

  return <SearcherVehiclesStateless
    handleChange={ handleChange }
    handleSubmit={ handleSubmit }
  />
}

export default SearcherVehicles