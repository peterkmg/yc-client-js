import type { App } from 'vue'
import type { InstallOptions } from 'element-plus/lib/utils/config'

import './default.scss'
import './global.scss'
import './vendor.scss'

export default (app: App) => {
  app.config.globalProperties.$ELEMENT = {
    size: 'medium',
    zIndex: 3000,
  } as InstallOptions
}
