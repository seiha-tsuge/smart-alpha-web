import { Navbar as MantineNavbar, ScrollArea, NavLink as MantineNavLink } from '@mantine/core';
import { IconBuilding, IconClockHour5, IconStar, IconUsers } from '@tabler/icons-react';

import { useNavbarState } from '@/stores/hooks';
import { useHasMounted } from '@/hooks';

interface NavLinkProps {
  label: string;
  icon: React.ReactNode;
}

const NavLink = ({ label, icon }: NavLinkProps) => {
  return <MantineNavLink label={label} icon={icon} styles={{ icon: { marginRight: '1.5rem' } }} />;
};

export const Navbar = () => {
  const { navbarDisplayPreference } = useNavbarState();

  // This is a workaround to prevent the navbar from rendering on the server side.
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  return (
    <MantineNavbar width={{ base: navbarDisplayPreference === 'opened' ? 260 : 64 }} px='sm' py='md'>
      <MantineNavbar.Section grow component={ScrollArea}>
        <NavLink label='決算速報' icon={<IconBuilding />} />
        <NavLink label='お気に入り' icon={<IconStar />} />
        <NavLink label='後で見る' icon={<IconClockHour5 />} />
        <NavLink label='投資家情報' icon={<IconUsers />} />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};
