import { StyledMyResults, StyledMyResultsWrapper } from './MyResults.styled'
import MyResTable from 'infrastructure/components/MyAccount/components/MyResults/components/MyResTable/MyResTable'

const MyResults = () => (
  <StyledMyResultsWrapper>
    <StyledMyResults>
      <MyResTable />
    </StyledMyResults>
  </StyledMyResultsWrapper>
)

export default MyResults
