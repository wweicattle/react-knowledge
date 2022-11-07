const apiUrl = {
  list: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayList', // 列表
  edit: '/peipeix-msg/v1/ScreenplayAdmin/saveScreenplay', // 编辑
  pack: '/peipeix-msg/v1/ScreenplayAdmin/packScreenplay', // 打包
  packCheck: '/peipeix-msg/v1/ScreenplayAdmin/packCheck', // 打包前检查
  poll: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayPackStatus', // 打包轮询结果
  put: '/peipeix-msg/v1/ScreenplayAdmin/shelfScreenplay', // 上架
  open: '/peipeix-msg/v1/ScreenplayAdmin/openScreenplay', // 开放全员
  // 剧本复制
  copy: '/peipeix-msg/v1/ScreenplayAdmin/copyScreenplay',
  // 删除剧本
  delete: '/peipeix-msg/v1/ScreenplayAdmin/deleteScreenplay',
  // 剧本所有模块数据
  allModuleData: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayModuleList',
  // 模块类型
  allModule: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayModuleTypeList',
  isEditData: '/peipeix-msg/v1/ScreenplayAdmin/existEditScreenplay',

  edits: '/peipeix-msg/v1/ScreenplayAdmin/saveScreenplayModuleList' // 列表
}
export default apiUrl
