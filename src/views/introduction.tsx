// @ts-nocheck
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { W1400, P166, TextContainerBox } from '@/styles'
import { Image } from 'antd'
import styled from 'styled-components'
import IntroductionPng from '@/assets/introduction.png'
import { useTranslation } from 'react-i18next'

export const IntroductionBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: min-content;
  align-items: center;
  grid-auto-columns: 1fr 1fr;
  gap: 66px;
  @media screen and (max-width: 768px) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr 1fr;
  }
`

export default function Introduction() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <IntroductionBox>
          <Image src={IntroductionPng} preview={false} data-aos="zoom-in-right" />
          <TextContainerBox data-aos="zoom-in-left">
            <TitleBox>
              {t('introduction.title', { returnObjects: true })[0]}
              <span className="pi-color">
                {t('introduction.title', { returnObjects: true })[1]}
              </span>
            </TitleBox>
            <TextBox>{t('introduction.text')}</TextBox>
          </TextContainerBox>
        </IntroductionBox>
      </P166>
    </W1400>
  )
}
