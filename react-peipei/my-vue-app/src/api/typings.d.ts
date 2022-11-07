declare namespace API {
  type Menu = {
    createTime: Date
    updateTime: Date
    id: number
    parentId: number
    name: string
    router: string
    perms: string
    /** 当前菜单类型 0: 目录 | 1: 菜单 | 2: 权限 */
    type: 0 | 1 | 2
    icon: string
    orderNum: number
    viewPath: string
    keepalive: boolean
    isShow: boolean
  }

  type Module = {
    key: string
    text: string
    icon: string
  }

  type MenuItem = {
    isHidden: number
    icon?: string
    name: string
    url: string
    childs?: Array<MenuItem> // 兼容两个接口数据
    children?: Array<MenuItem> // 兼容两个接口数据
  }
}
