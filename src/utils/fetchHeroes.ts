import MD5 from 'crypto-js/md5'

const getHash = (ts: string, secretKey: string, publicKey: string) => {
  return MD5(ts + secretKey + publicKey).toString()
}

export const fetchHeroes = async (param: string, id: string) => {
  let baseUrl
  const heroId = id

  const timestamp = Date.now().toString()
  const apiKey = import.meta.env.VITE_MARVEL_API_KEY
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY
  const hash = getHash(timestamp, privateKey, apiKey)

  switch (param) {
    case 'get-heroes':
      baseUrl = 'https://gateway.marvel.com/v1/public/characters'
      break

    case 'get-creators-related-to-hero':
      baseUrl = `https://gateway.marvel.com/v1/public/characters/${heroId}/comics`
      break

    default:
      break
  }

  const url = `${baseUrl}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${heroId}`

  // É necessário remover o parâmetro "&nameStartsWith=${id}", pois o mesmo não é suportado para o caso de uso presente em "get-creators".
  const creatorsUrl = `${baseUrl}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`

  if (param === 'get-creators-related-to-hero') {
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
