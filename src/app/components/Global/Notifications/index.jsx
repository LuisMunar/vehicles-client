import { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Notifications = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { controller, type, message } = useSelector(({ notificationsReducer }) => notificationsReducer)

  useEffect(() => {
    controller && handleClickVariant()()
  }, [controller]) // eslint-disable-line

  const handleClickVariant = () => () => {
    enqueueSnackbar(message, {
      variant: type,
      resumeHideDuration: 6000,
      disableWindowBlurListener: true,
      action: (key) => (
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={ () => closeSnackbar(key) }
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )
    })
  }

  return <Fragment />
}

export default Notifications