import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  font-weight: bold;
  background-color: white;
  opacity: ${props => (props.activeButton ? 1 : 0.5)};
  color: black;
  padding: 5px;
  border-style: solid;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 8px;
  width: 100%;
`
