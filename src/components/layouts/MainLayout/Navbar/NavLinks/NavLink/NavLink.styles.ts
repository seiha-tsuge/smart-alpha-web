import { createStyles, rem } from '@/libraries/mantine/core';

interface NavLinkStylesProps {
  opened?: boolean;
}

export const useStyles = createStyles((theme, { opened }: NavLinkStylesProps) => ({
  navLink: {
    justifyContent: 'center',
    height: rem(40),
    borderRadius: theme.radius.sm,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
  },
  icon: {
    marginRight: opened ? theme.spacing.xl : 0,
  },
}));
