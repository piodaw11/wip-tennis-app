import { FunctionComponent, MouseEvent } from 'react'

import Hours from 'infrastructure/components/Reservation/components/ReservationHours/constants/Hours'
import { StyledReservationCourtReservationBodyWrapper,
  StyledHourButton } from 'infrastructure/components/Reservation/components/ReservationHours/ReservationHours.styled'
import useReservedHours from 'infrastructure/components/Reservation/components/ReservationHours/hooks/useReservedHours'
import useSelectedHours from 'infrastructure/components/Reservation/components/ReservationHours/hooks/useSelectedHours'

type Props = {
  courtId: number
}

const ReservationHours: FunctionComponent<Props> = ({ courtId }) => {
  const {
    selectHourHandler,
    isClicked
  } = useSelectedHours()

  const {
    isReserved
  } = useReservedHours()

  const selectedHoursHandler = (event: MouseEvent<HTMLButtonElement>) => {
    selectHourHandler(event.currentTarget.innerText, courtId)
  }

  return (
    <StyledReservationCourtReservationBodyWrapper>
      {Hours.map((hour) => (
        <StyledHourButton
          key={hour}
          onClick={selectedHoursHandler}
          variant="outlined"
          clicked={isClicked(hour, courtId)}
          reserved={isReserved(hour, courtId)}
          disabled={isReserved(hour, courtId)}
        >
          {hour}
        </StyledHourButton>
      ))}
    </StyledReservationCourtReservationBodyWrapper>
  )
}
export default ReservationHours
