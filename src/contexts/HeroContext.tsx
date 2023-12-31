import { ReactNode, createContext, useEffect, useState } from 'react'

import { IHero, ISearchFormData } from '../interfaces/interfaces'

import { fetchHeroes } from '../utils/fetchHeroes'

export const HeroContext = createContext({} as HeroContextProps)

type HeroContextProps = {
  searchResults: IHero[]
  submitHandler: (data: ISearchFormData) => void
  selectedHero: string
  setSelectedHero: React.Dispatch<React.SetStateAction<string>>
}

export function HeroProvider({ children }: { children: ReactNode }) {
  const [selectedHero, setSelectedHero] = useState('')
  const [searchResults, setSearchResults] = useState<IHero[]>([])

  const requestData = (param: string, value: string) => {
    fetchHeroes(param, value).then((response) => {
      const searchedHeroes = response.data.results
      setSearchResults(searchedHeroes)
    })
  }

  const submitHandler = (data: ISearchFormData) => {
    requestData('get-heroes', data.search)
  }

  // Requisição inicial, somente ao carregar a página.
  useEffect(() => {
    requestData('get-heroes', 'a')
  }, [])

  return (
    <HeroContext.Provider
      value={{ searchResults, submitHandler, selectedHero, setSelectedHero }}
    >
      {children}
    </HeroContext.Provider>
  )
}
