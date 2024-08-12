import React, { useContext } from 'react'
import { Icon } from './Icon'
import DisableSearchIcon from '@/assets/icons/Search/DisableSearchButton.svg'
import DefaultSearchIcon from '@/assets/icons/Search/DefaultSearchButton.svg'
import HoverSearchIcon from '@/assets/icons/Search/HoverSearchButton.svg'
import ActiveSearchIcon from '@/assets/icons/Search/ActiveSearchButton.svg'
import { IconCommonProps } from '@components/icon/IconCommonProps'
import { ButtonContext } from '@components/button/Button'

const SearchIcon: React.FC<IconCommonProps> = ({ className }) => {
  const { state } = useContext(ButtonContext)

  return (
    <Icon
      className={className}
      disabledSrc={DisableSearchIcon}
      defaultSrc={DefaultSearchIcon}
      hoverSrc={HoverSearchIcon}
      activeSrc={ActiveSearchIcon}
      state={state}
    ></Icon>
  )
}
export default SearchIcon
