import { FunctionComponent } from 'react'
import { Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material'
import { Settings, Logout } from '@mui/icons-material'

import useAccountMenu from 'infrastructure/components/MainNavbar/hooks/useAccountMenu'
import Routing from 'infrastructure/enums/Routing'
import { StyledLink } from './AccountMenu.styled'
import useSideMenu from 'infrastructure/components/MyAccount/components/SideMenu/hooks/useSideMenu'

type Props = {
initials?: string
}

const AccountMenu: FunctionComponent<Props> = ({ initials }) => {
  const {
    open,
    handleClose,
    handleOpenAccountMenu,
    handleLogout
  } = useAccountMenu()

  const {
    selectedSideMenuItem
  } = useSideMenu()

  const handleRedirect = (id: number) => {
    selectedSideMenuItem(id)
  }

  return (
    <>
      <Tooltip title="Konto">
        <IconButton
          onClick={handleOpenAccountMenu}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 45, height: 45, backgroundColor: 'pink' }}>
            {initials}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={open}
        id="account-menu"
        open={!!open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <StyledLink to={Routing.MyAccount} onClick={() => handleRedirect(0)}>
            <Avatar /> Mój Profil
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={Routing.MyAccount} onClick={() => handleRedirect(1)}>
            <Avatar /> Moje Mecze
          </StyledLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <StyledLink to={Routing.MyAccount} onClick={() => handleRedirect(100)}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Ustawienia
          </StyledLink>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Wyloguj się
        </MenuItem>
      </Menu>
    </>
  )
}

export default AccountMenu
