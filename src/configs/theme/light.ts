import { ConfigProviderProps, theme } from 'antd'
export default {
  algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
  components: {
    Layout: {
      headerBg: '#fff',
      headerPadding: '0 1rem',
      footerPadding: '1rem',
      siderBg: 'rgba(0,0,0,0)'
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    },
    Spin: {
      contentHeight: '100vh'
    }
  },
  token: {}
} as ConfigProviderProps
