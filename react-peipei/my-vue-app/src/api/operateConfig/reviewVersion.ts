import ajax from '../../utils/ajax'
export default ajax

export const review = {
  channelList: 'peipeix-material/v1/AuditVersionAdmin/getChannels', // 渠道列表
  list: 'peipeix-material/v1/AuditVersionAdmin/getAuditVersionList', // 列表
  add: 'peipeix-material/v1/AuditVersionAdmin/addAuditVersion', // 添加
  delete: 'peipeix-material/v1/AuditVersionAdmin/delAuditVersion' // 删除
}
