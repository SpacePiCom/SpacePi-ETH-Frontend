import { Button } from '@/components/button'
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { P166, TextContainerBox, W1400 } from '@/styles'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

export const BookBox = styled.div`
  background-color: transparent;
  background-image: linear-gradient(90deg, #336bfe 0%, #0ebafd 100%);
  padding: 60px;
  border-radius: 30px 30px 30px 30px;
  @media screen and (max-width: 768px) {
    padding: 36px 26px;
  }
`

export const BookContainerBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto;
  gap: 66px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    grid-auto-flow: row;
    gap: 16px;
  }
  ${TitleBox} {
    font-size: 36px;
    color: #000;
    line-height: 1.26em;
    @media screen and (max-width: 768px) {
      font-size: 1.26rem;
    }
  }
`

export default function Book() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <BookBox>
          <BookContainerBox>
            <TextContainerBox>
              <TitleBox>
                {t('guidebook.title')}
              </TitleBox>
              <TextBox style={{ color: '#000' }}>{t('guidebook.text')}</TextBox>
            </TextContainerBox>
            <a href={t('guidebook.bnt.url')} target="_blank">
              <Button
                style={{
                  width: 'max-content',
                  background: '#000',
                  color: '#fff'
                }}
              >
                {t('guidebook.bnt.title')}
              </Button>
            </a>
          </BookContainerBox>
        </BookBox>
      </P166>
    </W1400>
  )
}
