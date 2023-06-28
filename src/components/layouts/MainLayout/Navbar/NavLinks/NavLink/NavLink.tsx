import React, { forwardRef } from 'react';
import Link from 'next/link';

import { NavLink as UINavLink } from '@/components/shared';

import { useStyles } from './NavLink.styles';

interface NavLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  opened?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ label, href, icon, opened }, ref) => {
  const { classes } = useStyles({ opened });
  return (
    <UINavLink
      ref={ref}
      component={Link}
      href={href}
      label={label}
      icon={icon}
      className={classes.navLink}
      classNames={{ icon: classes.icon }}
    />
  );
});
NavLink.displayName = 'NavLink';
