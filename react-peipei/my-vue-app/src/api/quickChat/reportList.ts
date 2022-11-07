const apiUrl = {
  list: 'peipeix-ugc/v1/ReportAdmin/getList', // 列表
  doPunish: 'risk-punish/v2/punishTicket/doPunish', // 处罚
  getLastPunishLog: 'risk-punish/v2/punishTicket/getLastPunishLog', // 用户最近一次处罚记录
  getPunishTicketConfig: 'risk-punish/v2/punishTicket/getPunishTicketConfig', // 获取罚单配置(场景处罚理由)
  getPunishCount: 'risk-punish/v2/punishTicket/getPunishCount',
  confirm: '/peipeix-ugc/v1/ReportAdmin/punishNotify',
  ignore: '/peipeix-ugc/v1/ReportAdmin/ignore'
}
export default apiUrl
