import { IRouter } from '../../../../src/core/server';
import formatter  from '../../common/formatter'
import axios from 'axios';

const _makeUrl = (uri: string, base: string, path:string ) =>
  `${uri}${base ? path : ''}/api/status`;

export function defineRoutes(router: IRouter) {
  router.get(
    {
      path: '/_prometheus/metrics',
      validate: false,
    },
    async (context, request, response) => {

      const kibanaInternalStatus = await axios.get("http://localhost:5601/api/status");
      // this.logger.debug(`Kibana status response: ${resp.status} ${JSON.stringify(resp.data)}`);
      // console.log(JSON.stringify(kibanaInternalStatus.data));

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
