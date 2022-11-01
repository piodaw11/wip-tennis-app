import { StyledMyReservations, StyledMyReservationsWrapper } from './MyReservations.styled'
import MyReservationsTable
  from
    'infrastructure/components/MyAccount/components/MyReservations/components/MyReservationsTable/MyReservationsTable'

const MyReservations = () => (
  <StyledMyReservationsWrapper>
    <StyledMyReservations>
      <MyReservationsTable />
    </StyledMyReservations>
  </StyledMyReservationsWrapper>
  )

export default MyReservations
