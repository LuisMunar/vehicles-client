import PropTypes from 'prop-types'
import { Fragment } from 'react'

const PaginatorVehiclesStateless = ({ pages, currentPage }) => {
  return (
    <Fragment>
      { `pages => ${ pages } && currentPage => ${ currentPage } && validate IF PAGES > 1` }
    </Fragment>
  )
}

PaginatorVehiclesStateless.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default PaginatorVehiclesStateless