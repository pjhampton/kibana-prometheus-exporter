import { IRouter } from '../../../../src/core/server';
import formatter  from '../../common/formatter'
import axios from 'axios';

export function defineRoutes(router: IRouter) {
  router.get(
    {
      path: '/_prometheus/metrics',
      validate: false,
    },
    async (context, request, response) => {
      let reqHeaders = {};
      let reqProto = request.url.protocol || 'http:';
      let reqHost = request.url.host.replace(/:\d+/, '') || '127.0.0.1';
      let reqPort = request.url.port || 5601;
      let reqUrl = `${reqProto}//${reqHost}:${reqPort}/api/status`;

      if (request.headers !== undefined
          && request.headers.authorization !== undefined) {
        reqHeaders = { 'Authorization': request.headers.authorization };
      }

      const kibanaInternalStatus = await axios.get(
        reqUrl, { headers: reqHeaders }
      );
      
      const prometheusStats = formatter(kibanaInternalStatus.data);

      return response.ok({
        headers: {
          'Content-Type': 'text/plain',
        },
        body: prometheusStats,
      });
    }
  );
}
