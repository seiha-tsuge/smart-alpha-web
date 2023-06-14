import { MantineReactTable } from 'mantine-react-table';
import type { MantineReactTableProps as DataTableProps, MRT_ColumnDef as ColumnDef } from 'mantine-react-table';

export type { DataTableProps, ColumnDef };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<T extends Record<string, any>>({ ...props }: DataTableProps<T>) {
  return (
    <MantineReactTable<T>
      enableFullScreenToggle={false}
      enableGlobalFilter={false}
      enableHiding={false}
      enableDensityToggle={false}
      enableColumnFilters={false}
      enableTopToolbar={false}
      enableColumnActions={false}
      mantineTableProps={{
        withBorder: false,
        highlightOnHover: false,
      }}
      mantinePaperProps={{
        shadow: '',
        withBorder: false,
      }}
      {...props}
    />
  );
}
