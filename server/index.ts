import { PluginInitializerContext } from '../../../src/core/server';
import { KibanaPrometheusExporterPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new KibanaPrometheusExporterPlugin(initializerContext);
}

export { KibanaPrometheusExporterPluginSetup, KibanaPrometheusExporterPluginStart } from './types';
