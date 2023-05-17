import React, { forwardRef } from 'react';
import Link from 'next/link';

import { Navbar as MantineNavbar, NavLink as MantineNavLink, Tooltip } from '@mantine/core';
import { IconBuilding, IconClockHour5, IconStar, IconUsers } from '@tabler/icons-react';

import { useNavbarState } from '@/stores/hooks';
import { useHasMounted } from '@/hooks';

import { ROUTE } from '@/consts';

import { useStyles } from './Navbar.styles';

interface NavLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ label, href, icon }, ref) => {
  const { classes } = useStyles();
  return (
    <MantineNavLink
      ref={ref}
      component={Link}
      href={href}
      label={label}
      icon={icon}
      styles={{ icon: { marginRight: '1.5rem' } }}
      className={classes.navLink}
    />
  );
});
NavLink.displayName = 'NavLink';

export const Navbar = () => {
  const { navbarDisplayPreference } = useNavbarState();

  // This is a workaround to prevent the navbar from rendering on the server side.
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  const NavLinks = [
    { label: '決算速報', href: ROUTE.HOME, icon: <IconBuilding /> },
    { label: 'お気に入り', href: ROUTE.FAVORITES, icon: <IconStar /> },
    { label: '後で見る', href: ROUTE.WATCH_LATER, icon: <IconClockHour5 /> },
    { label: '投資家情報', href: ROUTE.INVESTOR_INFO, icon: <IconUsers /> },
  ].map((link) => {
    return navbarDisplayPreference === 'opened' ? (
      <NavLink key={link.label} {...link} />
    ) : (
      <Tooltip key={link.label} label={link.label} position='right' withArrow>
        <NavLink {...link} />
      </Tooltip>
    );
  });

  return (
    <MantineNavbar width={{ base: navbarDisplayPreference === 'opened' ? 260 : 64 }} px='sm' py='md'>
      <MantineNavbar.Section grow>{NavLinks}</MantineNavbar.Section>
    </MantineNavbar>
  );
};
