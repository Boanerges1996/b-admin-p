import { PageRoutes } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSelectedItem } from "@/store/reducers/sidebar";
import { Layout, Menu, Row, theme } from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineFlag, AiOutlineWechat } from "react-icons/ai";
import { BsBook, BsNewspaper } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegComments, FaSchool } from "react-icons/fa";
import { FiAlertTriangle, FiSettings } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAdminPanelSettings, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import HeaderTextPart from "./HeaderTextPart";
import { getItem } from "./constants";
import { useRouter } from "next/router";
const { Header, Sider, Content } = Layout;

const HeaderIcons = dynamic(() => import("./HeaderIcons"), { ssr: false });

const DashboardLay = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isCollapsed = useAppSelector((state) => state.sidebar.sidebarOpen);
  const selectedItem = useAppSelector((state) => state.sidebar.selectedItem);
  const dispatch = useAppDispatch();
  const imageUrl = useAppSelector((state) => state.admin.pic);
  const navigate = useRouter();

  const logged = useAppSelector((state) => state.admin.logged);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (!logged) {
    navigate.push(PageRoutes.HOME);
  }

  return (
    <div className="h-[100vh]">
      <Layout className="h-[100vh]">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(clp) => setCollapsed(clp)}
          className="overflow-scroll"
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[selectedItem]}
            selectedKeys={[selectedItem]}
            items={[
              getItem(
                <Link href={PageRoutes.DASHBOARD}>Dashboard</Link>,
                "0",
                <MdOutlineSpaceDashboard />,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("0"));
                }
              ),
              getItem("Administrative", "1", <MdAdminPanelSettings />, [
                getItem(
                  <Link href={PageRoutes.ADMINS}>Admin</Link>,
                  "1-1",
                  <RiAdminFill />,
                  undefined,
                  undefined,
                  () => {
                    dispatch(setSelectedItem("1-1"));
                  }
                ),
                getItem(
                  <Link href={PageRoutes.COUNTRIES}>Countries</Link>,
                  "1-2",
                  <AiOutlineFlag />,
                  undefined,
                  undefined,
                  () => {
                    dispatch(setSelectedItem("1-2"));
                  }
                ),
              ]),
              {
                key: "2",
                label: "MAIN",
                disabled: true,
                className: "pointer-events-none",
              },
              getItem(
                "Students",
                "2-1",
                <Link href={PageRoutes.STUDENTS}>
                  <HiOutlineUserGroup />
                </Link>,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("2-1"));
                }
              ),
              {
                key: "3",
                label: "EXTRAS",
                disabled: true,
                className: "pointer-events-none",
              },
              getItem(
                "Notifications",
                "3-2",
                <Link href={PageRoutes.NOTIFICATIONS}>
                  <IoMdNotificationsOutline />
                </Link>,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("3-2"));
                }
              ),
              getItem(
                "Alerts",
                "3-3",
                <Link href={PageRoutes.ALERTS}>
                  <FiAlertTriangle />
                </Link>,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("3-3"));
                }
              ),
              getItem(
                "Chats",
                "3-4",
                <Link href={PageRoutes.CHATS}>
                  <AiOutlineWechat />
                </Link>,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("3-4"));
                }
              ),
              getItem(
                "Profile",
                "3-1",
                <Link href={PageRoutes.PROFILE}>
                  <CgProfile />
                </Link>,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("3-1"));
                }
              ),
              getItem(
                "Settings",
                "3-5",
                <Link href={PageRoutes.SETTINGS}>
                  <FiSettings />
                </Link>,
                undefined,
                undefined,
                () => {
                  dispatch(setSelectedItem("3-5"));
                }
              ),
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              background: colorBgContainer,
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Row>
              <HeaderTextPart
                collapsed={collapsed}
                onCollapse={() => {
                  setCollapsed(!collapsed);
                }}
              />
              <HeaderIcons imageUrl={imageUrl} />
            </Row>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export const DashboardLayout = dynamic(() => Promise.resolve(DashboardLay), {
  ssr: false,
});
