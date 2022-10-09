import { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import theme from 'app/common/Theme/Theme'
import GlobalStyle from 'app/common/GlobalStyle/GlobalStyle'

type Props = {
  children: ReactNode
}

const AppProvider: FunctionComponent<Props> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <MaterialThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      {children}
    </MaterialThemeProvider>
  </StyledThemeProvider>
)

export default AppProvider
