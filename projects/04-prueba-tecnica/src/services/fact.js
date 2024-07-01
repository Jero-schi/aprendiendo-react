const URL_FACT_CAT = 'https://catfact.ninja/fact'

export const randomFact = async () => {
  const res = await fetch(URL_FACT_CAT)
  const data = await res.json()
  const { fact } = data
  return fact
}
