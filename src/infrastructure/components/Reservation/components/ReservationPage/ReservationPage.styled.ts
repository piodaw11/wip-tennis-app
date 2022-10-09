import styled from 'styled-components'
import { Button } from '@mui/material'

const StyledReservationPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  align-items: center;
`

const StyledWeekdayWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 16px;
`

const StyledButton = styled(Button)`
  font-size: 32px!important;
  height: 38px;
`

const StyledWeekday = styled.div`
  font-size: 32px;
  padding: 0 16px;
`

const StyledReservationWrapper = styled.div`
  display: flex;
  gap: 40px;
  overflow: auto;
`

const StyledReservationSideOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
`

const StyledDayButton = styled(Button)`
  height: 50px;
`

const StyledReservationCourtReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0 48px 60px 32px;
`

const StyledReservationCourtReservationHeaderWrapper = styled.div`
  display: flex;
  gap: 40px;
`

const StyledReservationCourtBodyWrapper = styled.div``

export {
  StyledReservationPage,
  StyledWeekdayWrapper,
  StyledButton,
  StyledWeekday,
  StyledReservationWrapper,
  StyledReservationSideOptionsWrapper,
  StyledReservationCourtReservationWrapper,
  StyledReservationCourtReservationHeaderWrapper,
  StyledReservationCourtBodyWrapper,
  StyledDayButton
}
