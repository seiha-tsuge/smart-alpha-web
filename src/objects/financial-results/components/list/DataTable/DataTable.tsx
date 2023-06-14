import React, { useMemo } from 'react';

import { DataTable as UIDataTable } from '@/components/shared';
import type { ColumnDef } from '@/components/shared';

interface Person {
  name: string;
  age: number;
}

const data: Person[] = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

export const DataTable = () => {
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        mantineTableHeadCellProps: { sx: { color: 'green' } }, //custom props
      },
      {
        accessorFn: (originalRow) => originalRow.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: <i style={{ color: 'red' }}>Age</i>, //optional custom markup
      },
    ],
    [],
  );

  return <UIDataTable data={data} columns={columns} />;
};
