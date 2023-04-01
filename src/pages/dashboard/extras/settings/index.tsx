import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Settings = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.Settings,
  }))
);

export default function SettingsPage(): React.ReactNode {
  return (
    <Suspense fallback={<Spin />}>
      <Settings />
    </Suspense>
  );
}

SettingsPage.PageLayout = DashboardLayout;
