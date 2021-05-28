<img src=".github/kpe_banner.png" />

<h1 align="center">️‍🔥 Kibana Prometheus Exporter ️‍🔥</h1>

<p align="center">Once Installed, please visit http://localhost:5601/_prometheus/metrics</p>

<img src="https://raw.githubusercontent.com/pjhampton/kibana-prometheus-exporter/master/screenshots/kibana_prometheus.png" alt="kibana prometheus exporter">

1. [Installing](#installing)
1. [Docker](#docker)
1. [Prometheus Config](#prometheus-config)
1. [Metrics](#metrics)
1. [Releases](#releases)

## Installing

First, locate the version you require on the [release page](https://github.com/pjhampton/kibana-prometheus-exporter/releases). There is a couple of ways to install this plugin. The more common approach would be to download the [correct version](#versions) and run:

```
bin/kibana-plugin install https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.5.2/kibana-prometheus-exporter-6.5.2.zip
```

**Important**: Please don't build off and install from the trunk (master). This is a development / experimental branch so don't be that girl/them/guy, please. The `RELEASE/{NUM}` branches are the release branches. This process is shaped by the Kibana release process.

## Docker

You can install into your container with the following command (replace, or env set `${KIBANA_VERSION}`):

```
RUN bin/kibana-plugin install https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/${KIBANA_VERSION}/kibana-prometheus-exporter-${KIBANA_VERSION}.zip
```

## Prometheus Config

Below is an example prometheus config. 

```
- job_name: 'kibana'
  metrics_path: '_prometheus/metrics'
  static_configs:
  - targets: ['localhost:5601']
  basic_auth:
    username: 'pjhampton'
    password: 'redacted'
```

## Metrics 

Details on the various exported metrics are documented on the [Github wiki page](https://github.com/pjhampton/kibana-prometheus-exporter/wiki).

## Releases

*The version of this plugin must match the version of Kibana you are running.* [Click here](https://github.com/pjhampton/kibana-prometheus-exporter/releases) to download the available versions. If you don't see the version you want, please feel free to open an issue to request. Please note that I won't fix bugs (if any) or add additional functionality to releases older than 7.10.0. 

| Release | MD5 / SHA1 / SHA256 / SHA512   | Release Artifact - This must match your Kibana version |
|---------|-------------------------------|------------------------------------------------------------------|
| 7.13.0   |  | [kibana-prometheus-exporter-7.13.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.13.0)   |
| 7.12.1   |  | [kibana-prometheus-exporter-7.12.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.12.1)   |
| 7.12.0   |  | [kibana-prometheus-exporter-7.12.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.12.0)   |
| 7.11.2   |  | [kibana-prometheus-exporter-7.11.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.11.2)   |
| 7.11.1   |  | [kibana-prometheus-exporter-7.11.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.11.1)   |
| 7.11.0   |  | [kibana-prometheus-exporter-7.11.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.11.0)   |
| 7.10.2   |  | [kibana-prometheus-exporter-7.10.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.10.2)   |
| 7.10.1   |  | [kibana-prometheus-exporter-7.10.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.10.1)   |
| 7.10.0   |  | [kibana-prometheus-exporter-7.10.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.10.0)   |

For releases older than 7.10.0 please see: [RELEASES.md](RELEASES.md)
