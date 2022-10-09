import { FunctionComponent, ReactNode } from 'react'
import { Provider } from 'react-redux'

import store from 'app/store'

type Props = {
  children: ReactNode
}

const StoreProvider: FunctionComponent<Props> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
  )

export default StoreProvider
