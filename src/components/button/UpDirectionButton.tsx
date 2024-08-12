import { Button } from '@components/button/Button'
import UpDirectionIcon from '@components/icon/direction/UpDirectionIcon'
import { ButtonCommonProps } from '@components/button/ButtonCommonProps'

const UpDirectionButton: React.FC<ButtonCommonProps> = ({ disabled = false }) => {
  return (
    <Button disabled={disabled}>
      <UpDirectionIcon></UpDirectionIcon>
    </Button>
  )
}

export default UpDirectionButton
