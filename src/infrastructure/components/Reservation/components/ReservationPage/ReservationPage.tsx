import { Button } from '@mui/material'

import WeekDays from 'infrastructure/components/Reservation/components/ReservationPage/constants/WeekDays'
import { StyledButton,
  StyledReservationCourtReservationHeaderWrapper,
  StyledReservationCourtReservationWrapper,
  StyledReservationCourtBodyWrapper,
  StyledDayButton,
  StyledReservationSideOptionsWrapper,
  StyledReservationWrapper,
  StyledReservationPage,
  StyledWeekday,
  StyledWeekdayWrapper } from 'infrastructure/components/Reservation/components/ReservationPage/ReservationPage.styled'
import CourtNo from 'infrastructure/components/Reservation/components/ReservationPage/constants/CourtIds'
import ReservationHours from 'infrastructure/components/Reservation/components/ReservationHours/ReservationHours'
import useDate from 'infrastructure/components/Reservation/components/ReservationPage/hooks/useDate'

const ReservationPage = () => {
  const {
    navDate,
    weekDay,
    prevWeekHandler,
    nextWeekHandler,
    weekDayHandler,
    reservationHandler
  } = useDate()

  return (
    <StyledReservationPage>
      <StyledWeekdayWrapper>
        <StyledButton onClick={prevWeekHandler}>&#x2190;</StyledButton>
        <StyledWeekday>
          {navDate}
        </StyledWeekday>
        <StyledButton onClick={nextWeekHandler}>&#x2192;</StyledButton>
      </StyledWeekdayWrapper>
      <StyledReservationWrapper>
        <StyledReservationSideOptionsWrapper>
          {WeekDays.map((day) => (
            <StyledDayButton
              key={day.weekDay}
              variant={weekDay === day.weekDay ? 'contained' : 'outlined'}
              value={day.weekDay}
              onClick={weekDayHandler}
            >
              {day.weekName}
            </StyledDayButton>
          ))}
        </StyledReservationSideOptionsWrapper>
        <StyledReservationCourtReservationWrapper>
          <StyledReservationCourtReservationHeaderWrapper>
            {CourtNo.map((court) => (
              <StyledReservationCourtBodyWrapper key={court}>
                <div>Kort nr {court}</div>
                <ReservationHours courtId={court} />
              </StyledReservationCourtBodyWrapper>
            ))}
          </StyledReservationCourtReservationHeaderWrapper>
        </StyledReservationCourtReservationWrapper>
      </StyledReservationWrapper>
      <Button onClick={reservationHandler}>Rezerwuj</Button>
    </StyledReservationPage>
  )
}

export default ReservationPage
