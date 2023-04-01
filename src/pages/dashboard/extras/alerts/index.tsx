import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Alerts = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.Alerts,
  }))
);

export default function AlertsPage(): React.ReactNode {
  return (
    <Suspense fallback={<Spin />}>
      <Alerts />
    </Suspense>
  );
}

AlertsPage.PageLayout = DashboardLayout;
