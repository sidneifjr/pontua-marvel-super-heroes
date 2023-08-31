export interface IFormData {
  hero: string
}

export interface ISearchFormData {
  search: string
}

export interface IHero {
  comics: {
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

  description: string

  events: {
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

  id: number | string
  modified: string
  name: string
  resourceURI: string

  series: {
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

  stories: {
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
