import styled from 'styled-components'

const StyledMyProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #f1f1f1;
`

const StyledMyProfile = styled.div`
  width: calc(100% - 70px);
  display: flex;
`

const StyledAvatarWrapper = styled.div`
  width: 400px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  & > div:first-of-type {
    width: 120px;
    height: 120px;
    padding: 5px;
    background-color: pink;
    border: 2px solid lightgray;
    font-size: 32px;
  }
`

const StyledRightSide = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInfoWrapper = styled.div`
  width: calc(100vw - 530px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: #fff;
  height: 100%;
`

const StyledStatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
  background-color: lightgrey;
  border: 1px solid lightgrey;
  border-radius: 8px;
  
  & > div {
    padding: 10px;
    width: 120px;
    height: 120px;
    background-color: #fff;
    transition: all .2s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    cursor: default;
  }
  
  & > div:first-of-type {
    border-radius: 7px 0 0 0;
  }

  & > div:nth-child(2) {
    border-radius: 0 7px 0 0;
  }
  
  & > div:nth-child(5) {
    border-radius: 0 0 0 7px;
  }
  
  & > div:last-of-type {
    border-radius: 0 0 7px 0;
  }
  
  & > div:hover {
    border-radius: 8px;
    transform: scale(1.2);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  
  & > div > div {
    transition: all .2s ease-in-out;
  }
  
  & > div > div:first-of-type {
    font-size: 20px;
  }
  
  & > div > div:last-of-type {
    font-size: 12px;
  }
  
  & > div:hover > div {
    color: dodgerblue;
  }
`

const StyledUsername = styled.div`
  margin: 16px 0 40px;
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
`

const StyledNavWrapper = styled.div`
  width: calc(100vw - 530px);
`

const StyledNavButtons = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
`

const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 20px 30px;
`

const StyledInfoTextWrapper = styled.div`
  padding: 20px 30px;
`

export {
  StyledMyProfileWrapper,
  StyledMyProfile,
  StyledAvatarWrapper,
  StyledInfoWrapper,
  StyledRightSide,
  StyledStatsWrapper,
  StyledUsername,
  StyledNavWrapper,
  StyledNavButtons,
  StyledButtonsWrapper,
  StyledInfoTextWrapper
}
