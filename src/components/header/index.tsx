// @ts-nocheck
import styled from 'styled-components'
import { W1400 } from '@/styles'
import Icon from '../icon'
import { Collapse, Dropdown, Space, Checkbox } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import locales from '@/configs/locales'
import { Image } from 'antd'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import { TextBox } from '../text'

export const HeadersDropDownBox = styled.div``

export const HeadersBox = styled.div`
  width: 100%;
  height: auto;
  z-index: 9;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto 1fr auto;
  .container {
    top: 90px;
  }
  .open {
    display: grid;
    justify-content: unset;
    height: calc(100% - 90px);
    grid-auto-rows: 1fr auto;
    align-items: flex-start;
    padding: 16px 0;
    gap: 36px;
    top: 90px;
    justify-items: center;
    width: 100%;
    z-index: 999;
  }
`

export const HeaderBox = styled.div`
  height: 90px;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: -webkit-fill-available;
  background: rgba(0, 0, 0, 0.36);
  backdrop-filter: saturate(180%) blur(8px);
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  transition: all 0.3s ease-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 999;
  .Collapse {
    width: 100%;
  }
`

export const HeaderContainerBox = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 26px;
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto auto auto;
  .more {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    .more {
      display: inline;
    }
    .nav {
      display: none;
    }
  }
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .logo {
    width: 50px;
    height: 50px;
  }
  .title {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const NavBox = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  .ant-space-item {
    font-size: 16px;
    display: flex;
    align-items: center;
  }
`

export const BarIconBox = styled.div`
  .burger {
    position: relative;
    width: 30px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #336bfe;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 30%;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 60%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 90%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 6px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 22px;
    left: 6px;
  }
`

export const LangBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
`

export default function Header() {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
  const [navKey, setNavKey] = useState<number | any>(null)

  const [status, setStatus] = useState<any[]>([])

  const onClosure = () => {
    const more = document.getElementsByClassName('more')[0]
    document.getElementById('burger').checked = open
  }

  useEffect(() => {
    const isOpen = () => {
      window.innerWidth >= 1200 && setOpen(false)
    }
    window.addEventListener('resize', isOpen)

    return () => {
      window.removeEventListener('resize', isOpen)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.overflowX = 'hidden'
    }

    onClosure()
  }, [open])

  return (
    <HeadersDropDownBox>
      <HeadersBox>
        <HeaderBox>
          <W1400>
            <HeaderContainerBox>
              <Link to="/">
                <LogoBox>
                  <Icon name="vite" className="logo" />
                  <span className="title">
                    SPACE<span className="title eth-color">PI</span>
                  </span>
                </LogoBox>
              </Link>

              <NavBox className="nav">
                {t('nav', { returnObjects: true }).map((item, index) => (
                  <Dropdown
                    key={index}
                    placement="bottom"
                    onOpenChange={(e) => {
                      const data = [...t('nav', { returnObjects: true })]
                      setStatus(
                        e ? data.map((e, i) => (index === i ? e : false)) : []
                      )
                    }}
                    menu={{
                      items:
                        item.data.length !== 0 ?
                          item.data.map((item: any, i: number) =>
                            Object.assign({}, item, {
                              key: i,
                              label: (
                                <Link
                                  key={i}
                                  target={item.target}
                                  to={item.url}
                                >
                                  {item.name}
                                </Link>
                              )
                            })
                          )
                        : []
                    }}
                  >
                    <Link
                      onClick={(e) =>
                        item.data.length === 0 ? '' : e.preventDefault()
                      }
                      target={item.target}
                      style={{ color: '#fff' }}
                      to={item.url}
                    >
                      <Space>
                        {item.name}
                        {item.data.length !== 0 && (
                          <DownOutlined
                            style={{
                              width: '0.6rem',
                              height: '0.6rem',
                              transition: 'all .5s ease-in-out',
                              transform: status[index] ? 'rotate(180deg)' : ''
                            }}
                          />
                        )}
                      </Space>
                    </Link>
                  </Dropdown>
                ))}

                <Dropdown
                  overlayClassName="lang"
                  placement="bottom"
                  menu={{
                    items: Object.entries(locales).map(([key, value]) =>
                      Object.assign({}, value, {
                        key: key,
                        label: (
                          <a
                            onClick={() => {
                              i18n.changeLanguage(key)
                              localStorage.setItem('lang', key)
                            }}
                          >
                            {value.name}
                          </a>
                        )
                      })
                    )
                  }}
                >
                  <a>
                    <Space>
                      <Icon name="lang" />
                      {Object.entries(locales).map(
                        ([key, value]) => key === i18n.language && value.name
                      )}
                    </Space>
                  </a>
                </Dropdown>
              </NavBox>
              <BarIconBox className="more">
                <label
                  className="burger"
                  htmlFor="burger"
                  onChange={() => setOpen(!open)}
                >
                  <input value={open} type="checkbox" id="burger" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </BarIconBox>
            </HeaderContainerBox>
          </W1400>
        </HeaderBox>
        <HeaderBox
          className={'container ' + open ? 'open' : ''}
          style={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            border: 'none',
            overflow: open ? 'auto' : 'hidden'
          }}
        >
          <W1400>
            {t('nav', { returnObjects: true }).map((item, index) => {
              return (
                <Collapse
                  key={index}
                  className="Collapse"
                  bordered={false}
                  ghost
                  accordion
                  items={[
                    {
                      key: index,
                      collapsible: item.data.length !== 0 ? 'header' : 'icon',
                      onClick: () => {
                        if (item.data.length !== 0) {
                          setNavKey(index)
                        } else {
                          setNavKey(null)
                        }
                      },
                      label: (
                        <TextBox>
                          <Link to={item.url} target={item.target}>
                            {item.name}
                          </Link>
                        </TextBox>
                      ),
                      children: (
                        <>
                          {item.data.map((e: any, i: number) => (
                            <TextBox key={i}>
                              <Link to={e.url} target={e.target}>
                                {e.name}
                              </Link>
                            </TextBox>
                          ))}
                        </>
                      ),
                      showArrow: item.data.length !== 0
                    }
                  ]}
                />
              )
            })}

            <Collapse
              bordered={false}
              accordion
              ghost
              items={[
                {
                  key: 'lang',
                  collapsible: 'header',
                  label: (
                    <LangBox>
                      <TextBox>
                        <a>
                          {Object.entries(locales).map(
                            ([key, value]) =>
                              key === i18n.language &&
                              value.translation.language
                          )}
                        </a>
                      </TextBox>
                      <TextBox>
                        {Object.entries(locales).map(
                          ([key, value]) => key === i18n.language && value.name
                        )}
                      </TextBox>
                    </LangBox>
                  ),
                  children: (
                    <>
                      {Object.entries(locales).map(([key, value]) => (
                        <TextBox
                          onClick={() => {
                            i18n.changeLanguage(key)
                            localStorage.setItem('lang',key)
                          }}
                          key={key}
                        >
                          <a>{value.name}</a>
                        </TextBox>
                      ))}
                    </>
                  )
                }
              ]}
            />
          </W1400>
        </HeaderBox>
      </HeadersBox>
    </HeadersDropDownBox>
  )
}
