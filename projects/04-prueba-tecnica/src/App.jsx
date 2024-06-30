import { useEffect, useState } from 'react'
import './App.css'

const URL_FACT_CAT = 'https://catfact.ninja/fact'
const URL_IMG_CAT = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(URL_FACT_CAT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const newWord = fact.split(' ', 1)
    console.log(newWord)

    fetch(URL_IMG_CAT + newWord)
      // .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} />}
    </main>
  )
}
