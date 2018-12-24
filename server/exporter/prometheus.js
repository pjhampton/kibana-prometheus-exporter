
const request = require('request');
const formatter = require('./formatter');

export default function (server) {

  const config = server.config();

  server.route({
    path: config.get('kibana-prometheus-exporter.path'),
    method: 'GET',
    handler(req, reply) {

      const basePath = config.get('server').basePath.toString();
      const username = config.get('kibana-prometheus-exporter.user');
      const pass = config.get('kibana-prometheus-exporter.pass');
      const statsUrl = makeUrl(server.info.uri, basePath);
      const user = { user: username, pass: pass };
      
      getMetrics(statsUrl, user, function getMetricsCallback(error, info) {

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

function getMetrics(url, user, callback) {

  const auth = "Basic " + new Buffer(user.user + ":" + user.pass).toString("base64");

  request({
      url : url,
      headers : {
        "Authorization" : auth
      }
    }, function (error, res, body) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, JSON.parse(body));
  });
}
