
const fs = require('fs');
const Requester = require('request-promise');
const Formatter = require('./formatter');

const makeUrl = (uri, path) =>
  `${uri}${path}/api/status?extended`;

export default function (server) {

  const config = server.config();
  const path = config.get('server').basePath.toString();
  const user = config.get('kibana-prometheus-exporter.user');
  const pass = config.get('kibana-prometheus-exporter.pass');
  const sslEnabled = config.get('server.ssl.enabled');
  const sslCert = config.get('server.ssl.certificate');
  const sslKey = config.get('server.ssl.key');

  const request = {
    uri: makeUrl(server.info.uri, path),
    auth: { 'user': user, 'pass': pass },
    json: true
  };

  if (sslEnabled && sslCert && sslKey) {
    request['cert'] = fs.readFileSync(sslCert);
    request['key'] = fs.readFileSync(sslKey);
  }

  server.route({
    path: config.get('kibana-prometheus-exporter.path'),
    method: 'GET',
    async handler(req, h) {

      const stats = await Requester.get(request)
      const prometheusStats = Formatter(stats);

      return await h
        .response(prometheusStats)
        .type('text/plain')
        .encoding('binary');
    }
  });
}
