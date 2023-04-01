import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { ReactNode, Suspense } from 'react';

const Countries = React.lazy(() =>
  import('@/features/administrative').then((module) => ({
    default: module.Countries,
  }))
);

export default function CountriesPage(): ReactNode {
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Countries />
      </Suspense>
    </div>
  );
}

CountriesPage.PageLayout = DashboardLayout;
