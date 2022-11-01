import styled, { css } from 'styled-components'

const StyledSideMenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  margin-top: 70px;
  top: 0;
  left: 0;
  width: 70px;
  background-color: slategray;
  display: flex;
  padding: 0 15px;
  height: calc(100% - 70px);
  transition: all .3s ease-in-out;
  z-index: 1;
  
  ${({ $isOpen }) => $isOpen && css`
    width: 200px;
  `}
`

const StyledSideMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  width: 70px;
`

const StyledSideMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`

const StyledSideMenuSettings = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledSideMenuIconWrapper = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  cursor: pointer;
`

const StyledIconsWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  & > svg {
    transition: all .2s ease-in-out;
  }
  
  ${({ $isActive }) => $isActive && css`
    & > svg {
      fill: #00a4ec;
    }
  `}
`

const StyledIconName = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  opacity: 0;
  font-size: 0;
  transition: opacity .2s ease-in-out;
  color: #fff;
  
  ${({ $isOpen }) => $isOpen && css`
    opacity: 1;
    font-size: 16px;
  `}
`

export {
  StyledSideMenu,
  StyledSideMenuWrapper,
  StyledSideMenuNav,
  StyledSideMenuSettings,
  StyledIconsWrapper,
  StyledSideMenuIconWrapper,
  StyledIconName
}
