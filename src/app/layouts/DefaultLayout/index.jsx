import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Notifications from '../../components/Global/Notifications'

const DefaultLayout = () => {
  return (
    <Fragment>
      <Notifications />
      <Outlet />
    </Fragment>
  )
}

export default DefaultLayout