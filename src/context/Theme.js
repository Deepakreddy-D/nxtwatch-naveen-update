import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  addSavedVideos: () => {},
  onChangeTheme: () => {},
  activeTab: () => {},
})

export default AppTheme
