import { createAsyncThunk } from '@reduxjs/toolkit'

import { stateType } from '@/stores/type'
import { updateThemesLoading } from '@/themes/store'

// Switch theme
export const switchThemes = createAsyncThunk(
  'themes/switchTheme',
  async (_, { getState, dispatch }) => {
    const { themes } = getState() as stateType
    const { dark } = themes

    try {
      // Check if the current theme is dark mode
      const is = dark ? 'light' : 'dark'
      // Set the theme variable
      document.documentElement.setAttribute('theme', dark ? 'light' : 'dark')
      // Store the theme
      localStorage.setItem('themes', is)
      // Update theme status (with a 1-second delay)
      setTimeout(() => dispatch(updateThemesLoading(false)), 1000)
      // Return the theme variable
      return is
    } catch (error) {
      throw new Error('Error switching theme: ' + error)
    }
  }
)
