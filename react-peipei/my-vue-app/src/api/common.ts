export interface Option {
  label: string
  value: string | number
  extra?: string
}

export interface PreviewData {
  type: string //  数据类型（date：日期、select：下拉框、input：文本输入）
  name: string //  字段 ID
  extName?: string // 扩展字段，一般是日期范围的结束时间
  extDefault?: any
  placeholder: string // 字段别名
  default?: any //  默认值
  option?: Array<object> // 下拉选项
  multiple?: boolean // 是否多选
  inputType?: string
  allowClear?: boolean
  noTimeRange?: boolean
  defaultYear?: boolean
}

export interface antFormData {
  type: string
  attr: string
  extAttr?: string | any //一般是结束时间的字段
  value?: any
  label: string
  options?: Array<Option>
  require?: boolean
  placeHolder?: string
  defaultTimeValue?: Array<any>
  defualtValue?: string
}
export interface IObject {
  [key: string]: any
}

export const auth = {
  login: 'java_sso_server/v1/auth/login', // 登录
  logout: 'java_sso_server/v1/auth/logout', // 登出
  access: 'java_sso_server/v1/bizesource/getAllTopTag', // 顶级菜单
  subAccess: 'java_sso_server/v1/bizesource/getResourceTreeByTopTag', // 子菜单
  userMenus: 'java_sso_server/v1/bizesource/getTopTagWithResourcesTree' // 顶级菜单 + 子菜单(用于菜单搜索)
}

export const other = {
  apps: 'appconfig_system/v1/appName/getAppNames' // 获取app下拉选项
}
