// @ts-nocheck
import { CardBox } from '@/components/card'
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { P166, TextContainerBox, W1400 } from '@/styles'
import { Image } from 'antd'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

export const Arc20Box = styled.div`
  display: grid;
  height: min-content;
  gap: 36px;
`

export const Arc20ContainerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: min-content;
  gap: 36px;
  @media screen and (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Arc20Item = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-auto-columns: 1fr auto;
  .arc-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center center;
    border-radius: 100% 100% 100% 100%;
  }
`

export default function Arc20() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <Arc20Box>
          <TextContainerBox>
            <TitleBox>
              {t('opinions.title', { returnObjects: true })[0]}
              <label className="pi-color">
                {t('opinions.title', { returnObjects: true })[1]}
              </label>
            </TitleBox>
            <TextBox>{t('opinions.text')}</TextBox>
          </TextContainerBox>
          <Arc20ContainerBox>
            {t('opinions.data', { returnObjects: true }).map((item, index) => (
              <CardBox key={index}>
                <TextBox>{item.text}</TextBox>
                <Arc20Item>
                  <TextContainerBox style={{ gap: 0 }}>
                    <TitleBox style={{ fontSize: 20 }}>
                      {item.user.name}
                    </TitleBox>
                    <TextBox style={{ fontSize: 14 }}>
                      {item.user.account}
                    </TextBox>
                  </TextContainerBox>
                  <Image
                    src={item.user.image}
                    preview={false}
                    className="arc-image"
                  />
                </Arc20Item>
              </CardBox>
            ))}
          </Arc20ContainerBox>
        </Arc20Box>
      </P166>
    </W1400>
  )
}
