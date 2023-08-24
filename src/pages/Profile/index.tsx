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
  const { id } = useParams()

  useEffect(() => {
    fetchHeroes('get-heroes', id as string).then((response) => {
      const desiredHero = response.data.results[0]
      setHero(desiredHero)
    })
  }, [])

  // useEffect(() => {
  //   fetchHeroes('get-creators', id as string).then((response) => {
  //     console.log(response)
  //   })
  // }, [])

  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     setIsLoading(false)
  //   })
  // }, [isLoading])

  // useEffect(() => {
  //   console.log(hero, hero.comics?.items)
  // }, [hero])

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
                  <ProfileTabItem>Authors</ProfileTabItem>
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
                        {hero.comics.items.map((item) => {
                          return <li>{item.name}</li>
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
                  <ProfileInfoBlock>{/* <ul>{hero.}</ul> */}</ProfileInfoBlock>
                </TabPanel>
              </Tabs>
            </ProfileWrapper>
          </Container>
        </>
      )}
    </>
  )
}
