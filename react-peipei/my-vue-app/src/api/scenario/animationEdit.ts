const apiUrl = {
  getList: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayCartoon', // 列表
  delete: '/peipeix-msg/v1/ScreenplayAdmin/deleteScreenplayCartoon', // 列表
  save: '/peipeix-msg/v1/ScreenplayAdmin/saveScreenplayModuleCartoon', // 保存
  getResource: '/peipeix-msg/v1/ScreenplayResourceAdmin/getScreenplayResourceList', // 列表
  uploadResource: '/peipeix-msg/v1/ScreenplayResourceAdmin/batchUploadScreenplayResource', // 列表
  upload: 'peipeix-msg/v1/ScreenplayResourceAdmin/uploadScreenplayResource', // 列表
  deleteResource: 'peipeix-msg/v1/ScreenplayResourceAdmin/deleteScreenplayResource', // 列表
  rename: 'peipeix-msg/v1/ScreenplayResourceAdmin/renameScreenplayResource', // 列表
  isExsit: 'peipeix-msg/v1/ScreenplayResourceAdmin/existScreenplayResourceListByName', // 列表
  checkModule: '/peipeix-msg/v1/ScreenplayAdmin/checkCartoonComplete', // 列表
  resourceUsed: '/peipeix-msg/v1/ScreenplayResourceAdmin/getScreenplayResourceUsedStatus' // 列表
}
export default apiUrl
