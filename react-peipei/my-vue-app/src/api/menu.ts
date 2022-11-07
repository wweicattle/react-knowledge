export interface Menu {
  id: number
  icon?: string
  url: string
  name: string
  isHidden?: number
  key: string // 对应tag的key
  children: Array<Menu>
  childs: Array<Menu>
}

export interface Module {
  icon?: string // 图标
  key: string // 标识符
  text: string // 中文名
  pulled?: boolean // 是否已加入vue路由
}

export interface RouteMeta {
  icon?: string
  breadcrumbs: Array<string>
  module: string
}

export interface RouteRecord {
  label: string
  path: string
  component: string
  asTitle?: boolean
  hidden?: boolean
  redirect?: string
  meta?: RouteMeta
  children: Array<RouteRecord>
}
