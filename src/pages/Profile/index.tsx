import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { TabPanel, Tabs } from 'react-tabs'

import { fetchHeroes } from '../../utils/fetchHeroes'

import { Nav } from '../../components/Nav'

import { SearchBar } from '../../components/SearchBar'
import { Container } from '../../components/Wrapper/styles'

import {
  ProfileInfoBlock,
  ProfileInfoBlockContent,
  ProfileInfoBlockImage,
  ProfileInfoList,
  ProfileTabItem,
  ProfileTabList,
  ProfileTitle,
  ProfileWrapper,
} from './styles'

const IMAGE_SIZE = 'standard_medium'

export const ProfilePage = () => {
  const [hero, setHero] = useState<any>({})
  const [creators, setCreators] = useState<[]>([])
  const { id } = useParams()

  useEffect(() => {
    fetchHeroes('get-heroes', id as string).then((response) => {
      const desiredHero = response.data.results[0]
      // console.log(response.data)
      setHero(desiredHero)
    })
  }, [id])

  // useEffect(() => {
  //   console.log(hero, hero.comics?.items)
  // }, [hero])

  const fetchCreators = () => {
    fetchHeroes('get-creators-related-to-hero', hero?.id).then((response) => {
      setCreators(response.data.results[0].creators.items)
      // console.log(response.data.results[0].creators.items)
    })
  }

  return (
    <>
      <Nav />

      <Container>
        <SearchBar />

        <ProfileWrapper>
          <ProfileTitle>
            Perfil <span>{hero?.name}</span>
          </ProfileTitle>

          <Tabs>
            <ProfileTabList>
              <ProfileTabItem data-cy="Visão Geral">Visão Geral</ProfileTabItem>
              <ProfileTabItem data-cy="Teams">Teams</ProfileTabItem>
              <ProfileTabItem data-cy="Powers">Powers</ProfileTabItem>
              <ProfileTabItem data-cy="Species">Species</ProfileTabItem>
              <ProfileTabItem data-cy="Authors" onClick={fetchCreators}>
                Authors
              </ProfileTabItem>
            </ProfileTabList>

            <TabPanel>
              <ProfileInfoBlock>
                {hero?.thumbnail && (
                  <ProfileInfoBlockImage
                    src={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
                    alt=""
                  />
                )}

                <ProfileInfoBlockContent>
                  <h3>{hero?.name}</h3>

                  {hero?.description ? (
                    <p>{hero.description}</p>
                  ) : (
                    'Não há descrição disponível no momento.'
                  )}
                </ProfileInfoBlockContent>
              </ProfileInfoBlock>
            </TabPanel>

            <TabPanel>
              {hero?.series && (
                <ProfileInfoList>
                  {hero.series.items.map((item, index) => {
                    return <li key={index}>{item.name}</li>
                  })}
                </ProfileInfoList>
              )}
            </TabPanel>

            <TabPanel>
              <p>tab 3</p>
            </TabPanel>

            <TabPanel>
              <p>tab 4</p>
            </TabPanel>

            <TabPanel>
              {creators && (
                <ProfileInfoList>
                  {creators.map((item, index) => {
                    return <li key={index}>{item.name}</li>
                  })}
                </ProfileInfoList>
              )}
            </TabPanel>
          </Tabs>
        </ProfileWrapper>
      </Container>
    </>
  )
}
