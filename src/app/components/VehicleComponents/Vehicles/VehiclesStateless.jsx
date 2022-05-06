import PropTypes from 'prop-types'
import { Fragment } from 'react'

const VehiclesStateless = ({ vehicles }) => {
  return (
    <Fragment>
      { vehicles.map(({ id }) => <div key={ id }>{ id }</div> ) }
    </Fragment>
  )
}

VehiclesStateless.propTypes = {
  vehicles: PropTypes.array.isRequired
}

export default VehiclesStateless