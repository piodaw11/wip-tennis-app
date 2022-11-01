import styled from 'styled-components'

const StyledLigueWrapper = styled.div`
  max-height: calc(100vh - 70px);
  margin-top: 70px;
  width: 100vw;
  overflow: hidden;
`

const StyledLigue = styled.div`
  display: flex;
  gap: 10px;
  
  & > div:not(:nth-child(2)) {
    padding-top: 2%;
  }
  
  & > div:nth-child(2) {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`

const StyledVideoWrapper = styled.div`
  max-height: 100vh;
  display: flex;
  position: relative;
`

const StyledVideo = styled.video`
  object-fit: cover;
  filter: grayscale(80%);
  width: 100%;
  height: 100%;
  transition: all .6s ease-in-out;
  
  &:hover {
    filter: grayscale(0%);
  }
`

const StyledDescWrapper = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  & > h5 {
    color: white;
    width: 400px;
    text-align: center;
  }
  
  & > button {
    width: 300px;
    background-color: #ba0032;
  }
  
  & > button:hover {
    background-color: #f10041;
  }
`

export {
  StyledLigueWrapper,
  StyledLigue,
  StyledVideo,
  StyledVideoWrapper,
  StyledDescWrapper
}
