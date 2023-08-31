import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { IMAGE_SIZES } from '../../utils/constants'
import { fetchHeroes } from '../../utils/fetchHeroes'

import { IHero, ISearchFormData } from '../../interfaces/interfaces'

import { Nav } from '../../components/Nav'
import { Container } from '../../components/Wrapper/styles'

import {
  HeroList,
  HeroListItem,
  HeroListItemInfo,
  HeroListItemInfoDescription,
  HeroListItemInfoTitle,
  HeroListItemLink,
  SearchBox,
  SearchBoxField,
} from './styles'

import Search from '/icons/search.svg'

export const HomePage = () => {
  const [searchResults, setSearchResults] = useState<IHero[]>([])

  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const requestData = (param: string, value: string) => {
    fetchHeroes(param, value).then((response) => {
      const searchedHeroes = response.data.results
      setSearchResults(searchedHeroes)
    })
  }

  const onSubmit = (data: ISearchFormData) => {
    requestData('get-heroes', data.search)
  }

  // Requisição inicial, somente ao carregar a página.
  useEffect(() => {
    requestData('get-heroes', 'a')
  }, [])

  const heroListing = searchResults?.map((searchResultsItem) => {
    return (
      <HeroListItem key={searchResultsItem.id}>
        <motion.div
          style={{ width: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <HeroListItemLink
            to={`/perfil/${searchResultsItem?.name.toLowerCase()}`}
          >
            <img
              src={`${searchResultsItem.thumbnail.path}/${IMAGE_SIZES.portrait_medium}.${searchResultsItem.thumbnail.extension}`}
              alt="teste"
            />

            <HeroListItemInfo>
              <HeroListItemInfoTitle>
                {searchResultsItem.name}
              </HeroListItemInfoTitle>

              <HeroListItemInfoDescription>
                {searchResultsItem.description || 'No description available'}
              </HeroListItemInfoDescription>
            </HeroListItemInfo>
          </HeroListItemLink>
        </motion.div>
      </HeroListItem>
    )
  })

  return (
    <>
      <Nav />

      <Container>
        <SearchBox onSubmit={handleSubmit(onSubmit)}>
          <SearchBoxField>
            <label htmlFor="search">
              <img src={Search} alt="" />
            </label>

            <input
              type="text"
              placeholder="Busque pelo seu agente"
              {...register('search')}
            />
          </SearchBoxField>
        </SearchBox>

        <HeroList>
          {searchResults.length ? (
            heroListing
          ) : (
            <p>No corresponding heroes found. Please try again</p>
          )}
        </HeroList>
      </Container>
    </>
  )
}
