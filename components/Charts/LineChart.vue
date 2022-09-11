<script setup lang="ts">
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip,
  // types
  ChartItem,
  ChartData,
  ChartConfiguration,
} from 'chart.js'

type Props = {
  data: ChartData
}

const props = defineProps<Props>()

const root = ref<ChartItem>()

let chart: InstanceType<typeof Chart>

const chartConfig: ChartConfiguration = {
  type: 'line',
  data: props.data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
}

const chartData = computed(() => props.data)

Chart.register(
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip
)

onMounted(() => {
  if (root.value) {
    chart = new Chart(root.value, chartConfig)
  }
})

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<script lang="ts">
export default { name: 'ChartsLineChart' }
</script>

<template>
  <canvas ref="root" />
</template>
