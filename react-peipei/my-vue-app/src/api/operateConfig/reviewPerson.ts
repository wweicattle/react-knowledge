import ajax from '../../utils/ajax'
export default ajax

export const review = {
  list: 'peipeix-material/v1/AuditVersionAdmin/getAuditVersionAccountList', // 列表
  add: 'peipeix-material/v1/AuditVersionAdmin/addAuditVersionAccount', // 添加
  delete: 'peipeix-material/v1/AuditVersionAdmin/delAuditVersionAccount' // 删除
}
