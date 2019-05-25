
const Requester = require('request-promise');
const Formatter = require('./formatter');

const makeUrl = (uri) =>
  `${uri}/api/status`;

export default function (server) {

  const config = server.config();
  const user = config.get('kibana-prometheus-exporter.user');
  const pass = config.get('kibana-prometheus-exporter.pass');
  const request = {
    uri: makeUrl(server.info.uri),
    auth: { 'user': user, 'pass': pass },
    rejectUnauthorized: false,
    json: true
  };

  console.log(request.uri);

  server.route({
    path: config.get('kibana-prometheus-exporter.path'),
    method: 'GET',
    async handler(_, h) {

      const stats = await Requester.get(request)
      const prometheusStats = Formatter(stats);

      return await h
        .response(prometheusStats)
        .type('text/plain')
        .encoding('binary');
    }
  });
}
