import React, { useContext } from 'react'
import { Icon } from './Icon'
import DisableFilterIcon from '@/assets/icons/Filter/DisableFilterButton.svg'
import DefaultFilterIcon from '@/assets/icons/Filter/DefaultFilterButton.svg'
import HoverFilterIcon from '@/assets/icons/Filter/HoverFilterButton.svg'
import ActiveFilterIcon from '@/assets/icons/Filter/ActiveFilterButton.svg'
import { IconCommonProps } from '@components/icon/IconCommonProps'
import { ButtonContext } from '@components/button/Button'

const FilterIcon: React.FC<IconCommonProps> = ({ className }) => {
  const { state } = useContext(ButtonContext)

  return (
    <Icon
      className={className}
      disabledSrc={DisableFilterIcon}
      defaultSrc={DefaultFilterIcon}
      hoverSrc={HoverFilterIcon}
      activeSrc={ActiveFilterIcon}
      state={state}
    ></Icon>
  )
}
export default FilterIcon
