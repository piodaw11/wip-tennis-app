import { FunctionComponent } from 'react'

import Router from 'app/common/Router/Router'
import AppProvider from 'app/common/AppProvider/AppProvider'

const App: FunctionComponent = () => (
  <AppProvider>
    <Router />
  </AppProvider>
)

export default App
