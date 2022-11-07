import ajax from '../../utils/ajax'
export default ajax

export const advert = {
  config: 'peipeix-material/v1/AdvertAdmin/getAdvertConfig', // 配置
  list: 'peipeix-material/v1/AdvertAdmin/getAdvertList', // 列表
  info: 'peipeix-material/v1/AdvertAdmin/getAdvertById', // 详情
  add: 'peipeix-material/v1/AdvertAdmin/createAdvert', // 添加
  update: 'peipeix-material/v1/AdvertAdmin/editAdvert', // 更新
  delete: 'peipeix-material/v1/AdvertAdmin/delAdvertById' // 删除
}
