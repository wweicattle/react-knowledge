import ajax from '../../utils/ajax'
export default ajax

export const user = {
  list: 'peipeix-user/v1/AccountInfoAdmin/getAccountInfoList',
  add: 'peipeix-user/v1/AccountAdmin/createAccount',
  info: 'gw/v1/PeipeiX/getAccountAggInfo',
  nicknameHistory: 'peipeix-user/v1/AccountInfoAdmin/getAccountNicknameLog'
}

export const randomNicknameGroup = {
  list: 'peipeix-user/v1/AccountInfoAdmin/getDataForRandomNicknameGroupListPage', // 随机昵称分组列表
  add: 'peipeix-user/v1/AccountInfoAdmin/addRandomNicknameGroup', // 添加随机昵称分组
  delete: 'peipeix-user/v1/AccountInfoAdmin/deleteRandomNicknameGroup', // 删除随机昵称分组
  edit: 'peipeix-user/v1/AccountInfoAdmin/editRandomNicknameGroup', // 编辑随机昵称分组
  options: 'peipeix-user/v1/AccountInfoAdmin/getRandomNicknameGroupListForSelect' // 随机昵称分组下拉选项
}

export const randomNickname = {
  list: 'peipeix-user/v1/AccountInfoAdmin/getDataForRandomNicknameListPage', // 随机昵称列表
  add: 'peipeix-user/v1/AccountInfoAdmin/mAddRandomNickname', // 添加随机昵称
  delete: 'peipeix-user/v1/AccountInfoAdmin/deleteRandomNickname' // 删除随机昵称
}

export const invite = {
  list: 'peipeix-relation/v1/InviteAdmin/getInviteList', // 用户邀请列表
  unbind: 'peipeix-relation/v1/InviteAdmin/unbindInviteCode' // 邀请码解绑
}

export const discovery = {
  list: 'peipeix-relation/v1/DiscoveryAdmin/getRecommendList', // 推荐用户列表列表
  add: 'peipeix-relation/v1/DiscoveryAdmin/addRecommendUser', // 添加推荐用户列表
  update: 'peipeix-relation/v1/DiscoveryAdmin/updateRecommendState' // 更新推荐状态
}
export const discoveryTwo = {
  list: 'peipeix-ugc/v1/TimelineAdmin/getRecommendList', // 推荐2表列表
  edit: 'peipeix-ugc/v1/TimelineAdmin/batchRecommendOperate' // 修改批量
}

export const userProfile = {
  crowd: 'user_profile/v1/storageActionLabelSelect/labelBelongQuery' // 获取人群
}
export const library = {
  update: 'peipeix-ugc/v1/UserTagAdmin/update', // 更新标签
  add: 'peipeix-ugc/v1/UserTagAdmin/add', // 添加标签
  list: 'peipeix-ugc/v1/UserTagAdmin/getList', // 标签列表
  delete: 'peipeix-ugc/v1/UserTagAdmin/delete', // 删除标签
  allTags: 'peipeix-ugc/v1/UserTagAdmin/getAllList', // 推荐池所有标签项
  dynaticTags: 'peipeix-ugc/v1/UserTagAdmin/bindTimelineTag' // 动态选择标签
}
