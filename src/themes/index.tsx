import { HappyProvider } from '@ant-design/happy-work-theme'
import { ConfigProvider, App, FloatButton } from 'antd'
import { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import darks from '@/configs/theme/dark'
import lights from '@/configs/theme/light'
import { useStoreSelector } from '@/stores'
import { GlobalStyle } from '@/styles'
import type { themesPropsType } from '@/themes/type'

import 'virtual:svg-icons-register'

export default function Themes(props: themesPropsType) {
  const { children } = props
  const { dark } = useStoreSelector((state) => state.themes)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeProvider theme={{ dark, antdTheme: dark ? darks : lights }}>
      <GlobalStyle />
      <HappyProvider>
        <ConfigProvider virtual theme={darks}>
          <App>
            <FloatButton.BackTop shape="square" />
            {children}
          </App>
        </ConfigProvider>
      </HappyProvider>
    </ThemeProvider>
  )
}
