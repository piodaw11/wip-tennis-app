import { Avatar } from '@mui/material'

import {
  StyledMyProfile,
  StyledMyProfileWrapper,
  StyledAvatarWrapper,
  StyledInfoWrapper,
  StyledRightSide,
  StyledStatsWrapper,
  StyledUsername,
  StyledNavWrapper,
  StyledNavButtons,
  StyledButtonsWrapper,
  StyledInfoTextWrapper
} from 'infrastructure/components/MyAccount/components/MyProfile/MyProfile.styled'
import useUserData from 'infrastructure/components/MyAccount/components/MyProfile/hooks/useUserData'

const MyProfile = () => {
  const {
    data,
    userInitials
  } = useUserData()

  return (
    <StyledMyProfileWrapper>
      <StyledMyProfile>
        <StyledAvatarWrapper>
          <Avatar>
            {userInitials}
          </Avatar>
          <StyledUsername>
            {data?.username}
          </StyledUsername>
          <div>
            <StyledStatsWrapper>
              <div>
                <div>3</div>
                <div>Wygrane</div>
              </div>
              <div>
                <div>2</div>
                <div>Przegrane</div>
              </div>
              <div>
                <div>5</div>
                <div>Zagrane</div>
              </div>
              <div>
                <div>10</div>
                <div>Pozostało</div>
              </div>
              <div>
                <div>1</div>
                <div>Miejsce</div>
              </div>
              <div>
                <div>9</div>
                <div>Punkty</div>
              </div>
            </StyledStatsWrapper>
          </div>
        </StyledAvatarWrapper>
        <StyledRightSide>
          <StyledInfoWrapper>
            <StyledNavWrapper>
              <StyledNavButtons>
                <StyledButtonsWrapper>
                  <div>Wygrane mecze</div>
                  <div>Przegrane mecze</div>
                </StyledButtonsWrapper>
              </StyledNavButtons>
              <StyledInfoTextWrapper>
                <div>Lorem</div>
              </StyledInfoTextWrapper>
            </StyledNavWrapper>
          </StyledInfoWrapper>
        </StyledRightSide>
      </StyledMyProfile>
    </StyledMyProfileWrapper>
  )
}

export default MyProfile
