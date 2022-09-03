import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1vw;
  background-color: #f0f0f0;
  overflow: hidden;
`

const StyledVideoWrapper = styled.div`
  display: flex;
  height: 140vh;
  
`

const StyledVideo = styled.video`
  filter: grayscale(70%)
`

const StyledBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export {
  StyledHeader,
  StyledVideoWrapper,
  StyledVideo,
  StyledBg
}
