
let payload;

function prometheus_style_formatter(payload) {

    let prometheus_style = '';

    for (var key in payload) {
        prometheus_style += key + " " + payload[key] + "\n";
    }

    return prometheus_style;
}

export default function (info) {
    payload = info;
    let metrics = {};

    metrics['kibana_name'] = payload.name;
    metrics['kibana_version'] = payload.version.number;
    metrics['kibana_status'] = payload.status.overall.state;
    metrics['kibana_uptime'] = payload.metrics.uptime_in_millis;
    metrics['kibana_heap_max_in_bytes'] = payload.metrics.process.mem.heap_max_in_bytes;
    metrics['kibana_heap_used_in_bytes'] = payload.metrics.process.mem.heap_used_in_bytes;
    metrics['kibana_response_average'] = payload.metrics.response_times.avg_in_millis;
    metrics['kibana_response_max'] = payload.metrics.response_times.max_in_millis;
    metrics['kibana_concurrent_connections'] = payload.metrics.concurrent_connections;
    metrics['kibana_requests_total'] = payload.metrics.requests.total;
    metrics['kibana_requests_disconnects'] = payload.metrics.disconnects;

    return prometheus_style_formatter(metrics);
}