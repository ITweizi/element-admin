import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 引入样式的主入口文件
import './styles/index.scss'
// 加载svg的处理
// import './icons/index.js'
// 引入svg函数
import initSvgicon from './icons/index.js'

// 用户鉴权 如果服务器有问题 把它闭了 就可以数据路径跳转到想要去的页面
import './permission.js'

// 导入i18n
import i18n from '@/i18n/index.js'

const app = createApp(App)
installElementPlus(app)
// svg全局注册组件
initSvgicon(app)

app.use(store).use(router).use(i18n)
app.mount('#app')
/*eslint-disable*/
