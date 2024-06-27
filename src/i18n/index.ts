import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import locales from '@/configs/locales'

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: localStorage.getItem('lang') || 'en',
  interpolation: {
    escapeValue: false
  },
  resources: locales
})

export default i18n
