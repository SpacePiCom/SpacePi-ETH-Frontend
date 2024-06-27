import { P166, W1400 } from '@/styles'
import styled from 'styled-components'
import AdvertiseList from '@/configs/advertise'
import { Image } from 'antd'
import { Button } from '@/components/button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AdvertisesBox = styled.div`
  display: grid;
  height: min-content;
  gap: 36px;
  justify-items: center;
`

export const AdvertiseBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: min-content;
  gap: 36px;
  align-items: center;
  justify-items: flex-start;
  img {
    height: 2.6rem !important;
    object-fit: contain;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
    /* margin-top: -166px; */
  }
  @media screen and (min-width: 526px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    margin-top: 26vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 36px;
    /* margin-top: 166px; */
  }
`

export default function Advertise() {
  const { t } = useTranslation()

  const [m, setM] = useState(false)
  const [row, setRow] = useState<number>(12)

  const isRow = () => {
    window.innerWidth < 768 ? setRow(8) : setRow(12)
    setM(window.innerWidth < 768)
  }

  useEffect(() => {
    isRow()
    window.addEventListener('resize', isRow)
    return () => {
      window.removeEventListener('resize', isRow)
    }
  }, [])
  return (
    <W1400>
      <P166>
        <AdvertisesBox>
          <AdvertiseBox>
            {AdvertiseList.slice(0, row).map((item, index) => (
              <a
                href={item.url}
                target={'_blank'}
                key={index}
                style={{
                  opacity: item.status ? 1 : 0.5
                }}
              >
                <Image src={item.image} preview={false} />
              </a>
            ))}
          </AdvertiseBox>
          {AdvertiseList.length > row ?
            <Button onClick={() => setRow((itme) => (itme += itme))}>
              {t('home.clickToLoadMore')}
            </Button>
          : <Button onClick={() => setRow(m ? 8 : 12)}>
              {t('home.shrink')}
            </Button>
          }
        </AdvertisesBox>
      </P166>
    </W1400>
  )
}
