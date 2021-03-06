import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <DefaultLayout /> }>
          <Route path="" element={ <HomePage /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes