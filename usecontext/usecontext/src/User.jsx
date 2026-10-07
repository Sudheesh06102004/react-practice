import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const User = () => {
    const theme = useContext(ThemeContext)
    const userstyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
    }

  return (
    <div style={userstyle}>
        <h1 style={{ color: userstyle.color }}>User Component</h1>
    </div>
  )
}

export default User