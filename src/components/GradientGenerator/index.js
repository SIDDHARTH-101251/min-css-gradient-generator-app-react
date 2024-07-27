import {Component} from 'react'
import {
  MainContainer,
  Heading,
  ButtonContainer,
  ColorInput,
  ColorInputContainer,
  GenerateButton,
  List,
  Position,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeColorOne: '#8ae323',
    activeColorTwo: '#014f7b',
    dir: gradientDirectionsList[0].value,
    activeDir: gradientDirectionsList[0].directionId,
  }

  onChangeColorOne = event => {
    this.setState({
      color1: event.target.value,
    })
  }

  onChangeColorTwo = event => {
    this.setState({
      color2: event.target.value,
    })
  }

  onClickDirectionButton = (id, directionId) => {
    this.setState({
      dir: id,
      activeDir: directionId,
    })
  }

  oncClickGenerateButton = () => {
    const {color1, color2} = this.state
    this.setState({
      activeColorOne: color1,
      activeColorTwo: color2,
    })
  }

  render() {
    const {
      activeColorOne,
      activeColorTwo,
      dir,
      color1,
      color2,
      activeDir,
    } = this.state
    return (
      <MainContainer
        c1={activeColorOne}
        c2={activeColorTwo}
        dir={dir}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Heading as="p" size="28px">
          Choose Direction
        </Heading>
        <ButtonContainer>
          {gradientDirectionsList.map(eachItem => (
            <List key={eachItem.directionId}>
              <GradientDirectionItem
                a={eachItem}
                dir={this.onClickDirectionButton}
                activeButton={activeDir === eachItem.directionId}
              />
            </List>
          ))}
        </ButtonContainer>
        <Heading as="p" size="28px">
          Pick the Colors
        </Heading>
        <ColorInputContainer>
          <Position>
            <Heading as="p">{color1}</Heading>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColorOne}
            />
          </Position>
          <Position>
            <Heading as="p">{color2}</Heading>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColorTwo}
            />
          </Position>
        </ColorInputContainer>
        <GenerateButton type="button" onClick={this.oncClickGenerateButton}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
