import Routers from '@/routers'
import { Layout } from 'antd'
import styled from 'styled-components'
import Header from '@/components/header'

export const LayoutBox = styled(Layout)``

export default function App() {
  return (
    <LayoutBox>
      <Header />
      <Routers />
    </LayoutBox>
  )
}
