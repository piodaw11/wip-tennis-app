import { FunctionComponent } from 'react'
import { Schedule } from '@mui/icons-material'

import CourtIds from 'infrastructure/components/NewReservation/constants/CourtIds'
import {
  StyledCourts,
  StyledHours,
  StyledTable,
  StyledTableWrapper,
  StyledTbody,
  StyledTh,
  StyledThIcon,
  StyledTrBody,
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
            <StyledTrBody key={hour}>
              <StyledHours>{hour}</StyledHours>
              {CourtIds.map((court) => (
                <StyledCourts key={court}>
                  <StyledButton
                    onClick={() => clickedHourHandler(hour, court)}
                    $clicked={isClicked(hour, court)}
                    $reserved={isReserved(hour, court)}
                    disabled={isReserved(hour, court)}
                  >
                    {court}
                  </StyledButton>
                </StyledCourts>
              ))}
            </StyledTrBody>
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
