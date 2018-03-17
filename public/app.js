
import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';

uiRoutes.enable();
uiRoutes
  .when('/', {
    template,
    resolve: {
      currentMetrics($http) {
        return $http.get('../_prometheus/metrics').then(function (response) {
          return response;
        });
      }
    }
  });

uiModules
  .get('app/kibana-prometheus-exporter', [])
  .controller('kibanaPrometheusExporterHelloWorld', function ($scope, $route, $interval) {
    const metrics = $route.current.locals.currentMetrics;
    const pre_metrics = metrics['data'];

    $scope.metrics = pre_metrics;
  });
