import { FunctionComponent, Fragment } from 'react'

import {
  StyledNavbar,
  StyledNavBox,
  StyledCustomerBox,
  StyledTypography,
  StyledNavOptions,
  StyledNavOption
} from './MainNavbar.styled'
import { Avatar, Divider, Typography } from '@mui/material'
import MainNavbarItems from 'infrastructure/components/MainNavbar/constants/MainNavbarItems'
import { Link } from 'react-router-dom'
import { UserData } from 'app/store/types'

type Props = {
  userData?: UserData
}

const MainNavbar: FunctionComponent<Props> = ({ userData }) => (
  <StyledNavbar>
    <StyledNavBox>
      <StyledTypography>
        LOGO
      </StyledTypography>
      <StyledNavOptions>
        {MainNavbarItems.map(({ isPublic, url, label }, index) => (
          <Fragment key={label}>
            {index !== 0 && <Divider orientation="vertical" style={{ maxHeight: '50%' }} /> }
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
      {userData && userData.username ? (
        <Avatar sx={{ width: 45, height: 45, backgroundColor: 'pink' }}>
          PD
        </Avatar>
        ) : (
          <Typography>
            Zaloguj
          </Typography>
        )}
    </StyledCustomerBox>
  </StyledNavbar>
  )

export default MainNavbar
