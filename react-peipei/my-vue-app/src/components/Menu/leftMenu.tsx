import { Layout, Menu } from 'antd'
import { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import {
  Link,
  Outlet,
  useParams,
  useNavigation,
  useLocation
} from 'react-router-dom'
export default function () {
  const response = {
    success: true,
    code: '0',
    msg: '',
    data: [
      {
        checkType: 1,
        childs: [
          {
            checkType: 1,
            createTime: 1646878199,
            icon: '',
            id: 108742,
            isAuth: 1,
            isHidden: 0,
            name: '广告位配置',
            pid: 108787,
            productionShow: 1,
            resourcetype: 0,
            sensitivLevel: 1,
            seq: 1,
            serviceCode: 'ppx-admin',
            status: 1,
            url: 'peipeix-material/v1/setting/advertisement'
          },
          {
            checkType: 1,
            createTime: 1651818157,
            icon: '',
            id: 109792,
            isAuth: 1,
            isHidden: 0,
            name: '审核版本',
            pid: 108787,
            productionShow: 1,
            resourcetype: 0,
            sensitivLevel: 1,
            seq: 1,
            serviceCode: 'ppx-admin',
            status: 1,
            url: 'peipeix-material/v1/setting/reviewVersion'
          },
          {
            checkType: 1,
            createTime: 1651818338,
            icon: '',
            id: 109793,
            isAuth: 1,
            isHidden: 0,
            name: '审核人员',
            pid: 108787,
            productionShow: 1,
            resourcetype: 0,
            sensitivLevel: 1,
            seq: 1,
            serviceCode: 'ppx-admin',
            status: 1,
            url: 'peipeix-material/v1/setting/reviewPerson'
          }
        ],
        createTime: 1646902864,
        icon: '',
        id: 108787,
        isAuth: 1,
        isHidden: 0,
        name: '广告',
        productionShow: 1,
        resourcetype: 0,
        sensitivLevel: 1,
        seq: 0,
        serviceCode: 'ppx-admin',
        status: 1,
        url: 'ppx_material/v1/setting/ad'
      },
      {
        checkType: 1,
        createTime: 1665208151,
        icon: '',
        id: 211707,
        isAuth: 1,
        isHidden: 0,
        name: '头像库',
        productionShow: 1,
        resourcetype: 0,
        sensitivLevel: 1,
        seq: 0,
        serviceCode: 'ppx-admin',
        status: 1,
        url: 'peipeix-msg/v1/setting/avatarList'
      }
    ]
  }
  let newMenus = response.data.map((res) => {
    // 判断childen
    let children: any
    if (res.childs) {
      children = res.childs.map((res) => {
        return {
          key: res.url,
          icon: <UserOutlined />,
          label: <Link to={res.url}>{res.name}</Link>
        }
      })
    }
    return {
      key: res.url,
      icon: <UserOutlined />,
      label: res.name,
      children
    }
  })
  const [menuDatas, setMenu] = useState(newMenus)
  // s设置默认路由选中高亮
  const defaultSelectedKeys = ['peipeix-material/v1/setting/advertisement']
  const defaultOpenKeys = ['ppx_material/v1/setting/ad']
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      items={menuDatas}
      defaultOpenKeys={defaultOpenKeys}
    />
  )
}
