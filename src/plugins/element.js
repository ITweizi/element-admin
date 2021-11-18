import ElementPlus from 'element-plus'
import '../styles/element-variables.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  // qewrq
  app.use(ElementPlus, { locale })
}