
import prometheusRoute from './server/routes/prometheus';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana-prometheus-exporter',

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        cors: Joi.when('$dev', {
          is: true,
          then: Joi.boolean().default(true),
          otherwise: Joi.boolean().default(true)
        })
      }).default();
    },

    init(server, options) {
      prometheusRoute(server);
    }
  });
};
