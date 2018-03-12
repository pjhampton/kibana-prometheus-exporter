export default function (server) {

  server.route({
    path: '/api/kibana-prometheus-exporter/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
