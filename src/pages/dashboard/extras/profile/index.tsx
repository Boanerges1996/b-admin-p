import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Profile = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.Profile,
  }))
);

export default function ProfilePage(): React.ReactNode {
  return (
    <Suspense fallback={<Spin />}>
      <Profile />
    </Suspense>
  );
}

ProfilePage.PageLayout = DashboardLayout;
