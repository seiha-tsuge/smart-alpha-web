import React from 'react';

import { AppShell } from '@/components/shared';

import { Header } from './Header';
import { Navbar } from './Navbar';

import { useStyles } from './MainLayout.styles';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { classes } = useStyles();
  return (
    <AppShell navbar={<Navbar />} header={<Header />} padding={0}>
      <div className={classes.container}>{children}</div>
    </AppShell>
  );
};

export const getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
