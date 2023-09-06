import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

import { IMAGE_SIZES } from '../../utils/constants'

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

import { useContext } from 'react'
import { HeroContext } from '../../contexts/HeroContext'

import { IHero } from '../../interfaces/interfaces'
import Search from '/icons/search.svg'

export const HomePage = () => {
  const { searchResults, submitHandler } = useContext(HeroContext)

  // console.log(searchResults, submitHandler)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const heroListing = searchResults?.map((searchResultsItem: IHero) => {
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
        <SearchBox onSubmit={handleSubmit(submitHandler)}>
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
