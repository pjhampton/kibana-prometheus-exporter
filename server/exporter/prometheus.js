
const Requester = require('request-promise');
const Formatter = require('./formatter');

const makeUrl = (uri, base, path) =>
  `${uri}${base ? path : ''}/api/status?extended`;

export default function (server) {

  const config = server.config();
  const path = config.get('server.basePath');
  const base = config.get('server.rewriteBasePath');
  const user = config.get('kibana-prometheus-exporter.user');
  const pass = config.get('kibana-prometheus-exporter.pass');
  const request = {
    uri: makeUrl(server.info.uri, base, path),
    auth: { 'user': user, 'pass': pass },
    rejectUnauthorized: false,
    json: true
  };

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
