import { Button } from '@components/button/Button'
import RightDirectionIcon from '@components/icon/direction/RightDirectionIcon'
import { ButtonCommonProps } from '@components/button/ButtonCommonProps'

const RightDirectionButton: React.FC<ButtonCommonProps> = ({ disabled = false }) => {
  return (
    <Button disabled={disabled}>
      <RightDirectionIcon></RightDirectionIcon>
    </Button>
  )
}

export default RightDirectionButton
