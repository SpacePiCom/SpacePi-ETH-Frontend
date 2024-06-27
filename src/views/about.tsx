import { Button } from '@/components/button'
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { P166, TextContainerBox, W1400 } from '@/styles'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

export const AboutBox = styled.div`
  display: grid;
  height: min-content;
  gap: 36px;
  justify-items: center;
  ${TextContainerBox} {
    ${TitleBox},${TextBox} {
      text-align: center !important;
    }
  }
`

export default function About() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <AboutBox>
          <TextContainerBox>
            <TitleBox>{t('about.title')}</TitleBox>
            <TextBox>{t('about.text')}</TextBox>
          </TextContainerBox>
          <a href={t('about.bnt.url')} target="_blank">
            <Button style={{ width: 'auto' }}>{t('about.bnt.title')} </Button>
          </a>
        </AboutBox>
      </P166>
    </W1400>
  )
}
