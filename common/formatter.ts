
interface PrometheusMetric {
  type: String;
  value: number;
}

const stateToScalar = (state: string): number => {
  if (state == 'available') {
    return 1;
  } else if (state == 'degraded') {
    return 0.5;
  } else if (state == 'unavailable') {
    return 0;
  } else {
    return -1;
  }
}

const prometheusMetricsFormatter = (metrics: Map<string, number>): string => {
  let prometheusMetricBlock = '';

  for (let [key, value] of metrics) {
    prometheusMetricBlock += `# HELP ${key} ${key}\n`;
    prometheusMetricBlock += `# TYPE ${key} gauge\n`;
    prometheusMetricBlock += `${key} ${value}\n`;
  }

  return prometheusMetricBlock;
}

export default function (info : any) {
  const metrics = new Map<String, number>();

  metrics.set('kibana_status', stateToScalar(info.status.overall.level));
  metrics.set('kibana_millis_uptime', info.metrics.process.uptime_in_millis);
  metrics.set('kibana_heap_max_in_bytes', info.metrics.process.memory.heap.size_limit || 0);
  metrics.set('kibana_heap_used_in_bytes', info.metrics.process.memory.heap.used_in_bytes || 0);
  metrics.set('kibana_response_average', info.metrics.response_times.avg_in_millis || 0);
  metrics.set('kibana_response_max', info.metrics.response_times.max_in_millis || 0);
  metrics.set('kibana_concurrent_connections', info.metrics.concurrent_connections || 0);
  metrics.set('kibana_requests_total', info.metrics.requests.total || 0);
  metrics.set('kibana_requests_disconnects', info.metrics.requests.disconnects || 0);
  metrics.set('kibana_os_load1', info.metrics.os.load['1m'] || 0);
  metrics.set('kibana_os_load5', info.metrics.os.load['5m'] || 0);
  metrics.set('kibana_os_load15', info.metrics.os.load['15m'] || 0);
  metrics.set('kibana_os_uptime', info.metrics.os['uptime_in_millis'] || 0);
  metrics.set('kibana_os_mem_bytes_free', info.metrics.os.memory['free_in_bytes'] || 0);
  metrics.set('kibana_os_mem_bytes_used', info.metrics.os.memory['used_in_bytes'] || 0);
  metrics.set('kibana_os_mem_bytes_total', info.metrics.os.memory['total_in_bytes'] || 0);
  
  info.status.plugins.forEach(pluginName => {
    metrics.set('kibana_plugin_' + pluginName, stateToScalar(info.status.plugins[pluginName]['level']));
  });

  return prometheusMetricsFormatter(metrics)
}
