import { Layout, Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key: "jajsdf1",
        label: "Dashboard"
    },
    {
        key: "jajsdf2",
        label: "admin",
        children: [
            {
                key: "dfksdf",
                label: "Crate Student"
            },
            {
                key: "dfksdf1",
                label: "Crate Faculty"
            },
            {
                key: "dfksdf2",
                label: "Crate Admin"
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
            <h1>PH_UNI</h1>
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
            show your content here ?
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
