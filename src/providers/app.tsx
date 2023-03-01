import * as React from 'react';

import { MantineProvider } from '@mantine/core';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
