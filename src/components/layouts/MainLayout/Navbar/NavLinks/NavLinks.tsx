import React from 'react';

import { Tooltip } from '@/components/shared';
import { NavLink } from './NavLink';
import { IconBuilding, IconClockHour5, IconStar, IconUsers } from '@/components/icons';

import { ROUTE } from '@/consts';

interface NavLinksProps {
  isOpen: boolean;
}

export const NavLinks = ({ isOpen }: NavLinksProps) => {
  const NavLinks = [
    { label: '決算速報', href: ROUTE.HOME, icon: <IconBuilding /> },
    { label: 'お気に入り', href: ROUTE.FAVORITES, icon: <IconStar /> },
    { label: '後で見る', href: ROUTE.WATCH_LATER, icon: <IconClockHour5 /> },
    { label: '投資家情報', href: ROUTE.INVESTOR_INFO, icon: <IconUsers /> },
  ].map((link) => {
    return isOpen ? (
      <NavLink key={link.label} {...link} opened />
    ) : (
      <Tooltip key={link.label} label={link.label} position='right' withArrow>
        <NavLink {...link} />
      </Tooltip>
    );
  });

  return <>{NavLinks}</>;
};
