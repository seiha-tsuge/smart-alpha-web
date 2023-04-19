import React from 'react';

import { Flex, ActionIcon, UnstyledButton } from '@mantine/core';
import { Header as MantineHeader } from '@mantine/core';

import { IconMenu2 } from '@tabler/icons-react';

export const Header = () => {
  return (
    <MantineHeader height={64}>
      <Flex align='center' justify='space-between' h='100%' px='xl'>
        <ActionIcon color='blue'>
          <IconMenu2 />
        </ActionIcon>
        <UnstyledButton>ログイン</UnstyledButton>
      </Flex>
    </MantineHeader>
  );
};
