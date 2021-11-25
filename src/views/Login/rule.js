import i18n from '@/i18n/index.js'

// export const passwordValidate = (rule, value, callback) => {
//   // 获取输入的值做验证
//   if (value.length < 6) {
//     callback(new Error(i18n.global.t('msg.login.passwordRule'))) // no  模板 $t  组件t  js global.t
//   } else {
//     callback() // ok
//   }
// }

export const usernameValidator = () => {
  return (rule, value, callback) => {
    // 获取输入的值做验证
    if (value.length <= 0) {
      callback(new Error(i18n.global.t('msg.login.usernameRule')))
    } else {
      callback() // ok
    }
  }
}
// 那边加括号 这样用
export const passwordValidator = () => {
  return (rule, value, callback) => {
    // 获取输入的值做验证
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule'))) // no
    } else {
      callback() // ok
    }
  }
}
