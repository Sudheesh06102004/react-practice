import React from 'react'
import Container from './Container'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext'

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr)=>(curr=== "light"? "dark":"light"));
  }
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Users</button>
      <h1>App Component</h1>
      <Container />
    </ThemeContext.Provider>
  )
}

export default App