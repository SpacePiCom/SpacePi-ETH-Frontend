// @ts-nocheck
import { CardBox } from '@/components/card'
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { P166, TextContainerBox, W1400 } from '@/styles'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Image } from 'antd'
import W1Png from '@/assets/why/1.png'
import W2Png from '@/assets/why/2.png'
import W3Png from '@/assets/why/3.png'
import W4Png from '@/assets/why/4.png'
import W5Png from '@/assets/why/5.png'
import W6Png from '@/assets/why/6.png'

export const QuarkBox = styled.div`
  display: grid;
  gap: 36px;
  justify-items: center;
  height: min-content;
  background-color: #1b202b;
  border-radius: 30px;
  padding: 36px;
  @media screen and (max-width: 768px) {
    padding: 26px;
  }
  ${TextContainerBox} {
    text-align: center;
  }
`

export const QuarkContainerBox = styled.div`
  width: -webkit-fill-available;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 26px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default function Quark() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <QuarkBox>
          <TextContainerBox>
            <TitleBox>
              {t('why.title', { returnObjects: true })[0]}
              <span className="pi-color">
                {t('why.title', { returnObjects: true })[1]}
              </span>
            </TitleBox>
            <TextBox>{t('why.text')}</TextBox>
          </TextContainerBox>
          <QuarkContainerBox>
            {t('why.data', { returnObjects: true }).map((item, index) => (
              <CardBox key={index}>
                <Image
                  preview={false}
                  src={
                    item.image ||
                    (index === 0 && W1Png) ||
                    (index === 1 && W2Png) ||
                    (index === 2 && W3Png) ||
                    (index === 3 && W4Png) ||
                    (index === 4 && W5Png) ||
                    (index === 5 && W6Png)
                  }
                  className="icon"
                />
                <TitleBox style={{ fontSize: 20 }}>{item.title}</TitleBox>
                <TextBox style={{ fontSize: 14 }}>{item.text}</TextBox>
              </CardBox>
            ))}
          </QuarkContainerBox>
        </QuarkBox>
      </P166>
    </W1400>
  )
}
