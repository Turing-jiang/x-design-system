import React, { useContext } from 'react'
import { Icon } from '../Icon'
import DisableLeftDirectionIcon from '@/assets/icons/LeftDirection/DisableLeftDirectionButton.svg'
import DefaultLeftDirectionIcon from '@/assets/icons/LeftDirection/DefaultLeftDirectionButton.svg'
import HoverLeftDirectionIcon from '@/assets/icons/LeftDirection/HoverLeftDirectionButton.svg'
import ActiveLeftDirectionIcon from '@/assets/icons/LeftDirection/ActiveLeftDirectionButton.svg'
import { IconCommonProps } from '@components/icon/IconCommonProps'
import { ButtonContext } from '@components/button/Button'

const LeftDirectionIcon: React.FC<IconCommonProps> = ({ className }) => {
  const { state } = useContext(ButtonContext)

  return (
    <Icon
      className={className}
      disabledSrc={DisableLeftDirectionIcon}
      defaultSrc={DefaultLeftDirectionIcon}
      hoverSrc={HoverLeftDirectionIcon}
      activeSrc={ActiveLeftDirectionIcon}
      state={state}
    ></Icon>
  )
}
export default LeftDirectionIcon
