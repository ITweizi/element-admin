import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '../styles/element-variables.scss'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

import zhCn from 'element-plus/lib/locale/lang/zh-cn.js'
import en from 'element-plus/lib/locale/lang/en.js'
import store from '@/store/index.js'
export default (app) => {
  // qewrq
  app.use(ElementPlus, { locale: store.getters.language === 'zh' ? zhCn : en })
}
