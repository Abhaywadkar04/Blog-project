import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  const [theme, setTheme] = useState('light')

  const lightTheme = () => {
    setTheme('light')
  }

  const darkTheme = () => {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
    <div >
      <div >
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  ) : null
}

export default App
