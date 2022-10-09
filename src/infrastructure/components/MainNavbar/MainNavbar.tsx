import { FunctionComponent, Fragment } from 'react'
import { Avatar, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import {
  StyledNavbar,
  StyledNavBox,
  StyledCustomerBox,
  StyledTypography,
  StyledNavOptions,
  StyledNavOption
} from './MainNavbar.styled'
import MainNavbarItems from 'infrastructure/components/MainNavbar/constants/MainNavbarItems'
import PublicPages from 'infrastructure/components/Layout/constants/PublicPages'
import useRouter from 'app/hooks/useRouter'
import Cookies from 'js-cookie'
import { UserData } from 'app/store/types'

type Props = {
  userData?: UserData
  isError: boolean
}

const MainNavbar: FunctionComponent<Props> = ({ isError, userData }) => {
  const { pathname, replace } = useRouter()

  const isPagePublic = PublicPages.includes(pathname)

  if (!isPagePublic && isError) {
    Cookies.remove('authToken')
    replace('/logowanie')
  }

  return (
    <StyledNavbar>
      <StyledNavBox>
        <StyledTypography>
          LOGO
        </StyledTypography>
        <StyledNavOptions>
          {MainNavbarItems.map(({ isPublic, url, label }, index) => (
            <Fragment key={label}>
              {!!index && <Divider orientation="vertical" style={{ maxHeight: '50%' }} /> }
              <StyledNavOption>
                <Link to={url}>
                  {isPublic && label}
                </Link>
              </StyledNavOption>
            </Fragment>
          ))}
        </StyledNavOptions>
      </StyledNavBox>
      <StyledCustomerBox>
        {userData ? (
          <Avatar sx={{ width: 45, height: 45, backgroundColor: 'pink' }}>
            PD
          </Avatar>
        ) : (
          <Typography>
            <Link to="/logowanie">
              Zaloguj
            </Link>
          </Typography>
        )}
      </StyledCustomerBox>
    </StyledNavbar>
  )
}

export default MainNavbar
