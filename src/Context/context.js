import React from 'react'

const Context = React.createContext({
  tabId: 'home',
  changeHomeId: () => {},
  changeAboutId: () => {},
  showVaccination: false,
})

export default Context
