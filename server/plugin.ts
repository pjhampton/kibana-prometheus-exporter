import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { KibanaPrometheusExporterPluginSetup, KibanaPrometheusExporterPluginStart } from './types';
import { defineRoutes } from './routes';

export class KibanaPrometheusExporterPlugin
  implements Plugin<KibanaPrometheusExporterPluginSetup, KibanaPrometheusExporterPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('kibanaPrometheusExporter: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('kibanaPrometheusExporter: Started');
    return {};
  }

  public stop() {}
}
