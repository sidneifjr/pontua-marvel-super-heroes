import { useState } from 'react'
import { SearchBox, SearchBoxField } from './styles'

import Search from '/icons/search.svg'

export const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <SearchBox action="">
      <SearchBoxField>
        <label htmlFor="">
          <img src={Search} alt="" />
          {!isInputFocused && <span>Busque um agente</span>}
        </label>

        <input
          type="text"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
      </SearchBoxField>
    </SearchBox>
  )
}
