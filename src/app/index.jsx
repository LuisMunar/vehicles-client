import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

import store from './redux/store'
import AppRoutes from './routes'

const App = () => {
  return (
    <Provider store={ store }>
      <SnackbarProvider maxSnack={ 3 }>
        <AppRoutes />
      </SnackbarProvider>
    </Provider>
  )
}

export default App
