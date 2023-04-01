import { DashboardLayout } from '@/layouts';
import { Spin } from 'antd';
import React, { Suspense } from 'react';

const Chats = React.lazy(() =>
  import('@/features').then((module) => ({
    default: module.Chats,
  }))
);

export default function ChatsPage(): React.ReactNode {
  return (
    <Suspense fallback={<Spin />}>
      <Chats />
    </Suspense>
  );
}

ChatsPage.PageLayout = DashboardLayout;
