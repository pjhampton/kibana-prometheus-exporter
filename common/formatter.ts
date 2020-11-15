
export default function (info : any) {
    let metrics: any = {};

    metrics['kibana_status'] = convert_state_to_number(info.status.overall.state);
    metrics['kibana_millis_uptime'] = info.metrics.process.uptime_in_millis;
    metrics['kibana_heap_max_in_bytes'] = info.metrics.process.memory.heap.total_in_bytes || 0;
    metrics['kibana_heap_used_in_bytes'] = info.metrics.process.memory.heap.used_in_bytes || 0;
    metrics['kibana_response_average'] = info.metrics.response_times.avg_in_millis || 0;
    metrics['kibana_response_max'] = info.metrics.response_times.max_in_millis || 0;
    metrics['kibana_concurrent_connections'] = info.metrics.concurrent_connections || 0;
    metrics['kibana_requests_total'] = info.metrics.requests.total || 0;
    metrics['kibana_requests_disconnects'] = info.metrics.requests.disconnects || 0;
    metrics['kibana_os_load1'] = info.metrics.os.load['1m'] || 0;
    metrics['kibana_os_load5'] = info.metrics.os.load['5m'] || 0;
    metrics['kibana_os_load15'] = info.metrics.os.load['15m'] || 0;

    for(var key in info.status.statuses) {
        let plugin_name = info.status.statuses[key]['id'].split(/:|@/)[1];
        
        if (plugin_name != null) {
            plugin_name = plugin_name.replace(/-/g, '_')
        }
        
        metrics['kibana_plugin_' + plugin_name] = convert_state_to_number(info.status.statuses[key]['state']);
    }

    return prometheus_style_formatter(metrics);
}

function convert_state_to_number(state: string) {
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

function prometheus_style_formatter(payload: object) {
    let prometheus_style = '';

    for (let kv of Object.entries(payload)) {
        prometheus_style += `# HELP ${kv[0]} ${kv[0]}\n`;
        prometheus_style += `# TYPE ${kv[0]} gauge\n`;
        prometheus_style += `${kv[0]} ${kv[1]}\n`;
    }

    return prometheus_style;
}