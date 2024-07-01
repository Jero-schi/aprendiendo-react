import { useEffect, useState } from 'react'
import { randomFact } from './services/fact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    randomFact().then(setFact)
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = () => {
    const newFact = randomFact()
    refreshFact(newFact)
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} />}
    </main>
  )
}
