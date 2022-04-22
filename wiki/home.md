# Kibana-Prometheus Exporter

This Kibana plugin was born out of a project in the basement of an investment bank. Prometheus was used for all the monitoring and everything in our infrastructure stack had an exporter except Kibana. It didn't feel right leaving Kibana out of the party so this project was... hacked together, to be candid. Although it's rough around the edges, it's now used by big and small projects in all sorts of cool organizations 🤘🚀 

The exporter really is simple. But it would be unfair to assume that all the metrics make sense at first glance.  This document aims to give a concise overview of the metrics exported by this Kibana plugin.

## Metrics

#### Top level Metric

The first metric is the status of Kibana. Similar to the plugin metrics (see below). It can be in 1 of 3 states - Green (1), Yellow (0.5) or Red (0). However, you are unlikely to ever see a red status because it likely wouldn't respond to any requests.

```
kibana_status 1
```

#### Top level Metrics

The `kibana_millis_uptime` metric is how long the application has been running for in milliseconds.

```
kibana_millis_uptime 26521
```

The `kibana_heap_*` metrics represent Kibanas heap memory (bytes) usage and how much it can use.

```
kibana_heap_max_in_bytes 190599168
kibana_heap_used_in_bytes 150772280
```

The `kibana_requests_*` metrics represent how many requests have been made while Kibana has been online.

```
kibana_requests_total 0
kibana_requests_disconnects 0
```

#### Plugin Status Metrics

The plugins statuses should show up on every kibana exporter. However, depending on your version more plugins may appear. Kibana plugins can be in 1 of 3 states which the Prometheus exporter represents numerically as 1, 0.5 or 0:

  - Green (1)
  - Yellow (0.5)
  - Red (0)

```
kibana_plugin_kibana 1
kibana_plugin_elasticsearch 1
kibana_plugin_xpack_main 1
kibana_plugin_searchprofiler 1
kibana_plugin_ml 1
kibana_plugin_tilemap 1
kibana_plugin_watcher 1
kibana_plugin_license_management 1
kibana_plugin_index_management 1
kibana_plugin_timelion 1
kibana_plugin_graph 1
kibana_plugin_monitoring 1
kibana_plugin_security 1
kibana_plugin_grokdebugger 1
kibana_plugin_dashboard_mode 1
kibana_plugin_logstash 1
kibana_plugin_apm 1
kibana_plugin_console 1
kibana_plugin_console_extensions 1
kibana_plugin_notifications 1
kibana_plugin_kibana_prometheus_exporter 1
kibana_plugin_metrics 1
kibana_plugin_reporting 1
```

#### OS Load Metrics

The average calculated load of the system. The 3 represent average loads calculated for 1 minute, 5 minutes and 15 minutes intervals and are exported by Kibana itself.

```
kibana_os_load1 2.2490234375
kibana_os_load5 2.22802734375
kibana_os_load15 2.90576171875
```

#### Concurrent Connections 

The number of concurrent connections made to the Kibana instance.

```
kibana_concurrent_connections 5
```

#### Response Times

The response time average in milliseconds and the max recorded. For experience, this seems to reset often.

```
kibana_response_average 0
kibana_response_max 0
```