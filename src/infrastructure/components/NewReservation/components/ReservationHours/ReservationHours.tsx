import { FunctionComponent } from 'react'
import { Schedule, Add } from '@mui/icons-material'

import CourtIds from 'infrastructure/components/NewReservation/constants/CourtIds'
import {
  StyledCourts,
  StyledHours,
  StyledTable,
  StyledTableWrapper,
  StyledTbody,
  StyledTh,
  StyledThIcon,
  StyledTrHead,
  StyledButton,
  StyledReservationButton,
  StyledIconWrapper
} from './ReservationHours.styled'
import useSelectedHours
  from 'infrastructure/components/NewReservation/components/ReservationHours/hooks/useSelectedHours'
import useReservedHours
  from 'infrastructure/components/NewReservation/components/ReservationHours/hooks/useReservedHours'
import Hours from 'infrastructure/components/NewReservation/components/ReservationHours/constants/Hours'

const ReservationHours: FunctionComponent = () => {
  const {
    SelectedHours,
    clickedHours,
    isClicked,
    reservationHandler
  } = useSelectedHours()

  const {
    isReserved
  } = useReservedHours()

  const clickedHourHandler = (hour: string, courtId: number) => {
    SelectedHours(hour, courtId)
  }

  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <StyledTrHead>
            <StyledThIcon>
              <StyledIconWrapper>
                <Schedule />
              </StyledIconWrapper>
            </StyledThIcon>
            {CourtIds.map((court) => (
              <StyledTh key={court}>Kort {court}</StyledTh>
            ))}
          </StyledTrHead>
        </thead>
        <StyledTbody>
          {Hours.map((hour) => (
            <tr key={hour}>
              <StyledHours>{hour}</StyledHours>
              {CourtIds.map((court) => (
                <StyledCourts key={court} $reserved={isReserved(hour, court)}>
                  <StyledButton
                    onClick={() => clickedHourHandler(hour, court)}
                    $clicked={isClicked(hour, court)}
                    $reserved={isReserved(hour, court)}
                    disabled={isReserved(hour, court)}
                  >
                    {!isReserved(hour, court) && <Add />}
                  </StyledButton>
                </StyledCourts>
              ))}
            </tr>
          ))}
        </StyledTbody>
      </StyledTable>
      {clickedHours.length ? (
        <StyledReservationButton variant="contained" onClick={reservationHandler}>
          Rezerwuj
        </StyledReservationButton>
      ) : ''}
    </StyledTableWrapper>
  )
}

export default ReservationHours
