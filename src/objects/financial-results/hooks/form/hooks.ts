import { useForm } from '@/libraries/mantine/form';

import { FinancialResultsInitialValues } from './initialValues';

export const useFinancialResultsQueryForm = () => {
  return useForm({
    initialValues: FinancialResultsInitialValues.query,
  });
};
