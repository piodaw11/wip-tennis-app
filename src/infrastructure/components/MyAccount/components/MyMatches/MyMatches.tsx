import { StyledMyMatches, StyledMyMatchesWrapper } from './MyMatches.styled'
import MyMatchesTable
  from 'infrastructure/components/MyAccount/components/MyMatches/components/MyMatchesTable/MyMatchesTable'

const MyMatches = () => (
  <StyledMyMatchesWrapper>
    <StyledMyMatches>
      <MyMatchesTable />
    </StyledMyMatches>
  </StyledMyMatchesWrapper>
)

export default MyMatches
