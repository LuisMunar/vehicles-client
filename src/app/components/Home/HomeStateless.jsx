import PropTypes from 'prop-types'
import { Fragment } from 'react'

import TableLoader from '../Global/TableLoader'
import Vehicles from '../Vehicles'

const HomeStateless = ({ isLoadingVehicles }) => {
  return (
    <Fragment>
      { isLoadingVehicles ? <TableLoader /> : <Vehicles /> }
    </Fragment>
  )
}

HomeStateless.propTypes = {
  isLoadingVehicles: PropTypes.bool.isRequired
}

export default HomeStateless