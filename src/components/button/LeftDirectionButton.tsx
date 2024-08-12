import { Button } from '@components/button/Button'
import LeftDirectionIcon from '@components/icon/direction/LeftDirectionIcon'
import { ButtonCommonProps } from '@components/button/ButtonCommonProps'

const LeftDirectionButton: React.FC<ButtonCommonProps> = ({ disabled = false }) => {
  return (
    <Button disabled={disabled}>
      <LeftDirectionIcon></LeftDirectionIcon>
    </Button>
  )
}

export default LeftDirectionButton
