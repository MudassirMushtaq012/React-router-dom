import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
// const items = [{
//     label: 'Home',
//     key: '/Home'
// },
// {
//     label: 'About',
//     key: '/About'
// },
// {
//     label: 'Contact',
//     key: '/Contact'
// }
// ]



const AppNavbar = () => {
    const navigate = useNavigate()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
      <Header
        style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
          alignItems: 'center',
        }}
        >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
        <Link to={'/home'}><h3 style={{color: 'white,'}}>Home</h3></Link>
        <Link to={'/about'}><h3 style={{color: 'white,',margin: '60px'}}>About</h3></Link>
        <Link to={'/contact'}><h3 style={{color: 'white,'}}>Contact</h3></Link>
      </Header>
    </Layout>
  );
};
export default AppNavbar;