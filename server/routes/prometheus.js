
const request = require('request');
const formatter = require('./formatter');

export default function (server) {

  const config = server.config();

  server.route({
    path: '/_prometheus/metrics',
    method: 'GET',
    handler(req, reply) {

        var basePath = config.get('server').basePath.toString();
        var statsUrl = makeUrl(server.info.uri, basePath);

        getMetrics(statsUrl, function getMetricsCallback(error, info) {

        if (error) {
          reply(error);
          return
        }

        reply(formatter(info)).type('text/plain').encoding('binary');
      });
    }
  });
}

function makeUrl(uri, basePath) {
  return `${uri}${basePath}/api/status?extended`;
}

function getMetrics(url, callback) {

  request(url, function (error, res, body) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, JSON.parse(body));
  });
}
