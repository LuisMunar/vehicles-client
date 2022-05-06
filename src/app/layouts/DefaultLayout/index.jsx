import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default DefaultLayout