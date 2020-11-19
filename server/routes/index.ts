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

      const kibanaInternalStatus = await axios.get(
        `${request.url.protocol}//${request.url.host}/api/status`,
        {
          headers: {
            'Authorization': request.headers.authorization
          }
        }
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
