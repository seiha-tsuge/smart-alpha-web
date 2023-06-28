import React from 'react';

import { Navbar as UINavbar } from '@/components/shared';
import { NavLinks } from './NavLinks';

import { useNavbarState } from '@/stores/hooks';
import { useHasMounted } from '@/hooks';

export const Navbar = () => {
  const { navbarDisplayPreference } = useNavbarState();

  // This is a workaround to prevent the navbar from rendering on the server side.
  const hasMounted = useHasMounted();
  if (!hasMounted) return null;

  const isOpen = navbarDisplayPreference === 'opened';

  return (
    <UINavbar width={{ base: isOpen ? 260 : 64 }} px='sm' py='md'>
      <UINavbar.Section grow>
        <NavLinks isOpen={isOpen} />
      </UINavbar.Section>
    </UINavbar>
  );
};
