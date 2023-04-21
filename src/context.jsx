import { useContext, createContext, useState, useEffect } from 'react'

const appContext = createContext()

const getInitalDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  console.log(prefersDarkMode)
  return prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitalDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')
  const toggleDarkTheme = () => {
    const newNewDarkTheme = !isDarkTheme
    setIsDarkTheme(newNewDarkTheme)
    // const body = document.querySelector('body')
    // body.classList.toggle('dark-theme', newNewDarkTheme)
    // console.log(body)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <appContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </appContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(appContext)
}
