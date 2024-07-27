import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${props => `to ${props.dir}, ${props.c1}, ${props.c2}`}
  );
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => props.size};
  color: #ffffff;
  text-align: center;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 40px;
  border-width: 0px;
  border-style: solid;
`

export const ButtonContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 28px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const List = styled.li`
  font-familyr: 'Roboto';
  width: 49%;

  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const ColorInputContainer = styled.form`
  display: flex;
  width: 275px;
  justify-content: space-between;
`

export const GenerateButton = styled.button`
  width: 110px;
  height: 38px;
  background-color: #00c9b7;
  border: 0 solid;
  border-radius: 12px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  margin-top: 28px;
`
export const Position = styled.div`
  display: flex;
  flex-direction: column;
`
