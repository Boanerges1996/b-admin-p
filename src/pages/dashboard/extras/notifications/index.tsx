import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Notification = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.Notifications,
  }))
);

export default function NotificationsPage(): React.ReactNode {
  return (
    <Suspense fallback={<Spin />}>
      <Notification />
    </Suspense>
  );
}

NotificationsPage.PageLayout = DashboardLayout;
