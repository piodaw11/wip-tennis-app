import { FunctionComponent, ReactNode } from 'react'
import { CircularProgress } from '@mui/material'

import MainNavbar from 'infrastructure/components/MainNavbar/MainNavbar'
import { StyledLayoutChildrenWrapper, StyledLayoutWrapper } from './Layout.styled'
import { useGetMeQuery } from 'infrastructure/components/Layout/store/user/userApi'
import Cookies from 'js-cookie'

type Props = {
  children: ReactNode,
  isLoading?: boolean
}

const Layout: FunctionComponent<Props> = ({ children, isLoading }) => {
  const { isError, data } = useGetMeQuery({ authToken: Cookies.get('authToken') })
  return (
    <StyledLayoutWrapper>
      <MainNavbar isError={isError} userData={data} />
      <StyledLayoutChildrenWrapper navbarHeight="70px">
        {isLoading ? <CircularProgress size={70} /> : children}
      </StyledLayoutChildrenWrapper>
    </StyledLayoutWrapper>
  )
}

export default Layout
