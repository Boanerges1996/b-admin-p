import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Administrators = React.lazy(() =>
  import('@/features/administrative').then((module) => ({
    default: module.Administrators,
  }))
);
export default function AdministratorsPage() {
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Administrators />
      </Suspense>
    </div>
  );
}

AdministratorsPage.PageLayout = DashboardLayout;
