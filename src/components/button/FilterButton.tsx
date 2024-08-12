import { Button } from '@components/button/Button'
import FilterIcon from '@components/icon/FilterIcon'
import { ButtonCommonProps } from '@components/button/ButtonCommonProps'

const FilterButton: React.FC<ButtonCommonProps> = ({ disabled = false }) => {
  return (
    <Button disabled={disabled} rounded="filter">
      <FilterIcon></FilterIcon>
    </Button>
  )
}

export default FilterButton
