import styled from 'styled-components'

const StyledLayoutWrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledLayoutChildrenWrapper = styled.div<{ navbarHeight: string }>`
  height: calc(100% - ${({ navbarHeight }) => navbarHeight});
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  StyledLayoutWrapper,
  StyledLayoutChildrenWrapper
}