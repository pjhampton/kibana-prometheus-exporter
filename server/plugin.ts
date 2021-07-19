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
    this.logger.debug('kibanaPrometheusExporter: Setting up');
    const fullStatsURI = core.http.basePath.prepend("/api/status")
    const router = core.http.createRouter();

    defineRoutes(router, fullStatsURI);
    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('kibanaPrometheusExporter: Started');
    return {};
  }

  public stop() {
    this.logger.debug('kibanaPrometheusExporter: Stopped')
  }
}
