import PropTypes from 'prop-types'
import { Fragment } from 'react'

import SearcherVehicles from '../Vehicles/SearcherVehicles'
import TableLoader from '../Global/TableLoader'
import Vehicles from '../Vehicles'
import PaginatorVehicles from '../Vehicles/PaginatorVehicles'
import AddVehicle from '../Vehicles/AddVehicle'

const HomeStateless = ({ isLoadingVehicles, pages }) => {
  return (
    <Fragment>
      <SearcherVehicles />
      { isLoadingVehicles ? <TableLoader /> : <Vehicles /> }
      { pages>1 && <PaginatorVehicles /> }
      <AddVehicle />
    </Fragment>
  )
}

HomeStateless.propTypes = {
  isLoadingVehicles: PropTypes.bool.isRequired,
  pages: PropTypes.number.isRequired
}

export default HomeStateless