import formatter from './formatter'

describe("JSON converted to Promethues metrics", () => {
  const mockApiResponse = {
    status: {
      overall: {
        level: 'available'
      },
      plugins: {
        plugin1: {
          level: 'available'
        },
        plugin2: {
          level: 'unavailable'
        }
      }
    },
    metrics: {
      process: {
        uptime_in_millis: 12345,
        memory: {
          heap: {
            size_limit: 1024,
            used_in_bytes: 512
          }
        }
      },
      response_times: {
        avg_in_millis: 50,
        max_in_millis: 100
      },
      concurrent_connections: 10,
      requests: {
        total: 1000,
        disconnects: 10
      },
      os: {
        load: {
          '1m': 0.5,
          '5m': 0.3,
          '15m': 0.1
        },
        memory: {
          total_in_bytes: 1000000,
          free_in_bytes: 500000,
          used_in_bytes: 500000
        },
        uptime_in_millis: 60000
      }
    }
  };

  const prometheusOutput = `# HELP kibana_status kibana_status
# TYPE kibana_status gauge
kibana_status 1
# HELP kibana_millis_uptime kibana_millis_uptime
# TYPE kibana_millis_uptime gauge
kibana_millis_uptime 12345
# HELP kibana_heap_max_in_bytes kibana_heap_max_in_bytes
# TYPE kibana_heap_max_in_bytes gauge
kibana_heap_max_in_bytes 1024
# HELP kibana_heap_used_in_bytes kibana_heap_used_in_bytes
# TYPE kibana_heap_used_in_bytes gauge
kibana_heap_used_in_bytes 512
# HELP kibana_response_average kibana_response_average
# TYPE kibana_response_average gauge
kibana_response_average 50
# HELP kibana_response_max kibana_response_max
# TYPE kibana_response_max gauge
kibana_response_max 100
# HELP kibana_concurrent_connections kibana_concurrent_connections
# TYPE kibana_concurrent_connections gauge
kibana_concurrent_connections 10
# HELP kibana_requests_total kibana_requests_total
# TYPE kibana_requests_total gauge
kibana_requests_total 1000
# HELP kibana_requests_disconnects kibana_requests_disconnects
# TYPE kibana_requests_disconnects gauge
kibana_requests_disconnects 10
# HELP kibana_os_load1 kibana_os_load1
# TYPE kibana_os_load1 gauge
kibana_os_load1 0.5
# HELP kibana_os_load5 kibana_os_load5
# TYPE kibana_os_load5 gauge
kibana_os_load5 0.3
# HELP kibana_os_load15 kibana_os_load15
# TYPE kibana_os_load15 gauge
kibana_os_load15 0.1
# HELP kibana_os_mem_bytes_total kibana_os_mem_bytes_total
# TYPE kibana_os_mem_bytes_total gauge
kibana_os_mem_bytes_total 1000000
# HELP kibana_os_mem_bytes_free kibana_os_mem_bytes_free
# TYPE kibana_os_mem_bytes_free gauge
kibana_os_mem_bytes_free 500000
# HELP kibana_os_mem_bytes_used kibana_os_mem_bytes_used
# TYPE kibana_os_mem_bytes_used gauge
kibana_os_mem_bytes_used 500000
# HELP kibana_os_uptime kibana_os_uptime
# TYPE kibana_os_uptime gauge
kibana_os_uptime 60000
# HELP kibana_plugin_plugin1 kibana_plugin_plugin1
# TYPE kibana_plugin_plugin1 gauge
kibana_plugin_plugin1 1
# HELP kibana_plugin_plugin2 kibana_plugin_plugin2
# TYPE kibana_plugin_plugin2 gauge
kibana_plugin_plugin2 0
`

  test("when receiving a mock payload", () => {
    expect(formatter(mockApiResponse)).toBe(prometheusOutput);
  })
});