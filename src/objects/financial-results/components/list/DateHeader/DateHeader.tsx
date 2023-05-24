import React from 'react';

import { Group, ActionIcon } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import { useFinancialResultsQueryForm } from '@/objects/financial-results/hooks/form';

import { addDaysToDate, subtractDaysFromDate } from '@/utils/date';

export const DateHeader = () => {
  const form = useFinancialResultsQueryForm();

  const incrementDate = () => {
    const date = form.getInputProps('date').value;
    form.setFieldValue('date', addDaysToDate(date, 1));
  };

  const decrementDate = () => {
    const date = form.getInputProps('date').value;
    form.setFieldValue('date', subtractDaysFromDate(date, 1));
  };

  return (
    <Group>
      <ActionIcon variant='transparent' onClick={decrementDate}>
        <IconChevronLeft size='1rem' />
      </ActionIcon>

      <DatePickerInput valueFormat='YYYY/MM/DD' {...form.getInputProps('date')} />

      <ActionIcon variant='transparent' onClick={incrementDate}>
        <IconChevronRight size='1rem' />
      </ActionIcon>
    </Group>
  );
};
