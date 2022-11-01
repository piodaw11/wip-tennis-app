import { useEffect } from 'react'
import { DeleteForeverOutlined } from '@mui/icons-material'

import {
  StyledSettingsWrapper,
  StyledSettings,
  StyledSettingsOptions,
  StyledSettingsContent,
  StyledOptionsWrapper,
  StyledHeader,
  StyledOptions,
  StyledOptionsItems,
  StyledContentWrapper,
  StyledOptionsTitle,
  StyledOptionsIcons,
  StyledUpperOptions,
  StyledLowerOptions,
  StyledDeleteWrapper,
  StyledDeleteIcon,
  StyledDeleteText
} from './Settings.styled'
import SettingOptions from 'infrastructure/components/MyAccount/components/Settings/constants/SettingOptions'
import useSettingsMenu from 'infrastructure/components/MyAccount/components/Settings/hooks/useSettingsMenu'
import Username from 'infrastructure/components/MyAccount/components/Settings/components/Username/Username'
import Email from 'infrastructure/components/MyAccount/components/Settings/components/Email/Email'
import Password from 'infrastructure/components/MyAccount/components/Settings/components/Password/Password'
import Phone from 'infrastructure/components/MyAccount/components/Settings/components/Phone/Phone'
import Delete from 'infrastructure/components/MyAccount/components/Settings/components/Delete/Delete'

const Settings = () => {
  const {
    selectedOptionsMenuItem,
    selectedOption
  } = useSettingsMenu()

  useEffect(() => {
    selectedOptionsMenuItem(0)
  }, [])

  const activeSettingsMenu = () => {
    switch (selectedOption) {
      case 0:
        return <Username />
      case 1:
        return <Email />
      case 2:
        return <Password />
      case 3:
        return <Phone />
      case 100:
        return <Delete />
      default:
        return <Username />
    }
  }

  return (
    <StyledSettingsWrapper>
      <StyledSettings>
        <StyledSettingsOptions>
          <StyledHeader variant="h4">Ustawienia konta</StyledHeader>
          <StyledOptionsWrapper>
            <StyledUpperOptions>
              {SettingOptions.map(item => (
                <StyledOptions onClick={() => selectedOptionsMenuItem(item.id)} $isActive={selectedOption === item.id}>
                  <StyledOptionsItems>
                    <StyledOptionsIcons $isActive={selectedOption === item.id}>
                      {item.icon}
                    </StyledOptionsIcons>
                    <StyledOptionsTitle>
                      {item.name}
                    </StyledOptionsTitle>
                  </StyledOptionsItems>
                </StyledOptions>
              ))}
            </StyledUpperOptions>
            <StyledLowerOptions>
              <StyledDeleteWrapper onClick={() => selectedOptionsMenuItem(100)} $isActive={selectedOption === 100}>
                <StyledDeleteIcon>
                  <DeleteForeverOutlined />
                </StyledDeleteIcon>
                <StyledDeleteText>
                  Usuń konto
                </StyledDeleteText>
              </StyledDeleteWrapper>
            </StyledLowerOptions>
          </StyledOptionsWrapper>
        </StyledSettingsOptions>
        <StyledSettingsContent>
          <StyledContentWrapper>
            {activeSettingsMenu()}
          </StyledContentWrapper>
        </StyledSettingsContent>
      </StyledSettings>
    </StyledSettingsWrapper>
  )
}

export default Settings
