import '@/i18n'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from '@/App'
import store from '@/stores/store'
import Themes from '@/themes'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 0,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom'
})
AOS.refresh()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Themes>
        <App />
      </Themes>
    </Provider>
  </BrowserRouter>
)
