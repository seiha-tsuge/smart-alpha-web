import React from 'react';

import { Flex, ActionIcon, UnstyledButton, Header as UIHeader } from '@/components/shared';

import { IconMenu2 } from '@tabler/icons-react';

import { useNavbarState } from '@/stores/hooks';

export const Header = () => {
  const { navbarDisplayPreference, setNavbarDisplayPreference } = useNavbarState();

  const onClick = () => {
    setNavbarDisplayPreference(navbarDisplayPreference === 'opened' ? 'collapsed' : 'opened');
  };

  return (
    <UIHeader height={64}>
      <Flex align='center' justify='space-between' h='100%' px='xl'>
        <ActionIcon color='blue' onClick={onClick}>
          <IconMenu2 />
        </ActionIcon>
        <UnstyledButton>ログイン</UnstyledButton>
      </Flex>
    </UIHeader>
  );
};
