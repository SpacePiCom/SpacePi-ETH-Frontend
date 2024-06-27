// @ts-nocheck
import { CardBox } from '@/components/card'
import { TextBox } from '@/components/text'
import { P166, TextContainerBox, W1400 } from '@/styles'
import { Image } from 'antd'
import styled from 'styled-components'
import { TitleBox } from '@/components/title'
import { useTranslation } from 'react-i18next'

export const TelegramBox = styled.div`
  display: grid;
  gap: 36px;
  height: min-content;
`

export const TelegramContainerBox = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 36px;
  a {
    flex: 0 0 140px;
    max-width: 140px;
    height: 140px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 16px;
    height: min-content;
  }
`

export const TelegramItemBox = styled(CardBox)`
  justify-items: center;
  gap: 6px;
  padding: 26px;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
  .telegram-image {
    width: 46px;
    height: 46px;
    @media screen and (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`

export default function Telegram() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <TelegramBox>
          <TextContainerBox>
            <TitleBox>{t('telegram.title')}</TitleBox>
            <TextBox>{t('telegram.text')}</TextBox>
          </TextContainerBox>
          <TelegramContainerBox>
            {t('telegram.data', { returnObjects: true }).map((item, index) => (
              <a key={index} href={item.url} target="_blank">
                <TelegramItemBox>
                  <Image
                    src={item.image}
                    className="telegram-image"
                    preview={false}
                  />
                  <TextBox style={{ color: '#fff', fontSize: 14 }}>
                    {item.title}
                  </TextBox>
                </TelegramItemBox>
              </a>
            ))}
          </TelegramContainerBox>
        </TelegramBox>
      </P166>
    </W1400>
  )
}
