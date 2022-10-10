import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Divider, Typography } from '@mui/material'

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  padding: 32px 140px;
`

const StyledH1 = styled(Typography)`
  font-size: 38px!important;
`

const StyledDividerWrappper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`

const StyledDivider = styled(Divider)`
  width: 47%;
`

const StyledDividerText = styled(Typography)`
  font-size: 14px!important;
  color: rgba(0, 0, 0, 0.5);
`

const StyledRegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`

const StyledRegisterText = styled.p``

const StyledRegisterLink = styled(Link)`
  color: dodgerblue;
`

export {
  StyledRegisterWrapper,
  StyledRegisterText,
  StyledRegisterLink,
  StyledFormWrapper,
  StyledH1,
  StyledDividerWrappper,
  StyledDivider,
  StyledDividerText
}
