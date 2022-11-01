import styled from 'styled-components'

const StyledMyMatchesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f1f1f1;
`

const StyledMyMatches = styled.div`
  width: calc(100% - 70px);
  display: flex;
`

export {
  StyledMyMatchesWrapper,
  StyledMyMatches
}
