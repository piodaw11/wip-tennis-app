import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from 'app/common/Router/constants/AppRoutes'

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRoutes.map(route => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router

