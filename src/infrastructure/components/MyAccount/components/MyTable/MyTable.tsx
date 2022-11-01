import { StyledMyTableWrapper, StyledMyTable } from './MyTable.styled'
import LigueTable from 'infrastructure/components/MyAccount/components/MyTable/components/LigueTable/LigueTable'
import ResultsTable from 'infrastructure/components/MyAccount/components/MyTable/components/ResultsTable/ResultsTable'

const MyTable = () => (
  <StyledMyTableWrapper>
    <StyledMyTable>
      <LigueTable />
      <ResultsTable />
    </StyledMyTable>
  </StyledMyTableWrapper>
)

export default MyTable
