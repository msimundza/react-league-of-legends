// import config from './config'
import React, { Component } from 'react'
import d from '../../mockApiResponses/championsJSON'
import Input from './Input'
import ChampionList from './ChampionList'

// const champListApi = `https://eun1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=${config.API_KEY}`

class ChampionSearch extends Component {
  constructor () {
    super()
    this.state = {
      championList: [],
      loading: true,
      error: false
    }
  }
  componentDidMount () {
    // fetch(champListApi)
    //   .then(res => {
    //     if (!res.ok) {
    //       throw Error(res.statusText)
    //     }
    //     return res.json()
    //   })
    //   .then(d => {
    //     let championList = d.data
    //     championList = Object.keys(championList).map(key => {
    //       return (
    //         <div key={championList[key].id}>
    //           <span>{championList[key].name}</span>
    //         </div>
    //       )
    //     })
    //     this.setState({ championList: championList, loading: false })
    //   })
    //   .catch(err => console.log('Error fetching championlist ', err))

    let championList = d.data
    championList = Object.keys(championList).map(key => {
      return (
        <div key={championList[key].id}>
          <span>{championList[key].name}</span>
        </div>
      )
    })
    this.setState({ championList: championList, loading: false })
  }
  render () {
    // return this.state.loading
    //   ? <div>Loading...</div>
    //   : <div className='ChampionSearch'>
    //     <div>{this.state.championList}</div>
    //   </div>
    return (
      <div>
        <Input />
        <ChampionList />
      </div>
    )
  }
}

export default ChampionSearch
