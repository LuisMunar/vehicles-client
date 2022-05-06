import PropTypes from 'prop-types'

import VehicleStateless from './VehicleStateless'

const Vehicle = ({ vehicle }) => {
  return <VehicleStateless vehicle= { vehicle } />
}

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired
}

export default Vehicle