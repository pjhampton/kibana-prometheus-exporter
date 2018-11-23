
import prometheusRoute from './server/routes/prometheus';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana-prometheus-exporter',
    uiExports: {
      
      app: {
        title: 'Prometheus',
        icon: 'plugins/kibana-prometheus-exporter/prometheus.png',
        description: 'Prometheus metrics for Kibana',
        main: 'plugins/kibana-prometheus-exporter/app'
      },
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        user: Joi.string().default(''),
        pass: Joi.string().default('')
      }).default();
    },

    init(server, options) {
      prometheusRoute(server);
    }

  });
};
