
const request = require('request');
const formatter = require('./formatter');

export default function (server) {

  const config = server.config();

  server.route({
    path: '/_prometheus/metrics',
    method: 'GET',
    handler(req, reply) {

      var basePath = config.get('server').basePath.toString();
      var username = config.get('kibana-prometheus-exporter.user').toString();
      var pass = config.get('kibana-prometheus-exporter.pass').toString();
      var statsUrl = makeUrl(server.info.uri, basePath);

      var user = { user: username, pass: pass };
      console.log(user)

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

  var auth = "Basic " + new Buffer(user.user + ":" + user.pass).toString("base64");

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
