import React, { useContext } from 'react'
import { Icon } from '../Icon'
import DisableDownDirectionIcon from '@/assets/icons/DownDirection/DisableDownDirectionButton.svg'
import DefaultDownDirectionIcon from '@/assets/icons/DownDirection/DefaultDownDirectionButton.svg'
import HoverDownDirectionIcon from '@/assets/icons/DownDirection/HoverDownDirectionButton.svg'
import ActiveDownDirectionIcon from '@/assets/icons/DownDirection/ActiveDownDirectionButton.svg'
import { IconCommonProps } from '@components/icon/IconCommonProps'
import { ButtonContext } from '@components/button/Button'

const DownDirectionIcon: React.FC<IconCommonProps> = ({ className }) => {
  const { state } = useContext(ButtonContext)

  return (
    <Icon
      className={className}
      disabledSrc={DisableDownDirectionIcon}
      defaultSrc={DefaultDownDirectionIcon}
      hoverSrc={HoverDownDirectionIcon}
      activeSrc={ActiveDownDirectionIcon}
      state={state}
    ></Icon>
  )
}
export default DownDirectionIcon
