import { useState, useEffect } from 'react'
const URL_IMG_CAT = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imgUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const newWord = fact.split(' ', 1)

    fetch(URL_IMG_CAT + newWord)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imgUrl }
}
