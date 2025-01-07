import { Layout, Menu, MenuProps } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key: "jajsdf1",
        label: <NavLink to={'/admin'}>Dashboard</NavLink>
    },
    {
        key: "jajsdf2",
        label: "User Management",
        children: [
            {
                key: "dfksdf",
                label: <NavLink to={'/admin/create-admin'}>Create Admin</NavLink>
            },
            {
                key: "dfksdf1",
                label: <NavLink to={'/admin/create-faculty'}>Create Faculty</NavLink>
            },
            {
                key: "dfksdf2",
                label: <NavLink to={'/admin/create-student'}>Create Student</NavLink>
            }
        ]
    },
    {
        key: "jajsdf35",
        label: "faculty"
    },
    {
        key: "jajsdf5",
        label: "student"
    }
]

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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
