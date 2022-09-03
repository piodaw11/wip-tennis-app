import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledNavbar = styled.nav`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 2000;
  background-color: #fff;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 1%), 0px 1px 18px 0px rgb(0 0 0 / 1%);;
`

const StyledNavBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 70px;
`

const StyledTypography = styled(Typography)`
  min-width: 150px;
`

const StyledNavOptions = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledNavOption = styled.div`
  flex: 1;
  max-width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    text-decoration: underline;
    transition: .3s;
  }
`

const StyledCustomerBox = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  StyledNavbar,
  StyledNavBox,
  StyledCustomerBox,
  StyledTypography,
  StyledNavOptions,
  StyledNavOption
}