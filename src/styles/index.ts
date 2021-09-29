import type { App } from 'vue'
import { message } from 'ant-design-vue/es'

import 'modern-normalize/modern-normalize.css'
import 'nprogress/nprogress.css'
import 'virtual:windi.css'
import './fonts.less'
import 'ant-design-vue/es/message/style/index.less'
import './vendor/antdv.less'

import './global.less'

export default (app: App) => {
  app.config.globalProperties.$message = message
}
