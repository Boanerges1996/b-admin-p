import { StyleProps } from "@/common";
import { Avatar, Col, Dropdown, Space } from "antd";
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
  const p = { ...DEFAULT_PROPS, ...props };
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
              },
              {
                key: "1.1",
                label: "Communication",
                icon: <BsMegaphone />,
              },
              {
                type: "divider",
              },
              {
                key: "2",
                label: "Profile",
                icon: <CgProfile />,
              },
              {
                key: "3",
                label: "Settings",
                icon: <AiFillSetting />,
              },
              {
                type: "divider",
              },
              {
                key: "4",
                label: "Sign Out",
                icon: <FaSignOutAlt />,
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
