import 'antd/dist/antd.css';
import Link from 'next/link'
import React, { useState } from 'react';
import { Image, Layout, Menu, Tooltip, Avatar } from 'antd';
import {
  HomeOutlined, 
  MedicineBoxOutlined, 
  ReconciliationOutlined, 
  LaptopOutlined,
  CompassOutlined,
  LogoutOutlined ,
  SettingOutlined
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MyLayout({ number, children }) {
    const [collapsed, setCollapsed] = useState(false);
    console.log(number)
  return (  
    <>  
  <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div style={{
          height: '40px',
          margin: '16px',
          textAlign: 'center'}}>
          <Image src="/easyHealthLogo.png" width={90}></Image>
          {/* <Avatar src="/easyHealthLogo.png" width={200}></Avatar> */}
        </div>
        <div style={{
          height: '40px',
          margin: '16px',
          color: '#fff',
          paddingLeft: '7px'}}>
         Good Afternoon, Atlantica!
        </div>
        <Menu theme="dark" defaultSelectedKeys={[number]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
           <Link href="/">
           <Tooltip placement="topRight" title="Find a doctor now!" arrowPointAtCenter>
              <a>Home</a>
              </Tooltip>
            </Link>
          </Menu.Item>
          
          <Menu.Item key="2" icon={<MedicineBoxOutlined />}>
            <Link href="/doctorlist">
              <a>Our Doctors</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ReconciliationOutlined />}>
            <Link href="/insurance">
              <a>Insurances</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LaptopOutlined />}>
            <Link href="/forum">
              <a>Forum</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CompassOutlined />}>
            <Link href="/aboutus">
              <a>About Us</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="7" icon={<LogoutOutlined />} style={{ position: 'absolute', bottom: '200px;'}}>
            <Link href="/login">
              <a>Sign Out</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
       <Layout className="site-layout">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <main>{children}</main>
        </div>
      </Layout>
    </Layout>
    </>
  )
}