const apiUrl = {
  list: '/peipeix-msg/v1/ScreenplayResourceAdmin/getScreenplayResourceListByName', // 列表
  edit: '/peipeix-msg/v1/ScreenplayAdmin/saveScreenplayModuleCartoon', // 保存
  deleteModule: '/peipeix-msg/v1/ScreenplayAdmin/deleteScreenplayModule', // 删除
  deleteCrtlModule: '/peipeix-msg/v1/ScreenplayAdmin/bathDeleteScreenplayModule', // 删除多选的模块数据
  copyModule: '/peipeix-msg/v1/ScreenplayAdmin/copyScreenplay', // 复制
  getModuleName: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayAllModule', // 模块列表
  checkModuleData: '/peipeix-msg/v1/ScreenplayAdmin/checkModuleComplete', // 列表
  moduleSuccess: '/peipeix-msg/v1/ScreenplayAdmin/getScreenplayShelfStatus',
  getCompositeName: '/peipeix-msg/v1/ScreenplayAdmin/createScreenplayGroupName' //获取组合名称
}
export default apiUrl
