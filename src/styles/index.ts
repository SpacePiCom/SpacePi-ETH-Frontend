import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    -ms-tap-highlight-color: transparent;
    /* font-family: Fenton-Regular !important; */
    /* font-family: 'Microsoft JhengHei UI'; */
    /* font-weight: 400; */

    /* Scrollbar track */
    &::-webkit-scrollbar-track {
      background-color: #222; /* Scrollbar track background color */
      margin: 6px 0;
    }

    /* Scrollbar */
    &::-webkit-scrollbar {
      width: 6px; /* Scrollbar width */
      background-color: #111; /* Scrollbar background color */
    }

    /* Scrollbar thumb */
    &::-webkit-scrollbar-thumb {
      background-color: rgba(51,107,254,1); /* Thumb background color */
      border-radius: 6px; /* Thumb border radius */
    }
  }

  .ant-collapse-header{
    align-items: center !important;
  }

  a{
    color:#fff !important;
  }

  .pi-color{
    background-image: linear-gradient(90deg, #336bfe 0%, #0ebafd 100%);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .ant-dropdown{
    padding-top: 26px;
    .ant-dropdown-menu{
      min-width: 10rem;
      padding: 12px 8px;
      margin: 0.125rem 0 0;
      background-color: #101C42;
      border-radius: 0 0 8px 8px;
      border-top: 2px solid #336bfe;
      .ant-dropdown-menu-item{
        padding: 12px 22px 12px 22px;
        background-color: #101C42 !important;
      }
    }
  }
  .ant-collapse-content-box{
    display: grid;
    gap: 16px;
    height: min-content;
  }
  .title {
    font-size: 26px;
    font-family: EDIX !important;
    color: #fff;
  }
  .eth-color {
    color: #336bfe;
  }

  .lang{
    .ant-dropdown-menu{
      max-height: 300px;
      height: auto;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
  .ant-app{
    overflow: hidden;
  }
`

export const W1400 = styled.div`
  max-width: 1400px;
  width: -webkit-fill-available;
  padding: 0 16px;
`

export const P166 = styled.div`
  padding: 0 126px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 0 36px;
  }
`

export const TextContainerBox = styled.div`
  display: grid;
  height: min-content;
  gap: 8px;
`
