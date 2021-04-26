
export default function (info : any) {
    const metrics = new Map<string, number>();

    metrics.set('kibana_status', convert_state_to_number(info.status.overall.state));
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

    for(var key in info.status.statuses) {
        let plugin_name = info.status.statuses[key]['id'].split(/:|@/)[1];
        
        if (plugin_name != null) {
            plugin_name = plugin_name.replace(/-/g, '_')
        }
        
        metrics.set('kibana_plugin_' + plugin_name, convert_state_to_number(info.status.statuses[key]['state']));
    }

    const formatted = prometheus_style_formatter(metrics);

    return formatted;
}

const convert_state_to_number = (state: string): number => {
    if (state == 'green') {
        return 1;
    }
    else if (state == 'yellow') {
        return 0.5;
    }
    else {
        return 0;
    }
}

const prometheus_style_formatter = (metrics: Map<string, number>): string => {
    let prometheus_style = '';

    for (let [key, value] of metrics) {
        prometheus_style += `# HELP ${key} ${key}\n`;
        prometheus_style += `# TYPE ${key} gauge\n`;
        prometheus_style += `${key} ${value}\n`;
    }

    return prometheus_style;
}