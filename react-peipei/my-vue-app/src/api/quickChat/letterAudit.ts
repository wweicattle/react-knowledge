const apiUrl = {
  list: 'java_risk_control/v1/paidPrivateMsg/getPaidPrivateMsgList', // 列表
  doPunish: 'risk-punish/v2/punishTicket/doPunish', // 处罚
  getLastPunishLog: 'risk-punish/v2/punishTicket/getLastPunishLog', // 用户最近一次处罚记录
  getPunishTicketConfig: 'risk-punish/v2/punishTicket/getPunishTicketConfig', // 获取罚单配置(场景处罚理由)
  getPunishCount: 'risk-punish/v2/punishTicket/getPunishCount' // 获取以开出罚单的次数
}

export default apiUrl
