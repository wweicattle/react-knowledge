import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.less'
const App: React.FC = () => {
  let navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Success:', values)
    window.localStorage.setItem('user', values.username)
    navigate('/')
  }

  return (
    <div className="contains">
      <video
        src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/file/A*mnpLT77ldiIAAAAAAAAAAAAAARQnAQ"
        autoPlay
        loop
        muted
      ></video>
      <div
        className="login-contain"
        onClick={() => {
          // navigate('/')
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or{' '}
            <a
              onClick={() => {
                window.localStorage.clear()
              }}
            >
              register now!
            </a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App
