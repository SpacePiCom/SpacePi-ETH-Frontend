import { W1400, P166 } from '@/styles'
import styled from 'styled-components'
import { Divider } from 'antd'
import { TextBox } from '@/components/text'
import { Button } from '@/components/button'
import { TitleBox } from '@/components/title'
import Exchanges from '@/views/introduction'
import Quark from './quark'
import Explosion from './explosion'
import Book from './book'
import Arc20 from './arc20'
import About from './about'
import BgMp4 from '@/assets/bg.mp4'
import ReactPlayer from 'react-player'
import Advertise from './advertise'
import Lottie from 'lottie-react'
import { ellipsisMiddle } from '@/utils'
import contractAddress from '@/configs/contractAddress'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import api from '@/api'
import { ethers } from 'ethers'
import ERC20 from '@/web3/ERC20'
import Telegram from './telegram'
import Icon from '@/components/icon'
import ExchangeRegistration from './exchangeRegistration'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Skeleton } from 'antd'
import jsonType from '@/assets/rocket'
import BigNumber from 'bignumber.js'
import { Multicall } from 'ethereum-multicall'

export const IndexBox = styled.div`
  display: grid;
  height: min-content;
  justify-items: center;
  padding: 86px 0;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 36px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1400px) {
    padding: 36px 0;
  }
  .pi {
    font-family: EDIX !important;
  }
`
export const HomeBgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  margin-top: -46px;
  opacity: 0.5;
  height: 100vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const HomeBox = styled.div`
  display: grid;
  height: min-content;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 1fr;
  align-items: center;
  margin-top: 66px;
  .title {
    font-size: 75px;
    font-weight: 800;
    line-height: 1.2em;
    letter-spacing: 0px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-auto-flow: row;
  }
  .SpacepiEthRocketGif {
    position: relative;
    height: 100%;
    @media screen and (max-width: 768px) {
      height: 300px;
      margin-top: -166px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 600px;
      margin-top: -256px;
    }
    div {
      position: absolute;
      right: -26px;
      bottom: -86px;
      width: 700px;
      @media screen and (max-width: 1024px) {
        width: 100%;
        right: 0;
        bottom: auto;
      }
      @media screen and (min-width: 1024px) and (max-width: 1200px) {
        width: 600px;
        right: 0;
        bottom: auto;
      }
    }
  }
`
export const HomeContainerBox = styled.div`
  display: grid;
  height: min-content;
  gap: 16px;
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
`
export const HomeText = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #336bfe;
  width: fit-content;
`
export const HomeTitle = styled.div`
  color: #ffffff;
  font-size: 60px;
  font-weight: 800;
  line-height: 1.36em;
  letter-spacing: 0px;
  font-family: Space-Grotesk, Sans-serif !important;
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const TotalBox = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  padding: 36px 0;
  @media screen and (max-width: 1400px) {
    display: grid;
    height: min-content;
    gap: 6px;
    .ant-divider {
      display: none;
    }
  }
`
export const TotalItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: min-content;
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
  ${TitleBox},${TextBox} {
    white-space: nowrap;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
  }
  ${TitleBox} {
    font-size: 34px;
    font-family: auto !important;
    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }
`
export const Bg0Box = styled.div`
  z-index: 1;
`

export const HomeBntBox = styled.div`
  width: min-content;
  display: grid;
  gap: 16px;
  height: min-content;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: auto;
    gap: 16px;
    .shadow__btn {
      max-width: 100%;
      min-width: 100%;
    }
  }
`

export const AddressContainerBox = styled.div`
  padding: 0 16px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  height: -webkit-fill-available;
  gap: 16px;
  grid-auto-columns: 1fr auto auto;
  z-index: 4;
  .text {
    color: #3767c8;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .divider {
    /* border-inline-start: 1px solid #2a4b8d; */
    border-left: 1px solid #2a4b8d;
  }
  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`
export const AddressBox = (props: { text: string }) => {
  const { text } = props
  const AddressSvgBox = styled.svg`
    width: min-content;
    height: 50px;
  `
  const [status, setStatus] = useState(false)
  return (
    <AddressSvgBox
      viewBox="0 0 630 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_269_89)">
        <rect width="99%" height="95" rx="16" fill="black" fillOpacity="0.3" />
        <rect
          x="1"
          y="1"
          width="99%"
          height="95"
          rx="15"
          stroke="url(#paint0_linear_269_89)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_269_89"
          x="0"
          y="0"
          width="100%"
          height="100"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_269_89"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_269_89"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_269_89"
          x1="0"
          y1="50"
          x2="100%"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#326BFE" />
          <stop offset="1" stopColor="#0FB8FD" />
        </linearGradient>
      </defs>
      <foreignObject x="0" y="0" width="99%" height="100">
        <AddressContainerBox>
          <span className="text">{ellipsisMiddle(text, 14, 14)}</span>
          <Divider
            type="vertical"
            style={{ height: '3em' }}
            className="divider"
          />

          <CopyToClipboard
            text={text}
            onCopy={() => {
              setStatus(true)
              setTimeout(() => setStatus(false), 1000)
            }}
          >
            {status ?
              <Icon name="success" />
            : <Icon name="copy" />}
          </CopyToClipboard>
        </AddressContainerBox>
      </foreignObject>
    </AddressSvgBox>
  )
}

export default function Index() {
  const RocketJson = jsonType()
  const { t } = useTranslation()
  const { token } = api
  const [holder, setHolder] = useState('')
  const [rate, setRate] = useState('')
  const [circula, setCircula] = useState('')
  const [totalStatus, setTotalStatus] = useState(true)
  const [mCap, setMCap] = useState('')
  const formatRate = (rate: string, fixed = 0) => {
    let result = ''
    if (rate.indexOf('e-') > -1) {
      let [value, decimal] = rate.split('e-')
      if (value.indexOf('.') > -1) {
        let [main, remain] = value.split('.')
        remain = remain.substring(0, fixed)
        result = '0.0' + `{${Number(decimal) - 1}}` + main + remain
      }
    }
    return result
  }
  const getFullNum = (num: number) => {

    if (isNaN(num)) {
      return num
    }

    var str = '' + num
    if (!/e/i.test(str)) {
      return num
    }
    return num.toFixed(18).replace(/\.?0+$/, '')
  }
  getFullNum(8.1e-7) // 0.00000081
  const formatToken = (totalSupply: any) => {
    return (totalSupply / 1e9).toFixed(2) + ' B' 
  }
  const getCirculation = async () => {
    // let provider = ethers.getDefaultProvider()
    const multicall = new Multicall({
      nodeUrl: 'https://rpc.mevblocker.io',
      tryAggregate: true
    })

    const multicallData = {
      reference: contractAddress,
      contractAddress,
      abi: ERC20,
      calls: [
        {
          reference: `totalSupply`,
          methodName: 'totalSupply',
          methodParameters: []
        },
        {
          reference: `balanceOf`,
          methodName: 'balanceOf',
          methodParameters: ['0x000000000000000000000000000000000000dEaD']
        },
        {
          reference: `decimals`,
          methodName: 'decimals',
          methodParameters: []
        }
      ]
    }
    const { results } = await multicall.call(multicallData)
    const obj: any = {}
    Object.values(results).map((item: any) => {
      item.callsReturnContext.map((child: any) => {
        const returnValue = child.returnValues[0]
        if (typeof returnValue === 'object') {
          obj[child.reference] = ethers.BigNumber.from(returnValue)
          return
        }
        obj[child.reference] = returnValue
      })
    })

    let value = obj.totalSupply.sub(obj.balanceOf)
    return value.div(ethers.BigNumber.from('10').pow(obj.decimals)).toNumber()
  }
  const init = async () => {
    setCircula(formatToken('0'))
    setHolder('0')
    setRate(formatRate(String(0), 3))
    setMCap('0M')
    const result = await token.tokenInfoAPI(
      '0x69b14e8d3cebfdd8196bfe530954a0c226e5008e',
      'freekey'
    )
    const { holdersCount, price } = result

    const marketPrice =
      BigNumber(getFullNum(price.rate))
        .times(await getCirculation())
        .div(BigNumber('1000000'))
        .toFixed(2) + 'M'

    const rate = formatRate(String(price.rate), 3)
    setCircula(formatToken(await getCirculation()))
    setHolder(holdersCount)
    setRate(rate)

    setMCap(marketPrice)
    setTimeout(() => setTotalStatus(false), 1000)
  }
  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    const videoElement = document.querySelector('video')

    const onVideoLoaded = () => {
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
      videoElement?.dispatchEvent(event)
    }

    videoElement?.addEventListener('loadeddata', () => {
      onVideoLoaded()
    })

    document.addEventListener('DOMContentLoaded', () => {
      videoElement?.play()
    })
  }, [])
  return (
    <>
      <IndexBox style={{ marginTop: '3em' }}>
        <W1400 style={{ zIndex: 1 }}>
          <P166>
            <HomeBox>
              <HomeContainerBox style={{ zIndex: 1 }}>
                <span className="title" data-aos="fade-right">
                  SPACE<span className="title eth-color">PI</span>
                </span>
                <HomeTitle data-aos="zoom-in-right" className="pi-color">
                  {t('home.title')}
                </HomeTitle>
                <div data-aos="zoom-in-right">
                  <AddressBox text={contractAddress} />
                </div>

                <TextBox data-aos="zoom-in-right">{t('home.text')}</TextBox>
                <HomeBntBox>
                  <a
                    href={t('home.bnt1.url')}
                    target="_blank"
                    data-aos="zoom-in-right"
                  >
                    <Button>{t('home.bnt1.title')}</Button>
                  </a>
                  <a
                    href={t('home.bnt2.url')}
                    target="_blank"
                    data-aos="zoom-in-right"
                  >
                    <Button type="border">{t('home.bnt2.title')}</Button>
                  </a>
                  <a
                    href={t('home.crossChainUrl')}
                    target="_blank"
                    data-aos="zoom-in-right"
                  >
                    <Button type="border" data-aos="zoom-in-right">
                      {t('home.crossChain')}
                    </Button>
                  </a>
                </HomeBntBox>

                <TotalBox data-aos="zoom-in-up">
                  <TotalItemBox>
                    <TitleBox style={{ display: totalStatus ? 'none' : '' }}>
                      {circula}
                    </TitleBox>
                    <Skeleton.Input
                      active
                      style={{ display: totalStatus ? '' : 'none' }}
                    />
                    <TextBox style={{ fontSize: 14 }}>
                      {t('home.totalCirculation')}
                    </TextBox>
                  </TotalItemBox>
                  <Divider type="vertical" style={{ height: '2em' }} />
                  <TotalItemBox>
                    <TitleBox style={{ display: totalStatus ? 'none' : '' }}>
                      {holder}
                    </TitleBox>
                    <Skeleton.Input
                      active
                      style={{ display: totalStatus ? '' : 'none' }}
                    />
                    <TextBox style={{ fontSize: 14 }}>
                      {t('home.numberOfHolders')}
                    </TextBox>
                  </TotalItemBox>
                  <Divider type="vertical" style={{ height: '2em' }} />
                  <TotalItemBox>
                    <TitleBox style={{ display: totalStatus ? 'none' : '' }}>
                      ${rate}
                    </TitleBox>
                    <Skeleton.Input
                      active
                      style={{ display: totalStatus ? '' : 'none' }}
                    />
                    <TextBox style={{ fontSize: 14 }}>
                      {t('home.currentPrice')}
                    </TextBox>
                  </TotalItemBox>
                  <Divider type="vertical" style={{ height: '2em' }} />
                  <TotalItemBox>
                    <TitleBox style={{ display: totalStatus ? 'none' : '' }}>
                      {mCap}
                    </TitleBox>
                    <Skeleton.Input
                      active
                      style={{ display: totalStatus ? '' : 'none' }}
                    />
                    <TextBox style={{ fontSize: 14 }}>
                      {t('home.totalMarketCap')}
                    </TextBox>
                  </TotalItemBox>
                </TotalBox>
              </HomeContainerBox>
              <div className="SpacepiEthRocketGif">
                <Lottie animationData={RocketJson} />
              </div>
            </HomeBox>
          </P166>
        </W1400>
        <HomeBgBox>
          <ReactPlayer
            url={BgMp4}
            loop
            playing
            width="100%"
            height="100%"
            muted
            playsinline
          />
        </HomeBgBox>
      </IndexBox>
      <Bg0Box>
        <IndexBox data-aos="zoom-in-up">
          <Advertise />
        </IndexBox>
        <IndexBox data-aos="zoom-in-up">
          <ExchangeRegistration />
        </IndexBox>
        <IndexBox>
          <Exchanges />
        </IndexBox>
        <IndexBox data-aos="zoom-in-up">
          <Quark />
        </IndexBox>
        <IndexBox>
          <Explosion />
        </IndexBox>
        <IndexBox data-aos="zoom-in-up">
          <Book />
        </IndexBox>
        <IndexBox data-aos="zoom-in-up">
          <Arc20 />
        </IndexBox>
        <IndexBox data-aos="zoom-in-up">
          <Telegram />
        </IndexBox>
        <IndexBox data-aos="zoom-in-up">
          <About />
        </IndexBox>
      </Bg0Box>
    </>
  )
}
