
export default function (info) {
    let metrics = {};

    metrics['kibana_status'] = convert_state_to_number(info.status.overall.state);
    // metrics['kibana_millis_uptime']

    for(var key in info.status.statuses) {
        let plugin_name = info.status.statuses[key]['id'].split(/:|@/)[1];
        
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
