import ajax from '../utils/ajax'
export default ajax

export const auth = {
  login: 'java_sso_server/v1/auth/login', // 登录
  logout: 'java_sso_server/v1/auth/logout', // 登出
  access: 'java_sso_server/v1/bizesource/getAllTopTag', // 顶级菜单
  subAccess: 'java_sso_server/v1/bizesource/getResourceTreeByTopTag', // 子菜单
  userMenus: 'java_sso_server/v1/bizesource/getTopTagWithResourcesTree' // 顶级菜单 + 子菜单(用于菜单搜索)
}

export const common = {
  options: 'dp/v1/dataDictionary/getByDictType' // 获取字典下拉选项
}

// 数据库
export const database = {
  list: 'dp/v1/database/page', // 数据库列表
  add: 'dp/v1/database/add', // 新增数据库
  info: 'dp/v1/database/getById', // 数据库详情
  update: 'dp/v1/database/update', // 更新数据库
  delete: 'dp/v1/database/batchDelete', // 批量删除数据库
  options: 'dp/v1/database/selectList' // 数据库下拉选项
}

// 数据集
export const table = {
  list: 'dp/v1/table/page', // 数据集列表
  add: 'dp/v1/table/add', // 新增数据集
  info: 'dp/v1/table/getSimpleById', // 数据集详情
  update: 'dp/v1/table/updateSimple', // 更新数据集
  fieldInfo: 'dp/v1/table/getById', // 数据集字段详情
  fieldUpdate: 'dp/v1/table/update', // 更新数据集字段
  delete: 'dp/v1/table/batchDelete', // 批量删除数据集
  options: 'dp/v1/table/selectList', // 数据集下拉选项
  optionsByDB: 'dp/v1/table/tableSelectListByDatabase' // 根据数据库数据集下拉选项
}

// 数据字典
export const mapData = {
  list: 'dp/v1/dataDictionary/page', // 数据字典集列表
  add: 'dp/v1/dataDictionary/add', // 新增数据字典
  info: 'dp/v1/dataDictionary/getById', // 数据集数据字典
  update: 'dp/v1/dataDictionary/update', // 更新数据字典
  delete: 'dp/v1/dataDictionary/batchDelete', // 批量删除数据字典
  statusChange: 'dp/v1/dataDictionary/enabled' // 数据字典状态变更
}

// 图表管理
export const chart = {
  list: 'dp/v1/graph/page', // 图表列表
  add: 'dp/v1/graph/add', // 新增图表
  info: 'dp/v1/graph/getSimpleById', // 图表详情
  detial: 'dp/v1/graph/getById', // 图表详情
  update: 'dp/v1/graph/update', // 更新图表
  save: 'dp/v1/graph/updateConfiguration', // 更新图表配置
  saveAs: 'dp/v1/graph/saveAs', // 图表另存为
  delete: 'dp/v1/graph/batchDelete', // 批量删除图表
  options: 'gw/v1/dpChart/options', // 图表配置相关下拉选项
  optionsByTable: 'dp/v1/graph/getGraphsByTableId', // 根据数据集获取图表配置下拉选项
  run: 'dp/v1/graph/runById', // 通过ID执行图表
  preview: 'dp/v1/graph/runByParameter', // 通过参数执行图表
  charts: 'dp/v1/graph/selectList', // 获取所有可用图表
  chartsforAlarm: 'dp/v1/graph/selectListForAlarm', // 获取没有报警设置的图表
  targetOptions: 'dp/v1/graph/subjectSelectList' // 获取指标下拉选项
}

// 统计报表管理
export const report = {
  list: 'dp/v1/report/page', // 统计报表列表
  add: 'dp/v1/report/add', // 新增统计报表
  info: 'dp/v1/report/getById', // 统计报表详情
  update: 'dp/v1/report/update', // 更新统计报表
  delete: 'dp/v1/report/batchDelete', // 批量删除统计报表
  configInfo: 'dp/v1/report/getRelateGraphs', // 获取统计报表配置
  configSave: 'dp/v1/report/relateGraphs', // 保存统计报表配置
  search: 'dp/v1/report/filterByReport' // 筛选盒执行搜索
}

// 统计报表目录管理
export const reportCatalogue = {
  list: 'dp/v1/reportCatalogue/page', // 查询报表目录信息
  add: 'dp/v1/reportCatalogue/add', // 新增报表目录
  info: 'dp/v1/reportCatalogue/getById', // 统计报表目录详情
  update: 'dp/v1/reportCatalogue/update', // 更新报表目录
  delete: 'dp/v1/reportCatalogue/batchDelete', // 批量删除报表目录（有报表不予删除）
  options: 'dp/v1/reportCatalogue/selectList' //  报表目录下拉选项
}

// 报警群组管理
export const notice = {
  list: 'dp/v1/noticeGroup/page', // 查询报警群组列表
  add: 'dp/v1/noticeGroup/add', // 新增报警群组
  info: 'dp/v1/noticeGroup/getById', // 报警群组详情
  update: 'dp/v1/noticeGroup/update', // 更新报警群组
  delete: 'dp/v1/noticeGroup/batchDelete', // 删除报警群组
  state: 'dp/v1/noticeGroup/state', //  启用/禁用报警群组
  options: 'dp/v1/noticeGroup/selectList' //  报表目录下拉选项
}

// 事项说明
export const event = {
  list: 'dp/v1/event/page', // 查询事项说明列表
  add: 'dp/v1/event/add', // 新增事项说明
  info: 'dp/v1/event/getById', // 事项说明详情
  update: 'dp/v1/event/update', // 更新事项说明
  delete: 'dp/v1/event/batchDelete', // 删除事项说明
  state: 'dp/v1/event/state' //  启用/禁用事项说明
}

// 报警设置
export const alarm = {
  list: 'dp/v1/alarm/configurationPage', // 查询报警设置列表
  add: 'dp/v1/alarm/addConfiguration', // 新增报警设置
  delete: 'dp/v1/alarm/batchDeleteConfiguration', // 删除报警设置
  state: 'dp/v1/alarm/configurationState', //  启用/禁用报警设置
  log: 'dp/v1/alarm/resultPage', // 报警记录
  overview: 'gw/v1/alarm/overview' // 报警总览
}
