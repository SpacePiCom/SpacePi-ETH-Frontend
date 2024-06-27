import { lazy } from 'react'

// Route configuration: path (URL path), element (rendered component)
export const config = [
  {
    path: '/',
    element: lazy(() => import('@/views'))
  }
]
