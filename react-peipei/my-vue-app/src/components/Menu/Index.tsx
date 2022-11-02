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
  border: 1px solid red;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 0 0 0 20px;
  li {
    padding-right: 8px;
  }
`
const TabMenu = function () {
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
      {tabDatas.map((val: any) => {
        return <li key={val.key}>{val.text}</li>
      })}
    </TabMenuStyle>
  )
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Contains>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Styleds>
            {' '}
            <img src={img} alt="" />
            配配后台
          </Styleds>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
                children: [
                  {
                    key: '23',
                    icon: <UserOutlined />,
                    label: 'nav 1'
                  }
                ]
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3'
              }
            ]}
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
            Content
          </Content>
        </Layout>
      </Layout>
    </Contains>
  )
}

export default App
