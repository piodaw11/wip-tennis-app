import styled, { css } from 'styled-components'
import { Typography } from '@mui/material'

const StyledSettingsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f1f1f1;
`

const StyledSettings = styled.div`
  width: calc(100% - 70px);
  display: flex;
`

const StyledSettingsOptions = styled.div`
  width: 30%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const StyledOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  justify-content: space-between;
`

const StyledHeader = styled(Typography)``

const StyledUpperOptions = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 20px;
`

const StyledLowerOptions = styled.div`
  display: flex;
  justify-content: center;
`

const StyledOptions = styled.div<{ $isActive: boolean }>`
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 10px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  
  ${({ $isActive }) => $isActive && css`
    background-color: #e8e6e6;
  `}
`

const StyledOptionsItems = styled.div`
  display: flex;
  gap: 12px;
`

const StyledOptionsIcons = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({ $isActive }) => $isActive && css`
    & > svg {
      fill: dodgerblue;
    }
  `}
`

const StyledOptionsTitle = styled(Typography)``

const StyledSettingsContent = styled.div`
  width: 70%;
  padding: 40px 0 0 40px;
`

const StyledContentWrapper = styled.div`
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-radius: 8px 0 0 0;
  height: 100%;
  width: 100%;
  padding: 40px;
  background-color: #fff;
`

const StyledDeleteWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  height: 46px;
  width: 150px;
  gap: 6px;
  align-items: center;
  padding: 0 10px;
  border: 1px solid red;
  border-radius: 8px;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all .2s ease-in-out;
  
  &:hover {
    background-color: #ffdede;
  }
  
  ${({ $isActive }) => $isActive && css`
    background-color: #ffdede;
  `}
`

const StyledDeleteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > svg {
    fill: red;
    font-size: 28px;
  }
`

const StyledDeleteText = styled(Typography)`
  color: red;
`

export {
  StyledSettingsWrapper,
  StyledSettings,
  StyledSettingsOptions,
  StyledSettingsContent,
  StyledOptionsWrapper,
  StyledHeader,
  StyledOptions,
  StyledOptionsItems,
  StyledContentWrapper,
  StyledOptionsIcons,
  StyledOptionsTitle,
  StyledUpperOptions,
  StyledLowerOptions,
  StyledDeleteWrapper,
  StyledDeleteIcon,
  StyledDeleteText
}
