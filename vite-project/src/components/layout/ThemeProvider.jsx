"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../../theme';

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
});

export function ThemeProvider({ children, defaultTheme = "light", storageKey = "vite-ui-theme" }) {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem(storageKey)
      return storedTheme || defaultTheme
    } catch (error) {
      console.error('Error reading theme from localStorage:', error)
      return defaultTheme
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, theme)
    } catch (error) {
      console.error('Error saving theme to localStorage:', error)
    }
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (newTheme) => {
      console.log('Setting new theme:', newTheme)
      setTheme(newTheme)
    },
  }

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

