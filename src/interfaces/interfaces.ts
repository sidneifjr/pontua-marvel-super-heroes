import { ReactNode } from 'react'

export interface IHeroProvider {
  children: ReactNode
}

export interface IFormData {
  hero: string
}

export interface ISearchFormData {
  search: string
}

export interface IHeroProperties {
  available: number
  collectionURI: string

  items: [
    {
      resourceURI: string
      name: string
    },
  ]

  returned: number
}

export interface IHero {
  comics: IHeroProperties

  description: string

  events: IHeroProperties

  id: number | string
  modified: string
  name: string
  resourceURI: string

  series: IHeroProperties

  stories: IHeroProperties

  thumbnail: {
    extension: string
    path: string
  }

  urls: [
    {
      type: string
      url: string
    },
  ]
}
