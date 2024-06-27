import { createSlice } from '@reduxjs/toolkit'  

import { config as ThemesConfig } from '@/configs/theme'
import { switchThemes } from '@/themes/hooks'   
import type { themesStoreType } from '@/themes/type'

export const store = createSlice({
  name: 'themes',
  initialState: {
    // Dark mode (false): true (dark mode) false (light mode)
    dark: localStorage.getItem('themes') === 'dark' || ThemesConfig.dark,
    // Loading state (false): true (loading) false (loaded)
    loading: false
  } as themesStoreType,
  reducers: {
    // Update theme loading state
    updateThemesLoading(state, action) {
      state.loading = action.payload
    }
  },
  extraReducers: (_builder) => {
    // Switching theme in progress
    _builder.addCase(switchThemes.pending, (state) => {
      state.loading = true
    })
    // Switching theme successful
    _builder.addCase(switchThemes.fulfilled, (state, action) => {
      state.dark = action.payload === 'dark'
    })
    // Switching theme failed
    _builder.addCase(switchThemes.rejected, (state) => {
      state.loading = false
    })
  }
})

// Export Actions method
export const { updateThemesLoading } = store.actions
// Export state variable
export default store.reducer
