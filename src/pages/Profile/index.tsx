import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { TabPanel, Tabs } from 'react-tabs'

import { fetchHeroes } from '../../utils/fetchHeroes'

import { Loader } from '../../components/Loader'
import { Nav } from '../../components/Nav'

import { SearchBar } from '../../components/SearchBar'
import { Container } from '../../components/Wrapper/styles'
import {
  ProfileInfoBlock,
  ProfileInfoBlockContent,
  ProfileInfoBlockImage,
  ProfileTabItem,
  ProfileTabList,
  ProfileTitle,
  ProfileWrapper,
} from './styles'

const IMAGE_SIZE = 'standard_medium'

export const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hero, setHero] = useState<any>({})
  const [creators, setCreators] = useState<[]>([])
  const { id } = useParams()

  useEffect(() => {
    fetchHeroes('get-heroes', id as string).then((response) => {
      const desiredHero = response.data.results[0]
      // console.log(desiredHero)

      setHero(desiredHero)
    })
  }, [])

  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     setIsLoading(false)
  //   })
  // }, [isLoading])

  // useEffect(() => {
  //   console.log(hero, hero.comics?.items)
  // }, [hero])

  const fetchCreators = () => {
    fetchHeroes('get-creators', hero?.id).then((response) => {
      setCreators(response.data.results[0].creators.items)
      // console.log(response.data.results[0].creators.items)
    })
  }

  return (
    <>
      <Nav />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <SearchBar />

            <ProfileWrapper>
              <ProfileTitle>
                Perfil <span>{hero.name}</span>
              </ProfileTitle>

              <Tabs>
                <ProfileTabList>
                  <ProfileTabItem>Visão Geral</ProfileTabItem>
                  <ProfileTabItem>Teams</ProfileTabItem>
                  <ProfileTabItem>Powers</ProfileTabItem>
                  <ProfileTabItem>Species</ProfileTabItem>
                  <ProfileTabItem onClick={fetchCreators}>
                    Authors
                  </ProfileTabItem>
                </ProfileTabList>

                <TabPanel>
                  <ProfileInfoBlock>
                    {hero.thumbnail && (
                      <ProfileInfoBlockImage
                        src={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
                        alt=""
                      />
                    )}

                    <ProfileInfoBlockContent>
                      <h3>{hero.name}</h3>

                      {hero.description && <p>{hero.description}</p>}
                    </ProfileInfoBlockContent>
                  </ProfileInfoBlock>
                </TabPanel>

                <TabPanel>
                  <ProfileInfoBlock>
                    {hero.comics && (
                      <ul>
                        {hero.comics.items.map((item, index) => {
                          return <li key={index}>{item.name}</li>
                        })}
                      </ul>
                    )}
                  </ProfileInfoBlock>
                </TabPanel>

                <TabPanel>
                  <p>tab 3</p>
                </TabPanel>

                <TabPanel>
                  <p>tab 4</p>
                </TabPanel>

                <TabPanel>
                  <ProfileInfoBlock>
                    {creators && (
                      <ul>
                        {creators.map((item, index) => {
                          return <li key={index}>{item.name}</li>
                        })}
                      </ul>
                    )}
                  </ProfileInfoBlock>
                </TabPanel>
              </Tabs>
            </ProfileWrapper>
          </Container>
        </>
      )}
    </>
  )
}
