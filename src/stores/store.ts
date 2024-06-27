import { configureStore } from '@reduxjs/toolkit'

import themes from '@/themes/store'

export default configureStore({
  reducer: {
    themes
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
