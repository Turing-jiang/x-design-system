import React, { useContext } from 'react'
import { Icon } from '../Icon'
import DisableUpDirectionIcon from '@/assets/icons/UpDirection/DisableUpDirectionButton.svg'
import DefaultUpDirectionIcon from '@/assets/icons/UpDirection/DefaultUpDirectionButton.svg'
import HoverUpDirectionIcon from '@/assets/icons/UpDirection/HoverUpDirectionButton.svg'
import ActiveUpDirectionIcon from '@/assets/icons/UpDirection/ActiveUpDirectionButton.svg'
import { IconCommonProps } from '@components/icon/IconCommonProps'
import { ButtonContext } from '@components/button/Button'

const UpDirectionIcon: React.FC<IconCommonProps> = ({ className }) => {
  const { state } = useContext(ButtonContext)

  return (
    <Icon
      className={className}
      disabledSrc={DisableUpDirectionIcon}
      defaultSrc={DefaultUpDirectionIcon}
      hoverSrc={HoverUpDirectionIcon}
      activeSrc={ActiveUpDirectionIcon}
      state={state}
    ></Icon>
  )
}
export default UpDirectionIcon
