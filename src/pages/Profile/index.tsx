import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { TabPanel, Tabs } from 'react-tabs'

import { fetchHeroes } from '../../utils/fetchHeroes'

import { Nav } from '../../components/Nav'

import { Container } from '../../components/Wrapper/styles'

import { motion } from 'framer-motion'
import {
  ProfileInfoBlock,
  ProfileInfoBlockContent,
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
      setHero(desiredHero)
    })
  }, [id])

  const fetchCreators = () => {
    fetchHeroes('get-creators-related-to-hero', hero?.id).then((response) => {
      setCreators(response.data.results[0].creators.items)
    })
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
              <ProfileTabItem data-cy="Teams">Teams</ProfileTabItem>
              <ProfileTabItem data-cy="Powers">Powers</ProfileTabItem>
              <ProfileTabItem data-cy="Species">Species</ProfileTabItem>
              <ProfileTabItem data-cy="Authors" onClick={fetchCreators}>
                Authors
              </ProfileTabItem>
            </ProfileTabList>

            <TabPanel>
              <ProfileInfoBlock>
                {hero?.thumbnail ? (
                  <motion.img
                    src={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
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
              {hero?.series && (
                <ProfileInfoList>
                  {hero.series.items.map((item: {}, index: number) => {
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
              <p>tab 3</p>
            </TabPanel>

            <TabPanel>
              <p>tab 4</p>
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
