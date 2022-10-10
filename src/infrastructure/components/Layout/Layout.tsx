import { FunctionComponent, ReactNode } from 'react'
import { CircularProgress } from '@mui/material'
import Cookies from 'js-cookie'

import MainNavbar from 'infrastructure/components/MainNavbar/MainNavbar'
import { StyledLayoutChildrenWrapper, StyledLayoutWrapper } from './Layout.styled'
import { useGetMeQuery } from 'infrastructure/components/Layout/store/user/userApi'
import CookiesName from 'infrastructure/enums/CookiesName'

type Props = {
  children: ReactNode,
  isLoading?: boolean
}

const Layout: FunctionComponent<Props> = ({ children, isLoading }) => {
  const { isError, data } = useGetMeQuery({ authToken: Cookies.get(CookiesName.AUTH_TOKEN) })
  const userInitials = data?.username.slice(0, 2).toUpperCase()

  return (
    <StyledLayoutWrapper>
      <MainNavbar isError={isError} userData={data} initials={userInitials} />
      <StyledLayoutChildrenWrapper navbarHeight="70px">
        {isLoading ? <CircularProgress size={70} /> : children}
      </StyledLayoutChildrenWrapper>
    </StyledLayoutWrapper>
  )
}

export default Layout
