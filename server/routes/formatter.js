
export default function (info) {
    let metrics = {};

    metrics['kibana_status'] = convert_state_to_number(info.status.overall.state);
    metrics['kibana_millis_uptime'] = info.metrics.uptime_in_millis;
    metrics['kibana_heap_max_in_bytes'] = info.metrics.process.mem.heap_max_in_bytes || 0;
    metrics['kibana_heap_used_in_bytes'] = info.metrics.process.mem.heap_used_in_bytes || 0;
    metrics['kibana_response_average'] = info.metrics.response_times.avg_in_millis || 0;
    metrics['kibana_response_max'] = info.metrics.response_times.max_in_millis || 0;
    metrics['kibana_concurrent_connections'] = info.metrics.concurrent_connections || 0;
    metrics['kibana_requests_total'] = info.metrics.requests.total || 0;
    metrics['kibana_requests_disconnects'] = info.metrics.disconnects || 0;
    metrics['kibana_os_cpu_load_average{interval="1m"}'] = info.metrics.os.cpu.load_average['1m'] || 0;
    metrics['kibana_os_cpu_load_average{interval="5m"}'] = info.metrics.os.cpu.load_average['5m'] || 0;
    metrics['kibana_os_cpu_load_average{interval="15m"}'] = info.metrics.os.cpu.load_average['15m'] || 0;

    for(var key in info.status.statuses) {
        const plugin_name = info.status.statuses[key]['id'].split(/:|@/)[1];
        
        if (plugin_name != null) {
			plugin_name = plugin_name.replace(/-/g, '_')
		}
        
        metrics['kibana_plugin_' + plugin_name] = convert_state_to_number(info.status.statuses[key]['state']);
    }

    return prometheus_style_formatter(metrics);
}

function convert_state_to_number(state) {
    if (state == "green") {
        return 1;
    }
    else if (state == "yellow") {
        return 0.5;
    }
    else {
        return 0;
    }
}

function prometheus_style_formatter(payload) {
    let prometheus_style = '';

    for (var key in payload) {
        prometheus_style += `# HELP ${key} ${key}\n`;
        prometheus_style += `# TYPE ${key} gauge\n`;
        prometheus_style += `${key} ${payload[key]}\n`;
    }

    return prometheus_style;
}
