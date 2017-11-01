import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
  border: 1px solid ${props => (props.color ? props.color : '#eee')} ;
  display: inline-block;
  padding: 5px;
  margin:5px
`

const Title = styled.div`
  font-size:0.8em;
  color: #666;
`

const Name = styled.div`
  font-size: 1em;
  font-weight: bold
`

const Champions = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row wrap;
  justify-content: center;
`

const ChampionList = ({ champions }) => {
  if (!champions.length) return <h1>Couldn't find champion with that name</h1>

  const championList = champions.map(champion => {
    return (
      <Info key={champion.id}>
        <Name>{champion.name}</Name> <Title>{champion.title}</Title>
      </Info>
    )
  })
  return <Champions>{championList}</Champions>
}

export default ChampionList
