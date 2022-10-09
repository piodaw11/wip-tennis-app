import styled, { css } from 'styled-components'
import { Button } from '@mui/material'

const StyledReservationCourtReservationBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StyledHourButton = styled(Button)<{ reserved: boolean, clicked: boolean }>`
  ${({ reserved }) => reserved && css`
    background-color: grey!important;
    color: lightgrey!important;
  `}
  ${({ clicked }) => clicked && css`
    background-color: green!important;
    color: white!important;
    border-color: green!important;
  `}
`

export {
  StyledReservationCourtReservationBodyWrapper,
  StyledHourButton
}
