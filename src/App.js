import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Home from './components/Home'
import Context from './Context/context'

import './App.css'

class App extends Component {
  state = {
    tabId: 'home',
    showVaccination: false,
  }

  onChangeHomeTab = () => {
    this.setState({tabId: 'home'})
  }

  onChangeAboutId = () => {
    this.setState({tabId: 'about'})
  }

  render() {
    const {tabId, showVaccination} = this.state

    return (
      <Context.Provider
        value={{
          tabId,
          showVaccination,
          changeHomeId: this.onChangeHomeTab,
          changeAboutId: this.onChangeAboutId,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
