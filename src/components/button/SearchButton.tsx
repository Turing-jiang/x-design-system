import { Button } from '@components/button/Button'
import SearchIcon from '@components/icon/SearchIcon'
import { ButtonCommonProps } from '@components/button/ButtonCommonProps'

const SearchButton: React.FC<ButtonCommonProps> = ({ disabled = false }) => {
  return (
    <Button disabled={disabled} rounded="search">
      <SearchIcon></SearchIcon>
    </Button>
  )
}

export default SearchButton
