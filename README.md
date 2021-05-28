<img src=".github/kpe_banner.png" />

# Kibana Prometheus Exporter

Please note this plugin has underwent a re-write and will continue to do so until a statisfactory level of stability + testing has be realized.
Once Installed, please visit http://localhost:5601/_prometheus/metrics

<img src="https://raw.githubusercontent.com/pjhampton/kibana-prometheus-exporter/master/screenshots/kibana_prometheus.png" alt="kibana prometheus exporter">

1. [Installing](#installing)
1. [Docker](#docker)
1. [Prometheus Config](#prometheus-config)
1. [Metrics](#metrics)
1. [Versions](#versions)

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

## Versions

*The version of this plugin must match the version of Kibana you are running.* [Click here](https://github.com/pjhampton/kibana-prometheus-exporter/releases) to download the available versions. If you don't see the version you want, please feel free to open an issue to request.

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
| 7.9.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.9.3/checksum.json) | [kibana-prometheus-exporter-7.9.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.9.3)   |
| 7.9.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.9.2/checksum.json) | [kibana-prometheus-exporter-7.9.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.9.2)   |
| 7.9.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.9.1/checksum.json) | [kibana-prometheus-exporter-7.9.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.9.1)   |
| 7.9.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.9.0/checksum.json) | [kibana-prometheus-exporter-7.9.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.9.0)   |
| 7.8.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.8.1/checksum.json) | [kibana-prometheus-exporter-7.8.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.8.1)   |
| 7.8.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.8.0/checksum.json)  | [kibana-prometheus-exporter-7.8.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.8.0)   |
| 7.7.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.7.1/checksum.json) | [kibana-prometheus-exporter-7.7.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.7.1)   |
| 7.7.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.7.0/checksum.json) | [kibana-prometheus-exporter-7.7.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.7.0)   |
| 7.6.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.6.2/checksum.json)  | [kibana-prometheus-exporter-7.6.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.6.2)   |
| 7.6.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.6.1/checksum.json) | [kibana-prometheus-exporter-7.6.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.6.1)   |
| 7.6.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.6.0/checksum.json) | [kibana-prometheus-exporter-7.6.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.6.0)   |
| 7.5.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.5.2/checksum.json) | [kibana-prometheus-exporter-7.5.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.5.2)   |
| 7.5.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.5.1/checksum.json) | [kibana-prometheus-exporter-7.5.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.5.1)   |
| 7.5.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.5.0/checksum.json) | [kibana-prometheus-exporter-7.5.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.5.0)   |
| 7.4.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.4.2/checksum.json) | [kibana-prometheus-exporter-7.4.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.4.2)   |
| 7.4.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.4.0/checksum.json) | [kibana-prometheus-exporter-7.4.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.4.0)   |
| 7.3.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.3.3/checksum.json) | [kibana-prometheus-exporter-7.3.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.3)   |
| 7.3.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.3.2/checksum.json) | [kibana-prometheus-exporter-7.3.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.2)   |
| 7.3.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.3.1/checksum.json) | [kibana-prometheus-exporter-7.3.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.1)   |
| 7.3.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.3.0/checksum.json) | [kibana-prometheus-exporter-7.3.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.0)   |
| 7.2.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.2.1/checksum.json) | [kibana-prometheus-exporter-7.2.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.2.1)   |
| 7.2.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.2.0/checksum.json) | [kibana-prometheus-exporter-7.2.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.2.0)   |
| 7.1.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.1.1/checksum.json) | [kibana-prometheus-exporter-7.1.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.1.1)   |
| 7.1.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.1.0/checksum.json) | [kibana-prometheus-exporter-7.1.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.1.0)   |
| 7.0.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.0.1/checksum.json) | [kibana-prometheus-exporter-7.0.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.0.1)   |
| 7.0.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.0.0/checksum.json) | [kibana-prometheus-exporter-7.0.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.0.0)   |
| 6.8.6   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.6/checksum.json) | [kibana-prometheus-exporter-6.8.6](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.6)   |
| 6.8.5   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.5/checksum.json) | [kibana-prometheus-exporter-6.8.5](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.5)   |
| 6.8.4   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.4/checksum.json) | [kibana-prometheus-exporter-6.8.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.4)   |
| 6.8.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.3/checksum.json) | [kibana-prometheus-exporter-6.8.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.3)   |
| 6.8.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.2/checksum.json) | [kibana-prometheus-exporter-6.8.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.2)   |
| 6.8.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.1/checksum.json) | [kibana-prometheus-exporter-6.8.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.1)   |
| 6.8.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.8.0/checksum.json) | [kibana-prometheus-exporter-6.8.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.0)   |
| 6.7.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.7.1/checksum.json) | [kibana-prometheus-exporter-6.7.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.7.1)   |
| 6.7.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.7.0/checksum.json) | [kibana-prometheus-exporter-6.7.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.7.0)   |
| 6.6.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.6.2/checksum.json) | [kibana-prometheus-exporter-6.6.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.6.2)   |
| 6.6.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.6.1/checksum.json) | [kibana-prometheus-exporter-6.6.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.6.1)   |
| 6.6.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.6.0/checksum.json) | [kibana-prometheus-exporter-6.6.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.6.0)   |
| 6.5.4   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.5.4/checksum.json) | [kibana-prometheus-exporter-6.5.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.4)   |
| 6.5.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.5.3/checksum.json) | [kibana-prometheus-exporter-6.5.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.3)   |
| 6.5.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.5.2/checksum.json) | [kibana-prometheus-exporter-6.5.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.2)   |
| 6.5.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.5.1/checksum.json) | [kibana-prometheus-exporter-6.5.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.1)   |
| 6.5.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.5.0/checksum.json) | [kibana-prometheus-exporter-6.5.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.0)   |
| 6.4.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.4.3/checksum.json) | [kibana-prometheus-exporter-6.4.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.3)   |
| 6.4.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.4.2/checksum.json) | [kibana-prometheus-exporter-6.4.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.2)   |
| 6.4.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.4.1/checksum.json) | [kibana-prometheus-exporter-6.4.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.1)   |
| 6.4.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.4.0/checksum.json) | [kibana-prometheus-exporter-6.4.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.0)   |
| 6.3.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.3.2/checksum.json)  | [kibana-prometheus-exporter-6.3.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.3.2)   |
| 6.3.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.3.1/checksum.json) | [kibana-prometheus-exporter-6.3.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.3.1)   |
| 6.3.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.3.0/checksum.json) | [kibana-prometheus-exporter-6.3.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.3.0)   |
| 6.2.4   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.2.4/checksum.json) | [kibana-prometheus-exporter-6.2.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.4)   |
| 6.2.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.2.3/checksum.json) | [kibana-prometheus-exporter-6.2.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.3)   |
| 6.2.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.2.2/checksum.json) | [kibana-prometheus-exporter-6.2.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.2)   |
| 6.2.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.2.1/checksum.json) | [kibana-prometheus-exporter-6.2.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.1)   |
| 6.2.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.2.0/checksum.json) | [kibana-prometheus-exporter-6.2.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.0)   |
| 6.1.4   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.1.4/checksum.json) | [kibana-prometheus-exporter-6.1.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.4)   |
| 6.1.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.1.3/checksum.json) | [kibana-prometheus-exporter-6.1.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.3)   |
| 6.1.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.1.2/checksum.json) | [kibana-prometheus-exporter-6.1.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.2)   |
| 6.1.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.1.1/checksum.json) | [kibana-prometheus-exporter-6.1.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.1)   |
| 6.1.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.1.0/checksum.json) | [kibana-prometheus-exporter-6.1.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.0)   |
| 6.0.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.0.1/checksum.json) | [kibana-prometheus-exporter-6.0.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.0.1)   |
| 6.0.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/6.0.0/checksum.json) | [kibana-prometheus-exporter-6.0.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.0.0)   |
| 5.6.11  | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.11/checksum.json) | [kibana-prometheus-exporter-5.6.11](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.11) |
| 5.6.10  | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.10/checksum.json) | [kibana-prometheus-exporter-5.6.10](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.10) |
| 5.6.9   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.9/checksum.json) | [kibana-prometheus-exporter-5.6.9](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.9)   |
| 5.6.8   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.8/checksum.json) | [kibana-prometheus-exporter-5.6.8](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.8)   |
| 5.6.7   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.7/checksum.json) | [kibana-prometheus-exporter-5.6.7](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.7)   |
| 5.6.6   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.6/checksum.json) | [kibana-prometheus-exporter-5.6.6](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.6)   |
| 5.6.5   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.5/checksum.json) | [kibana-prometheus-exporter-5.6.5](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.5)   |
| 5.6.4   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.4/checksum.json) | [kibana-prometheus-exporter-5.6.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.4)   |
| 5.6.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.3/checksum.json) | [kibana-prometheus-exporter-5.6.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.3)   |
| 5.6.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/5.6.0/checksum.json) | [kibana-prometheus-exporter-5.6.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.0)   |

