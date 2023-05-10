import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  navLink: {
    height: rem(40),
    borderRadius: theme.radius.sm,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
  },
}));
