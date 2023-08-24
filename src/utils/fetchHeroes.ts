import MD5 from 'crypto-js/md5'

const API_KEY = 'f0691ee95c237c571bfa7188f253fdbe'
const PRIVATE_KEY = '33a138311a51fad342fb28576cfb5f62b72b1b3f'

const getHash = (ts: string, secretKey: string, publicKey: string) => {
  return MD5(ts + secretKey + publicKey).toString()
}

export const fetchHeroes = async (param: string, id: string) => {
  let baseUrl

  switch (param) {
    case 'get-heroes':
      baseUrl = 'https://gateway.marvel.com/v1/public/characters'
      break

    case 'get-creators':
      baseUrl = `https://gateway.marvel.com/v1/public/characters/${id}/comics`
      break

    case 'get-species':
      baseUrl = 'https://gateway.marvel.com/v1/public/characters'
      break

    case 'get-powers':
      baseUrl = 'https://gateway.marvel.com/v1/public/characters'
      break

    default:
      break
  }

  const timestamp = Date.now().toString()
  const apiKey = API_KEY
  const privateKey = PRIVATE_KEY
  const hash = getHash(timestamp, privateKey, apiKey)

  const url = `${baseUrl}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${id}`

  // É necessário remover o parâmetro "&nameStartsWith=${id}", pois o mesmo não é suportado para o caso de uso presente em "get-creators".
  const creatorsUrl = `${baseUrl}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`

  // console.log(url)

  if (param === 'get-creators') {
    try {
      const response = await fetch(creatorsUrl)
      const data = await response.json()
      return data
    } catch (err) {
      return err
    }
  } else {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (err) {
      return err
    }
  }
}
