import React, { useContext } from 'react'
import { Icon } from '../Icon'
import DisableRightDirectionIcon from '@/assets/icons/RightDirection/DisableRightDirectionButton.svg'
import DefaultRightDirectionIcon from '@/assets/icons/RightDirection/DefaultRightDirectionButton.svg'
import HoverRightDirectionIcon from '@/assets/icons/RightDirection/HoverRightDirectionButton.svg'
import ActiveRightDirectionIcon from '@/assets/icons/RightDirection/ActiveRightDirectionButton.svg'
import { IconCommonProps } from '@components/icon/IconCommonProps'
import { ButtonContext } from '@components/button/Button'

const RightDirectionIcon: React.FC<IconCommonProps> = ({ className }) => {
  const { state } = useContext(ButtonContext)

  return (
    <Icon
      className={className}
      disabledSrc={DisableRightDirectionIcon}
      defaultSrc={DefaultRightDirectionIcon}
      hoverSrc={HoverRightDirectionIcon}
      activeSrc={ActiveRightDirectionIcon}
      state={state}
    ></Icon>
  )
}
export default RightDirectionIcon
