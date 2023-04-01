import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Users = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.Users,
  }))
);

export default function UserPage() {
  return (
    <Suspense fallback={<Spin />}>
      <Users />
    </Suspense>
  );
}

UserPage.PageLayout = DashboardLayout;
