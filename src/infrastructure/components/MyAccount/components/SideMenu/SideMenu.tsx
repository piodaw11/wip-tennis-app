import {
  Settings
} from '@mui/icons-material'

import {
  StyledIconName,
  StyledIconsWrapper,
  StyledSideMenu,
  StyledSideMenuIconWrapper,
  StyledSideMenuNav,
  StyledSideMenuSettings,
  StyledSideMenuWrapper
} from 'infrastructure/components/MyAccount/components/SideMenu/SideMenu.styled'
import useSideMenu from 'infrastructure/components/MyAccount/components/SideMenu/hooks/useSideMenu'
import SideMenuItems from 'infrastructure/components/MyAccount/components/SideMenu/constants/SideMenuItems'

const SideMenu = () => {
  const {
    handleOpen,
    handleClose,
    open,
    selectedSideMenuItem,
    sideMenu
  } = useSideMenu()

  const handleSideMenuClick = (id: number) => {
    selectedSideMenuItem(id)
  }

  return (
    <StyledSideMenuWrapper $isOpen={open} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <StyledSideMenu>
        <StyledSideMenuNav>
          {SideMenuItems.map(item => (
            <StyledSideMenuIconWrapper key={item.id} onClick={() => handleSideMenuClick(item.id)}>
              <StyledIconsWrapper $isActive={item.id === sideMenu}>
                {item.icon}
              </StyledIconsWrapper>
              <StyledIconName $isOpen={open}>{item.name}</StyledIconName>
            </StyledSideMenuIconWrapper>
          ))}
        </StyledSideMenuNav>
        <StyledSideMenuSettings>
          <StyledSideMenuIconWrapper onClick={() => handleSideMenuClick(100)}>
            <StyledIconsWrapper $isActive={sideMenu === 100}>
              <Settings />
            </StyledIconsWrapper>
            <StyledIconName $isOpen={open}>Ustawienia</StyledIconName>
          </StyledSideMenuIconWrapper>
        </StyledSideMenuSettings>
      </StyledSideMenu>
    </StyledSideMenuWrapper>
  )
}

export default SideMenu
