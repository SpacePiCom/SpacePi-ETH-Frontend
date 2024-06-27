// @ts-nocheck
import { TextContainerBox, W1400 } from '@/styles'
import styled from 'styled-components'
import { TitleBox } from '../title'
import { TextBox } from '../text'
import { Divider } from 'antd'
import { useTranslation } from 'react-i18next'

export const FooterBox = styled.div`
  background: #1b202b;
  display: grid;
  height: min-content;
  justify-items: center;
  padding: 66px 0 36px 0;
`

export const FooterContainerBox = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 36px;
  @media screen and (max-width: 1200px) {
    display: grid;
  }
`

export const FooterItemBox = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  @media screen and (max-width: 1200px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

export const FooterCopyrightBox = styled.div`
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: grid;
    height: min-content;
    gap: 16px;
    justify-items: center;
    justify-content: center;
    .f1 {
      order: 1;
    }
    .f2 {
      order: 0;
    }
  }
`

export const FooterCopyrightsBox = styled.div`
  display: flex;
  gap: 16px;
  height: min-content;
  align-items: center;
`

export default function Footer() {
  const { t } = useTranslation()
  return (
    <FooterBox>
      <W1400>
        <FooterContainerBox>
          <FooterItemBox>
            <TextContainerBox>
              <span className="title">
                SPACE<span className="title eth-color">PI</span>
              </span>
              <TextBox style={{ fontSize: 14, color: '#fff' }}>
                {t('footer.text')}
              </TextBox>
            </TextContainerBox>
          </FooterItemBox>
          {t('footer.data', { returnObjects: true }).map((item, index) => (
            <FooterItemBox key={index}>
              <TextContainerBox>
                <TextBox style={{ fontSize: 14, color: '#fff' }}>
                  {item.title}
                </TextBox>
                {/* <TextBox style={{ fontSize: 14 }}>Quark⚛️ (@ARC20_QUARK)</TextBox> */}
                {item.data.map((e, i) => (
                  <a key={i} href={e.url} target="_blank">
                    <TextBox style={{ fontSize: 14 }}>{e.title}</TextBox>
                  </a>
                ))}
              </TextContainerBox>
            </FooterItemBox>
          ))}

          <Divider style={{ margin: 0, opacity: 0.4 }} />
          <FooterCopyrightBox>
            <TextBox style={{ fontSize: 13 }} className="f1">
              {t('footer.copyrightText')}
            </TextBox>
            <FooterCopyrightsBox className="f2">
              {t('footer.links', { returnObjects: true }).map((item, index) => (
                <a key={index} href={item.url} target="_blank">
                  <TextBox style={{ fontSize: 13, color: '#fff' }}>
                    {item.title}
                  </TextBox>
                </a>
              ))}
            </FooterCopyrightsBox>
          </FooterCopyrightBox>
        </FooterContainerBox>
      </W1400>
    </FooterBox>
  )
}
