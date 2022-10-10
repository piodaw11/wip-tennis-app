import { FunctionComponent, Fragment } from 'react'
import { Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

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
import { UserData } from 'app/store/types'
import CookiesName from 'infrastructure/enums/CookiesName'
import Routing from 'infrastructure/enums/Routing'
import AccountMenu from 'infrastructure/components/MainNavbar/AccountMenu/AccoutMenu'

type Props = {
  userData?: UserData
  isError: boolean
  initials?: string
}

const MainNavbar: FunctionComponent<Props> = ({ isError, userData, initials }) => {
  const { pathname, replace } = useRouter()

  const isPagePublic = PublicPages.includes(pathname)

  if (!isPagePublic && isError) {
    Cookies.remove(CookiesName.AUTH_TOKEN)
    replace(Routing.Login)
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
          <AccountMenu initials={initials} />
        ) : (
          <Typography>
            <Link to={Routing.Login}>
              Zaloguj
            </Link>
          </Typography>
        )}
      </StyledCustomerBox>
    </StyledNavbar>
  )
}

export default MainNavbar
