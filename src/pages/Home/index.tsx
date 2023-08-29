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

import { useForm } from 'react-hook-form'

import { useEffect, useState } from 'react'
import { Nav } from '../../components/Nav'
import { Container } from '../../components/Wrapper/styles'
import { fetchHeroes } from '../../utils/fetchHeroes'

import { motion } from 'framer-motion'
import Search from '/icons/search.svg'

const IMAGE_SIZE = 'portrait_medium'

export const HomePage = () => {
  const [searchResults, setSearchResults] = useState<unknown[]>([])

  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const requestData = (param: string, value: string) => {
    fetchHeroes(param, value as string).then((response) => {
      const searchedHeroes = response.data.results
      setSearchResults(searchedHeroes)
    })
  }

  const onSubmit = (data: any) => {
    requestData('get-heroes', data.search as string)
  }

  // Requisição inicial, somente ao carregar a página.
  useEffect(() => {
    requestData('get-heroes', 'a' as string)
  }, [])

  const heroListing = searchResults?.map((searchResultsItem: any) => {
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
              src={`${searchResultsItem.thumbnail.path}/${IMAGE_SIZE}.${searchResultsItem.thumbnail.extension}`}
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
