import styled from 'styled-components'
import { Button } from '@mui/material'

const StyledFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  position: absolute;
  right: 1%;
  top: 80%;
  width: 120px;
  background-color: #fff;
  z-index: 1;
`

const StyledButton = styled(Button)`
  color: #000!important;
  width: 100%;
  text-transform: capitalize!important;
  font-weight: 400!important;
`

export {
  StyledFiltersWrapper,
  StyledButton
}
