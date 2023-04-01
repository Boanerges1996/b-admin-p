import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const GodView = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.GodView,
  }))
);

export default function GodViewPage(): React.ReactNode {
  return (
    <Suspense fallback={<Spin />}>
      <GodView />
    </Suspense>
  );
}

GodViewPage.PageLayout = DashboardLayout;
