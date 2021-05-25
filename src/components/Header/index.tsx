import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from '@ant-design/icons'

const { SubMenu, Item } = Menu

const Header = () => {
  const [current, setCurrent] = useState('home')

  const clickHandler = (e: any) => setCurrent(e.key)

  return (
    <div className="header">
      <Menu
        onClick={clickHandler}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="reg" icon={<UserAddOutlined />} className="float-right">
          <Link to="/reg">Register</Link>
        </Item>
        <Item key="log" icon={<UserOutlined />} className="float-right">
          <Link to="/log">Login</Link>
        </Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="User">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Header
