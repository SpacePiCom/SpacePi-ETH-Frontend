import { Suspense, useLayoutEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'

import { config } from '@/configs/router'
import Footer from '@/components/footer'

export default function Routers() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <Routes>
      {config.map((itme, index: number) => (
        <Route
          key={index}
          path={itme.path}
          element={
            <Suspense>
              <itme.element />
              <Footer />
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
