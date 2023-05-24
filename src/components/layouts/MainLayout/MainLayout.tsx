import React from 'react';

import { AppShell } from '@mantine/core';

import { Header } from './Header';
import { Navbar } from './Navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AppShell navbar={<Navbar />} header={<Header />}>
      {children}
    </AppShell>
  );
};

export const getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
