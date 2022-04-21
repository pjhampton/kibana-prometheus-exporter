import { IRouter } from '../../../../src/core/server';
import formatter  from '../../common/formatter';
import fetch from 'node-fetch';

export function defineRoutes(router: IRouter, statsURI: string) {
  router.get(
    {
      path: '/_prometheus/metrics',
      validate: false,
    },
    async (context, request, response) => {
      let reqHeaders = {};
      let reqProto = request.url.protocol || 'http:';
      let reqHost = request.url.host?.replace(/:\d+/, '') || '127.0.0.1';
      let reqPort = request.url.port || 5601;
      let reqUrl = `${reqProto}//${reqHost}:${reqPort}${statsURI}`;

      if (request.headers !== undefined
          && request.headers.authorization !== undefined) {
        reqHeaders = { 'Authorization': request.headers.authorization };
      }

      const kbnInternalStatusRequest = await fetch(reqUrl, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          ...reqHeaders
        }
      });

      const kbnMetrics = await kbnInternalStatusRequest.json();
      const promMetrics = formatter(kbnMetrics);

      return response.ok({
        headers: {
          'Content-Type': 'text/plain',
        },
        body: promMetrics,
      });
    }
  );
}
