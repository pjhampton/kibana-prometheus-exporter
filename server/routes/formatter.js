
export default function (info) {
    let metrics = {};

    metrics['kibana_name'] = info.name;
    metrics['kibana_version'] = info.version.number;
    metrics['kibana_status'] = info.status.overall.state;
    metrics['kibana_uptime'] = info.metrics.uptime_in_millis;
    metrics['kibana_heap_max_in_bytes'] = info.metrics.process.mem.heap_max_in_bytes || 0;
    metrics['kibana_heap_used_in_bytes'] = info.metrics.process.mem.heap_used_in_bytes || 0;
    metrics['kibana_response_average'] = info.metrics.response_times.avg_in_millis || 0;
    metrics['kibana_response_max'] = info.metrics.response_times.max_in_millis || 0;
    metrics['kibana_concurrent_connections'] = info.metrics.concurrent_connections || 0;
    metrics['kibana_requests_total'] = info.metrics.requests.total || 0;
    metrics['kibana_requests_disconnects'] = info.metrics.disconnects || 0;

    return prometheus_style_formatter(metrics);
}

function prometheus_style_formatter(payload) {
    let prometheus_style = '';

    for (var key in payload) {
        prometheus_style += `# HELP ${key}\n`;
        prometheus_style += `# TYPE ${key} gauge\n`;
        prometheus_style += `${key} ${payload[key]}\n`;
    }

    return prometheus_style;
}
