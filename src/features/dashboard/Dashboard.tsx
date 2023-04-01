import { DashboardCountCard } from '@/components';
import { Col, Row } from 'antd';
import React from 'react';

export function Dashboard() {
  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <DashboardCountCard count={20} borderRadius={30} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}></Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}></Col>
      </Row>
    </div>
  );
}
