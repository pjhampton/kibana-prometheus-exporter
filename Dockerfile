ARG STACK_VERSION

# https://github.com/elastic/kibana-docker
# See https://hub.docker.com/_/kibana/tags
FROM kibana:${STACK_VERSION}

ARG STACK_VERSION

# Installs Prometheus Exporter plugin
# https://github.com/pjhampton/kibana-prometheus-exporter
RUN bin/kibana-plugin install https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/${STACK_VERSION}/prometheus_exporter-${STACK_VERSION}.zip