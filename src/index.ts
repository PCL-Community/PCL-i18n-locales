import enUS from './en-US.json'
import zhCN from './zh-CN.json'

export const locales = {
  'en-US': enUS,
  'zh-CN': zhCN,
}

export type LocaleKeys = keyof typeof locales

export default locales
