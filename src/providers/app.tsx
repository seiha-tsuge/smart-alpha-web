import * as React from 'react';

import { MantineProvider } from '@mantine/core';

import { Noto_Sans_JP } from '@next/font/google';

const NotoSansJP = Noto_Sans_JP({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });
const fontFamily = `${NotoSansJP.style.fontFamily}, sans-serif`;

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily,
        headings: { fontFamily },
      }}
    >
      {children}
    </MantineProvider>
  );
};
