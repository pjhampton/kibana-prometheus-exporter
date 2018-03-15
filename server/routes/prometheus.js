const request = require('request');
const formatter = require('./formatter');

function getInfo(callback) {

  request('http://localhost:5601/api/status', function (error, res, body) {
    if (error) {
      callback(error);
      return;
    }

    callback(null, JSON.parse(body));
  });
}

export default function (server) {

  server.route({
    path: '/_prometheus/metrics',
    method: 'GET',
    handler(req, reply) {

      // call getInfo and it will call getInfoCallback() when it is done 
      getInfo(function getInfoCallback(error, info) {
        if (error) {
          reply(error);
          return
        }

        reply(formatter(info));
      });
    }
  });
}