export default function (server) {

  server.route({
      path: '/_prometheus/metrics',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
