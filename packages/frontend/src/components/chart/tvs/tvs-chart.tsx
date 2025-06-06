import type { Milestone } from '@l2beat/config'
import { assert } from '@l2beat/shared-pure'
import type { TooltipProps } from 'recharts'
import { Area, AreaChart } from 'recharts'
import type { ChartMeta } from '~/components/core/chart/chart'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipWrapper,
  useChart,
} from '~/components/core/chart/chart'
import { ChartDataIndicator } from '~/components/core/chart/chart-data-indicator'
import {
  PinkFillGradientDef,
  PinkStrokeGradientDef,
} from '~/components/core/chart/defs/pink-gradient-def'
import { getCommonChartComponents } from '~/components/core/chart/utils/get-common-chart-components'
import { formatTimestamp } from '~/utils/dates'
import { formatCurrency } from '~/utils/number-format/format-currency'
import type { ChartUnit } from '../types'

export interface TvsChartDataPoint {
  timestamp: number
  value: number
}

interface Props {
  data: TvsChartDataPoint[] | undefined
  unit: ChartUnit
  isLoading: boolean
  milestones: Milestone[] | undefined
}

export function TvsChart({ data, unit, isLoading, milestones }: Props) {
  const chartMeta = {
    value: {
      color: 'hsl(var(--chart-pink))',
      indicatorType: { shape: 'line' },
      label: unit.toUpperCase(),
    },
  } satisfies ChartMeta

  return (
    <ChartContainer
      meta={chartMeta}
      data={data}
      isLoading={isLoading}
      milestones={milestones}
    >
      <AreaChart data={data} accessibilityLayer margin={{ top: 20 }}>
        <defs>
          <PinkFillGradientDef id="fill" />
          <PinkStrokeGradientDef id="stroke" />
        </defs>
        <Area
          dataKey="value"
          fill="url(#fill)"
          fillOpacity={1}
          stroke="url(#stroke)"
          strokeWidth={2}
          isAnimationActive={false}
        />
        {getCommonChartComponents({
          data,
          isLoading,
          yAxis: {
            tickFormatter: (value: number) => formatCurrency(value, unit),
          },
        })}
        <ChartTooltip content={<TvsCustomTooltip unit={unit} />} />
      </AreaChart>
    </ChartContainer>
  )
}

export function TvsCustomTooltip({
  active,
  payload,
  label,
  unit,
}: TooltipProps<number, string> & { unit: ChartUnit }) {
  const { meta } = useChart()
  if (!active || !payload || typeof label !== 'number') return null
  return (
    <ChartTooltipWrapper>
      <div className="flex min-w-28 flex-col">
        <div className="label-value-14-medium mb-3 text-secondary">
          {formatTimestamp(label, { longMonthName: true })}
        </div>
        <div className="flex flex-col gap-2">
          {payload.map((entry) => {
            if (entry.name === undefined || entry.value === undefined)
              return null
            const config = meta[entry.name]
            assert(config, 'No config')

            return (
              <div
                key={entry.name}
                className="flex items-center justify-between gap-x-1"
              >
                <span className="flex items-center gap-1">
                  <ChartDataIndicator
                    backgroundColor={config.color}
                    type={config.indicatorType}
                  />
                  <span className="label-value-14-medium w-20 sm:w-fit">
                    {config.label}
                  </span>
                </span>
                <span className="label-value-15-medium whitespace-nowrap">
                  {formatCurrency(entry.value, unit)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </ChartTooltipWrapper>
  )
}
