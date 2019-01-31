
const Requester = require('request-promise');
const Formatter = require('./formatter');

const makeUrl = (uri, basePath) =>
  `${uri}${basePath}/api/status?extended`;

export default function (server) {

  const config = server.config();
  const basePath = config.get('server').basePath.toString();
  const user = config.get('kibana-prometheus-exporter.user');
  const pass = config.get('kibana-prometheus-exporter.pass');
  const auth = 'Basic ' + new Buffer(`${user}:${pass}`).toString('base64');
  const url = {
    uri: makeUrl(server.info.uri, basePath),
    headers: { 'Authorization': auth },
    json: true
  };

  server.route({
    path: config.get('kibana-prometheus-exporter.path'),
    method: 'GET',
    async handler(req, h) {

      const stats = await Requester.get(url)
      const prometheusStats = Formatter(stats);

      return await h
        .response(prometheusStats)
        .type('text/plain')
        .encoding('binary');
    }
  });
}
