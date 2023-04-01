'use client';

import { useAppSelector } from '@/hooks/redux';
import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { Suspense } from 'react';

const Dashboard = React.lazy(() =>
  import('@/features/dashboard').then((module) => ({
    default: module.Dashboard,
  }))
);

export default function DashboardPage() {
  const isLogged = useAppSelector((state) => state.admin.logged);

  const navigate = useRouter();

  // if (!isLogged && typeof window !== 'undefined') {
  //   navigate.push('/');
  // }

  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

DashboardPage.PageLayout = DashboardLayout;
