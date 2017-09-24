import React, { Component } from 'react'
import './App.css'
import config from './config'

const champListApi = `https://eun1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=${config.API_KEY}`

class App extends Component {
  constructor () {
    super()
    this.state = {
      championList: []
    }
  }
  componentWillMount () {
    fetch(champListApi)
      .then(results => {
        return results.json()
      }).then(data => {
        this.setState({championList: data})
      })
  }
  render () {
    return (
      <div className='App'>
        <div>!!!!!!!!!!!!!!!!!!</div>
        <div>{this.state.championList}</div>
      </div>
    )
  }
}

export default App
