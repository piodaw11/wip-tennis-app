import styled from 'styled-components'

const StyledColorPanel = styled.div<{ $backgroundColor: string }>`
  height: 50px;
  width: 50px;
  display: flex;
  margin: 5px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`

export {
  StyledColorPanel
}
