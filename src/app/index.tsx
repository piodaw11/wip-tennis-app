import { FunctionComponent } from 'react'

import Router from 'app/common/Router/Router'
import AppProvider from 'app/common/AppProvider/AppProvider'
import StoreProvider from 'app/common/StoreProvider/StoreProvider'

const App: FunctionComponent = () => (
  <StoreProvider>
    <AppProvider>
      <Router />
    </AppProvider>
  </StoreProvider>
)

export default App
