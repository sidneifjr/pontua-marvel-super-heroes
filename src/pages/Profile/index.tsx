import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { TabPanel, Tabs } from 'react-tabs'

import { IMAGE_SIZES } from '../../utils/constants'
import { fetchHeroes } from '../../utils/fetchHeroes'

import { Nav } from '../../components/Nav'
import { Container } from '../../components/Wrapper/styles'

import { IHero } from '../../interfaces/interfaces'

import {
  ProfileInfoBlock,
  ProfileInfoBlockContent,
  ProfileInfoList,
  ProfileTabItem,
  ProfileTabList,
  ProfileTitle,
  ProfileWrapper,
} from './styles'

export const ProfilePage = () => {
  const [hero, setHero] = useState<IHero>({})
  const [creators, setCreators] = useState<[]>([])
  const { id } = useParams()

  useEffect(() => {
    fetchHeroes('get-heroes', id as string).then((response) => {
      const desiredHero = response.data.results[0]
      setHero(desiredHero)
    })
  }, [id])

  const fetchCreators = () => {
    fetchHeroes('get-creators-related-to-hero', hero?.id as string).then(
      (response) => {
        setCreators(response.data.results[0].creators.items)
      }
    )
  }

  return (
    <>
      <Nav />

      <Container>
        <ProfileWrapper>
          <ProfileTitle>
            Perfil <span>{hero?.name}</span>
          </ProfileTitle>

          <Tabs>
            <ProfileTabList>
              <ProfileTabItem data-cy="Visão Geral">Visão Geral</ProfileTabItem>
              <ProfileTabItem data-cy="Comics">Comics</ProfileTabItem>
              <ProfileTabItem data-cy="Events">Events</ProfileTabItem>
              <ProfileTabItem data-cy="Stories">Stories</ProfileTabItem>
              <ProfileTabItem data-cy="Authors" onClick={fetchCreators}>
                Authors
              </ProfileTabItem>
            </ProfileTabList>

            <TabPanel>
              <ProfileInfoBlock>
                {hero?.thumbnail ? (
                  <motion.img
                    src={`${hero.thumbnail.path}/${IMAGE_SIZES.standard_medium}.${hero.thumbnail.extension}`}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      width: '5.625rem',
                      height: '5.625rem',
                      borderRadius: '50%',
                    }}
                  ></motion.img>
                ) : (
                  <img
                    src=""
                    alt=""
                    style={{
                      width: '5.625rem',
                      height: '5.625rem',
                      borderRadius: '50%',
                      background: '#ddd',
                    }}
                  />
                )}

                <ProfileInfoBlockContent>
                  <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {hero?.name}
                  </motion.h3>

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {hero?.description ||
                      'Não há descrição disponível no momento.'}
                  </motion.p>
                </ProfileInfoBlockContent>
              </ProfileInfoBlock>
            </TabPanel>

            <TabPanel>
              {hero?.comics && (
                <ProfileInfoList>
                  {hero.comics.items.map((item: object, index: number) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {item.name}
                      </motion.li>
                    )
                  })}
                </ProfileInfoList>
              )}
            </TabPanel>

            <TabPanel>
              {hero?.events?.items.length ? (
                <ProfileInfoList>
                  {hero.events.items.map((item: object, index: number) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {item.name}
                      </motion.li>
                    )
                  })}
                </ProfileInfoList>
              ) : (
                <p>Not applicable</p>
              )}
            </TabPanel>

            <TabPanel>
              {hero?.stories?.items.length ? (
                <ProfileInfoList>
                  {hero.stories.items.map((item: object, index: number) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {item.name}
                      </motion.li>
                    )
                  })}
                </ProfileInfoList>
              ) : (
                <p>Not applicable</p>
              )}
            </TabPanel>

            <TabPanel>
              {creators && (
                <ProfileInfoList>
                  {creators.map((item, index) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {item.name}
                      </motion.li>
                    )
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
