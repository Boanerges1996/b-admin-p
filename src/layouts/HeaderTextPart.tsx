import { StyleProps } from "@/common";
import { PageRoutes } from "@/constants";
import { Col, Row, Space } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export type HeaderTextPartProps = StyleProps & {
  collapsed: boolean;
  onCollapse: () => void;
};

const DEFAULT_PROPS = {} as const;

export default function HeaderTextPart(props: HeaderTextPartProps) {
  const p = { ...DEFAULT_PROPS, ...props };
  const { pathname, push } = useRouter();

  const dashboardTextColor =
    pathname === PageRoutes.DASHBOARD ? "#fff" : "text-[#bababa]";
  const adminsTextColor =
    pathname === PageRoutes.ADMINS ? "#fff" : "text-[#bababa]";
  const studentsTextColor =
    pathname === PageRoutes.STUDENTS ? "#fff" : "text-[#bababa]";

  return (
    <Col span={12} className="">
      <Row className="w-full">
        {p.collapsed ? (
          <AiOutlineMenuFold
            className="trigger inline mt-[15px] mr-[15px]"
            onClick={p.onCollapse}
            size={25}
          />
        ) : (
          <AiOutlineMenuUnfold
            className="trigger inline mt-[15px] mr-[15px]"
            onClick={p.onCollapse}
            size={25}
          />
        )}

        <Col xs={0} sm={0} md={20} className="mt-[-4px]">
          <Space>
            <span
              className={`text-[15px] ${dashboardTextColor} cursor-pointer`}
              onClick={() => push(PageRoutes.DASHBOARD)}
            >
              Dashboard
            </span>
            <span
              className={`text-[15px] ${adminsTextColor} cursor-pointer`}
              onClick={() => push(PageRoutes.ADMINS)}
            >
              Admins
            </span>
            <span
              className={`text-[15px] ${studentsTextColor} cursor-pointer`}
              onClick={() => push(PageRoutes.STUDENTS)}
            >
              Students
            </span>
          </Space>
        </Col>
      </Row>
    </Col>
  );
}
