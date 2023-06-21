import { createStyles, rem } from '@/libraries/mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    padding: `${rem(24)} ${rem(32)}`,
    backgroundColor: theme.colors.gray[0],
  },
}));
