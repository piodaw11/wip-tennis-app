import { FunctionComponent, Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

type RoutesType = {
  [key: string]: {
    default: string
  }
}

const Router: FunctionComponent = () => {
  const ROUTES: RoutesType = import.meta.globEager('/src/pages/**/[a-z[]*.tsx')
  console.log(ROUTES)
  const routes = Object.keys(ROUTES).map((route) => {
    const path = route
      .replace(/\/src\/pages|index|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')
      .replace(/\[(.+)\]/, ':$1')

    return { path, component: ROUTES[route].default }
  })

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
