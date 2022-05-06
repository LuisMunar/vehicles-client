import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Button } from '@mui/material'

import LoaderVehicles from '../VehicleComponents/LoaderVehicles'
import PaginatorVehicles from '../VehicleComponents/PaginatorVehicles'
import Vehicles from '../VehicleComponents/Vehicles'

const HomeStateless = ({ isLoadingVehicles }) => {
  const rendeVehicles = () => (
    <Fragment>
      <Button
        color="primary"
        variant="contained"
      >aaa</Button>
      <Vehicles />
      <PaginatorVehicles />
    </Fragment>
  )

  return (
    <Fragment>
      { isLoadingVehicles ? <LoaderVehicles /> : rendeVehicles() }
    </Fragment>
  )
}

HomeStateless.propTypes = {
  isLoadingVehicles: PropTypes.bool.isRequired
}

export default HomeStateless