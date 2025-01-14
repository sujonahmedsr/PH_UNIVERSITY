import { Button, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import adminPaths from '../../routes/Admin.route';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logOut, useCurrentUser } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';

const { Header, Content } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

function MainLayouts() {
  const user = useAppSelector(useCurrentUser)
  
  let sidebarItems;

  switch(user!.role){
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;
    default: break;
  }

  const dispatch = useAppDispatch()

  const handleLogOut = () =>{
    dispatch(logOut())
    toast.success("Log Out Successfully.!")
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: '100vh' }}
      >
        <div style={{ color: 'white', height: '4rem', textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", }}>
          <h1 style={{ color: 'white', fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer" }}> PH_UNI </h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
      </Sider>
      <Layout>
        <Header style={{display: "flex", alignItems: "center", justifyContent: "end"}}><Button onClick={handleLogOut}>Log Out</Button></Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayouts
