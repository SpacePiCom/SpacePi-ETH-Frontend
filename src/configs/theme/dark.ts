import { type ConfigProviderProps, theme } from 'antd'
export default {
  algorithm: [theme.darkAlgorithm],
  components: {
    Layout: {
      headerBg: 'rgba(0, 0, 0, 0.6)',
      headerPadding: '0 1rem',
      footerPadding: '1rem',
      headerHeight: '6rem',
      siderBg: 'rgba(255,255,255,0)'
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    },
    Spin: {
      contentHeight: '100vh'
    },
    Divider: {
      verticalMarginInline: 0
    },
  },
  token: {
    colorSplit: 'rgba(191,192,194,0.2)'
  }
} as ConfigProviderProps | any
