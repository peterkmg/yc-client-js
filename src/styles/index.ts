import type { App } from 'vue'
import { message } from 'ant-design-vue'

import 'modern-normalize/modern-normalize.css'
import 'nprogress/nprogress.css'
import 'virtual:windi.css'
import './vendor/antdv.less'

import './classes.less'

export default (app: App) => {
  app.config.globalProperties.$message = message
}
