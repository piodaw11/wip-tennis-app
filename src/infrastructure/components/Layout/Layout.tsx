import { FunctionComponent, ReactNode } from 'react'
import { CircularProgress } from '@mui/material'

import MainNavbar from 'infrastructure/components/MainNavbar/MainNavbar'
import { StyledLayoutChildrenWrapper, StyledLayoutWrapper } from './Layout.styled'
import useStore from 'app/store'

type Props = {
  children: ReactNode,
  isLoading?: boolean
}

const Layout: FunctionComponent<Props> = ({ children, isLoading }) => {
  const { data } = useStore(state => state.user)

  return (
    <StyledLayoutWrapper>
      <MainNavbar userData={data} />
      <StyledLayoutChildrenWrapper navbarHeight="0">
        {isLoading ? <CircularProgress size={70} /> : children}
      </StyledLayoutChildrenWrapper>
    </StyledLayoutWrapper>
  )
}

export default Layout
