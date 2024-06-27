// @ts-nocheck
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { P166, TextContainerBox, W1400 } from '@/styles'
import { Image } from 'antd'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import SpacepiEthPng from "@/assets/spacepi-eth.png"
import MoonPng from "@/assets/moon.png"

export const ExplosionBox = styled.div`
  display: grid;
  height: min-content;
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 1fr;
  gap: 66px;
  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
  }
`

export default function Explosion() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <ExplosionBox>
          <TextContainerBox data-aos="zoom-in-right">
            <TitleBox>
              {t('explosion.title', { returnObjects: true })[0]}
              <span className="pi-color">
                {t('explosion.title', { returnObjects: true })[1]}
              </span>
            </TitleBox>
            <TextBox>
            {t('explosion.text')}
            </TextBox>
          </TextContainerBox>
          <Image data-aos="zoom-in-left"
            src={MoonPng}
            preview={false}
          />
        </ExplosionBox>
      </P166>
    </W1400>
  )
}
