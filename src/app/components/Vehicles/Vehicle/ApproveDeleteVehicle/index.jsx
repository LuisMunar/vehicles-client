import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalDeleteVehicleAction } from '../../../../redux/actions/vehiclesActions'
import { deleteVehicleMiddleware } from '../../../../redux/middlewares/vehiclesMiddleware'

import ApproveDeleteVehicleStateless from './ApproveDeleteVehicleStateless'

const ApproveDeleteVehicle = () => {
  const { modalDeleteVehicle, vehicleIdDelete } = useSelector(({ vehiclesReducer }) => vehiclesReducer)
  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(modalDeleteVehicleAction({
      modalDeleteVehicle: false,
      vehicleIdDelete: null
    }))
  }

  const handleDeleteVehicle = () => {
    dispatch(deleteVehicleMiddleware(vehicleIdDelete))
    handleModal()
  }

  return (
    <Fragment>
      <ApproveDeleteVehicleStateless
        modalDeleteVehicle={ modalDeleteVehicle }
        handleModal={ handleModal }
        handleDeleteVehicle={ handleDeleteVehicle }
      />
    </Fragment>
  )
}

export default ApproveDeleteVehicle