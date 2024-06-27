// @ts-nocheck
import { TitleBox } from '@/components/title'
import { P166, TextContainerBox, W1400 } from '@/styles'
import styled from 'styled-components'
import ExchangeRegistrationConfig from '@/configs/exchangeRegistration'
import { TextBox } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { QuarkBox } from './quark'
import { CardBox } from '@/components/card'

export const ExchangeRegistrationBox = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 26px;
  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`

export const LinkItme = styled(TextBox)`
  color: #42a4ff !important;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
  &:hover {
    text-decoration-line: underline;
    text-transform: uppercase;
  }
`

export default function ExchangeRegistration() {
  const { t } = useTranslation()
  return (
    <W1400>
      <P166>
        <CardBox>
          <TextContainerBox>
            <TitleBox>
              {t('exchangeRegistration.title', { returnObjects: true })[0]}
              <span className="pi-color">
                {t('exchangeRegistration.title', { returnObjects: true })[1]}
              </span>
            </TitleBox>
            <ExchangeRegistrationBox>
              {ExchangeRegistrationConfig.map((item, index) => (
                <a key={index} href={item.url} target="_blank">
                  <LinkItme>{item.name}</LinkItme>
                </a>
              ))}
            </ExchangeRegistrationBox>
          </TextContainerBox>
        </CardBox>
      </P166>
    </W1400>
  )
}
