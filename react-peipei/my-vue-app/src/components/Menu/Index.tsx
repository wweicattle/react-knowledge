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
import {
  Link,
  Outlet,
  useParams,
  useNavigation,
  useLocation
} from 'react-router-dom'

import LeftMenu from "./leftMenu"
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
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Contains>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Styleds>
            {' '}
            <img src={img} alt="" />
            {!collapsed ? '配配后台' : '配配'}
          </Styleds>
          <LeftMenu />
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
            <div className="actor_img">actis</div>
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
