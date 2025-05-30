import { getCoreRowModel, getSortedRowModel } from '@tanstack/react-table'
import { RollupsTable } from '~/components/table/rollups-table'
import { useTable } from '~/hooks/use-table'
import { scalingSummaryColumns } from '~/pages/scaling/summary/components/table/columns'
import type { ScalingSummaryEntry } from '~/server/features/scaling/summary/get-scaling-summary-entries'
import { EcosystemWidget } from './widgets/ecosystem-widget'

interface Props {
  entries: ScalingSummaryEntry[]
}

export function EcosystemProjectsTable({ entries }: Props) {
  const table = useTable({
    data: entries,
    columns: scalingSummaryColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualFiltering: true,
    initialState: {
      columnPinning: {
        left: ['#', 'logo'],
      },
      sorting: [
        {
          id: 'total',
          desc: true,
        },
      ],
    },
  })
  return (
    <EcosystemWidget className="mt-[calc(var(--spacing)*1.5)] rounded-b-none !pb-0 !pt-3 max-md:-mx-4">
      <RollupsTable table={table} />
    </EcosystemWidget>
  )
}
