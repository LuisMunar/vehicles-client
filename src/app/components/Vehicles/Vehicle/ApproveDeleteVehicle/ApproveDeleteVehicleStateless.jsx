import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Modal, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material'

const ApproveDeleteVehicleStateless = ({ modalDeleteVehicle, handleModal, handleDeleteVehicle }) => {
  return (
    <Fragment>
      <Modal
        open={ modalDeleteVehicle }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="d-flex align-items-center justify-content-center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={ 4 }>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  Warning! Are you sure you want to delete the vehicle?
                </Typography>
              </CardContent>

              <CardActions>
                <Button variant="contained" size="small" onClick={ handleDeleteVehicle }>Accept</Button>
                <Button size="small" onClick={ handleModal }>Cancel</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </Fragment>
  )
}

ApproveDeleteVehicleStateless.propTypes = {
  modalDeleteVehicle: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleDeleteVehicle: PropTypes.func.isRequired
}

export default ApproveDeleteVehicleStateless