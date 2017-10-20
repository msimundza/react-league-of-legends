import React from 'react'

const ChampionList = ({ champions }) => {
  if (!champions.length) return <h1>Couldn't find champion with that name</h1>

  const championList = champions.map(champion => {
    return (
      <div key={champion.id}>
        <span>{champion.name} - {champion.title}</span>
      </div>
    )
  })
  return <div>{championList}</div>
}

export default ChampionList
