import { StyleProps } from "@/common";
import { PageRoutes } from "@/constants";
import { useAppDispatch } from "@/hooks/redux";
import { logoutAction } from "@/store";
import { Avatar, Col, Dropdown, Space } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineBell, AiFillSetting } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

export type HeaderIconsProps = StyleProps & {
  imageUrl?: string;
};

const DEFAULT_PROPS = {} as const;

export default function HeaderIcons(props: HeaderIconsProps) {
  const dispatch = useAppDispatch();
  const p = { ...DEFAULT_PROPS, ...props };
  const { push } = useRouter();
  return (
    <Col span={12} className="text-right">
      <Space size={15}>
        <AiOutlineBell size={25} className="cursor-pointer text-[#a3a2a2]" />
        <BiEnvelope size={25} className="cursor-pointer text-[#a3a2a2]" />
        <Dropdown
          className="p-0 m-0"
          menu={{
            items: [
              {
                key: "1",
                label: "Notifications",
                icon: <AiOutlineBell />,
                onClick: () => push(PageRoutes.NOTIFICATIONS),
              },
              {
                type: "divider",
              },
              {
                key: "2",
                label: "Profile",
                icon: <CgProfile />,
                onClick: () => push(PageRoutes.PROFILE),
              },
              {
                key: "3",
                label: "Settings",
                icon: <AiFillSetting />,
                onClick: () => push(PageRoutes.SETTINGS),
              },
              {
                type: "divider",
              },
              {
                key: "4",
                label: "Sign Out",
                icon: <FaSignOutAlt />,
                onClick: () => {
                  dispatch(logoutAction());
                },
              },
            ],
          }}
        >
          <Avatar
            className="cursor-pointer mt-[-15px] p-0"
            src={p.imageUrl}
            alt=""
          />
        </Dropdown>
      </Space>
    </Col>
  );
}
