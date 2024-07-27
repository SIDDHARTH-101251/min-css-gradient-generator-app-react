import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {a, dir, activeButton} = props
  const {displayText, value, directionId} = a
  return (
    <Button
      type="button"
      onClick={() => dir(value, directionId)}
      activeButton={activeButton}
    >
      {displayText}
    </Button>
  )
}

export default GradientDirectionItem
