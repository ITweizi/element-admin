import { createI18n } from 'vue-i18n'
import zh from './lang/zh.js'
import en from './lang/en.js'
import store from '@/store/index.js'
// 定义数据源
const messages = {
  en: {
    msg: {
      ...en
    }
  },
  zh: {
    msg: {
      ...zh
    }
  }
}

// 定义语言的类型
const locale = store.getters.language || 'en'

// 初始化i18n
const i18n = createI18n({
  legacy: false, // 配合vue3.2 compostion API
  globalInjection: true, // 全局注册一个t 函数
  locale,
  messages
})

export default i18n
