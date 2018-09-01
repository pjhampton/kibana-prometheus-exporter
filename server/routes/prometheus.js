
const request = require('request');
const formatter = require('./formatter');

export default function (server) {

  server.route({
    path: '/_prometheus/metrics',
    method: 'GET',
    handler(req, reply) {

      getMetrics( server.info.protocol
                , server.info.host
                , server.info.port
                , function getMetricsCallback(error, info) {

        if (error) {
          reply(error);
          return
        }

        reply(formatter(info)).type('text/plain').encoding('binary');
      });
    }
  });
}

function getMetrics(protocol, host, port, callback) {

  const url = `${protocol}://${host}:${port}/api/status?extended`;

  request(url, function (error, res, body) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, JSON.parse(body));
  });
}
