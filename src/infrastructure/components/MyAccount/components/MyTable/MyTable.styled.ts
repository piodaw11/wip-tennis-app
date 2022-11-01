import styled from 'styled-components'

const StyledMyTableWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f1f1f1;
`

const StyledMyTable = styled.div`
  width: calc(100% - 70px);
  display: flex;
  padding: 40px 0 0;
  gap: 20px;
`

export {
  StyledMyTableWrapper,
  StyledMyTable
}
