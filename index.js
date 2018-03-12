
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'kibana-prometheus-exporter',
    uiExports: {
      
      app: {
        title: 'Kibana Prometheus Exporter',
        description: 'Exports Kibana&#39;s metrics in the Prometheus format',
        main: 'plugins/kibana-prometheus-exporter/app'
      },
      
      
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
    

  });
};
