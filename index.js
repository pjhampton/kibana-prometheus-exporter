
import prometheusRoute from './server/exporter/prometheus';

export default function (kibana) {
  return new kibana.Plugin({
    require: [],
    name: 'kibana-prometheus-exporter',
    uiExports: {},

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        path: Joi.string().default('/_prometheus/metrics'),
        user: Joi.string().default('default'),
        pass: Joi.string().default('default')
      }).default();
    },

    init(server, options) {
      prometheusRoute(server);
    }

  });
};
