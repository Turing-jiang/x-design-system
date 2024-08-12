import { Button } from '@components/button/Button'
import DownDirectionIcon from '@components/icon/direction/DownDirectionIcon'
import { ButtonCommonProps } from '@components/button/ButtonCommonProps'

const DownDirectionButton: React.FC<ButtonCommonProps> = ({ disabled = false }) => {
  return (
    <Button disabled={disabled}>
      <DownDirectionIcon></DownDirectionIcon>
    </Button>
  )
}

export default DownDirectionButton
