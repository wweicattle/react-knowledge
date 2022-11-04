import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
const { Header, Sider, Content } = Layout
import img from '@/assets/Img/logo.png'
import { Link, Outlet } from 'react-router-dom'

const Styleds = styled.div`
  color: #fff;
  font-size: 16px;
  text-align: center;
  height: 64px;
  line-height: 64px;
  img {
    width: 32px;
    margin-right: 2px;
  }
`

const Contains = styled.div`
  height: 100%;
  .site-layout-background {
    display: flex;
    align-items: center;
    // height: 100%;
  }
`
const TabMenuStyle = styled.ul`
  // height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 0 0 0 20px;
  user-select: none;
  li {
    padding-right: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &.active {
      font-size: 18px;
      &::after {
        content: '';
        height: 2px;
        background: #008c8c;
        width: 40px;
        position: absolute;
        left: 0;
        bottom: 10px;
      }
    }
  }
`
const TabMenu = function () {
  const [activeIndex, setIndex] = useState<number>(-1)
  const tabDatas = [
    { key: 'dashboard', text: '首页', icon: 'el-icon-s-home' },
    { icon: 'hb-icon-neirong', key: 'content', text: '内容' },
    { icon: 'hb-icon-shuju', key: 'data', text: '数据' },
    { icon: 'hb-icon-caiwu-', key: 'finance', text: '财务' },
    { icon: 'hb-icon-guanli', key: 'manager', text: '管理' },
    { icon: 'hb-icon-moment', key: 'moment', text: '瞬间' },
    { icon: 'hb-icon-setting', key: 'setting', text: '配置' },
    { icon: 'hb-icon-operation', key: 'operation', text: '运营' },
    { icon: 'hb-icon-operation', key: 'scenario', text: '剧本' }
  ]
  return (
    <TabMenuStyle>
      {tabDatas.map((val: any, index: number) => {
        return (
          <li
            key={val.key}
            className={activeIndex == index ? 'active' : ''}
            style={{ color: activeIndex == index ? '#008c8c' : '' }}
            onClick={() => {
              setIndex(index)
            }}
          >
            {val.text}
          </li>
        )
      })}
    </TabMenuStyle>
  )
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
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
            url: 'about'
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
  let newMenus = []
  newMenus = response.data.map((res) => {
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

  const [menuDatas, setMenu] = useState(
    newMenus
    //   [
    //   {
    //     key: '/sa',
    //     icon: <UserOutlined />,
    //     label: 434,
    //     children: [
    //       {
    //         key: '/sss',
    //         icon: <UserOutlined />,
    //         label: <Link to="about">3434</Link>
    //       }
    //     ]
    //   },
    //   {
    //     key: '2',
    //     icon: <VideoCameraOutlined />,
    //     label: 'nav 2'
    //   },
    //   {
    //     key: '3',
    //     icon: <UploadOutlined />,
    //     label: 'nav 3'
    //   }
    // ]
  )
  return (
    <Contains>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} > 
          <div className="logo" />
          <Styleds>
            {' '}
            <img src={img} alt="" />
            {!collapsed ? '配配后台' : '配配'}
          </Styleds>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/about']}
            items={menuDatas}
            defaultOpenKeys={['ppx_material/v1/setting/ad']}

          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed)
              }
            )}
            <TabMenu />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            Content Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sint, fugit.
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Contains>
  )
}

export default App
