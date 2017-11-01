import config from '../../config'
import React, { Component } from 'react'
import d from '../../mockApiResponses/championsJSON'
import ChampionList from './ChampionList'
import styled from 'styled-components'

const champListApi = `https://eun1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=${config.API_KEY}`
const proxy = `https://cors-anywhere.herokuapp.com/` // Workaround for Riot API not returning CORS allowed header

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  background-color: #eee;
`

class ChampionSearch extends Component {
  constructor () {
    super()
    this.state = {
      championList: [],
      filteredChampionList: [],
      loading: true,
      error: false
    }
    this.filterChampionsOnInput = this.filterChampionsOnInput.bind(this)
  }

  componentDidMount () {
    // fetch(`${proxy}${champListApi}`)
    //   .then(res => {
    //     if (!res.ok) {
    //       throw Error(res.statusText)
    //     }
    //     return res.json()
    //   })
    //   .then(d => {
    //     let championList = Object.values(d.data)
    //     this.setState({
    //       championList: championList,
    //       filteredChampionList: championList,
    //       loading: false
    //     })
    //   })
    //   .catch(err => {
    //     console.log(`Error fetching championlist ${err}`)
    //     this.setState({ championList: [], filteredChampionList: [], loading: false, error: true })
    //   })
    let championList = Object.values(d.data)
    this.setState({
      championList: championList,
      filteredChampionList: championList,
      loading: false
    })
  }

  filterChampionsOnInput (e) {
    const result = this.state.championList.filter(
      c => c.name.toLowerCase().indexOf(e.target.value) > -1
    )
    this.setState({ filteredChampionList: result })
  }

  render () {
    const { loading, error, filteredChampionList } = this.state

    if (error) return <h1>There was an error retrieving champions from the API</h1>

    return loading
      ? <div>Loading...</div>
      : <div>
        <Input type='text' onChange={this.filterChampionsOnInput} />
        <ChampionList champions={filteredChampionList} />
      </div>
  }
}

export default ChampionSearch
