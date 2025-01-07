import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { adminSideBarRoutes } from '../../routes/Admin.route';

const { Header, Content, Footer, Sider } = Layout;

function MainLayouts() {

  return (
    <>
      <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color: 'white', height: '4rem', textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Link style={{color: 'white', fontSize: "1.5rem", fontWeight: "bold"}} to={'/'}> PH_UNI </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSideBarRoutes} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default MainLayouts
