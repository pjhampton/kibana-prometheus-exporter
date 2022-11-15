<img src=".github/kpe_banner.png" />

<h1 align="center">Kibana Prometheus Exporter</h1>

<p align="center">
  <a href="https://snyk.io/test/github/pjhampton/kibana-prometheus-exporter">
    <img src="https://snyk.io/test/github/pjhampton/kibana-prometheus-exporter/badge.svg" alt="Snyk Repo Badge" />
  </a>
  <a href="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codeql-analysis.yml">
    <img src="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codeql-analysis.yml/badge.svg" alt="CodeQL Repo Badge" />
  </a>
  <a href="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codecov.yml">
    <img src="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codecov.yml/badge.svg" alt="CodeCov Repo Badge" />
  </a>
  <a href="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/release-wiki.yml">
    <img src="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/release-wiki.yml/badge.svg" alt="Release Wiki" />
  </a>
</p>

<p align="center">Once Installed, please visit http://localhost:5601/_prometheus/metrics</p>

<img src="https://raw.githubusercontent.com/pjhampton/kibana-prometheus-exporter/master/.github/kibana_prometheus.png" alt="kibana prometheus exporter">

1. [Installing](#installing)
1. [Docker](#docker)
1. [Prometheus Config](#prometheus-config)
1. [Metrics](#metrics)
1. [Releases](#releases)

## Installing

First, locate the version you require on the [release page](https://github.com/pjhampton/kibana-prometheus-exporter/releases). There is a couple of ways to install this plugin. The more common approach would be to download the correct version and run:

```
bin/kibana-plugin install https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.14.0/kibana-prometheus-exporter-7.14.0.zip
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
  scrape_interval: '10s'
  metrics_path: '_prometheus/metrics'
  static_configs:
  - targets: ['localhost:5601']
  basic_auth:
    username: 'elastic'
    password: 'changeme'
```

## Metrics 

Details on the various exported metrics are documented on the [Github wiki page](https://github.com/pjhampton/kibana-prometheus-exporter/wiki).

## Releases

*The version of this plugin must match the version of Kibana you are running.* [Click here](https://github.com/pjhampton/kibana-prometheus-exporter/releases) to download the available versions. If you don't see the version you want, please feel free to open an issue to request.

| Release | MD5 / SHA1 / SHA256 / SHA512   | Release Artifact - This must match your Kibana version |
|---------|-------------------------------|------------------------------------------------------------------|
| 8.4.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.4.3/checksum.json) | [kibana-prometheus-exporter-8.4.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.4.3)   |
| 8.4.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.4.2/checksum.json) | [kibana-prometheus-exporter-8.4.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.4.2)   |
| 8.4.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.4.1/checksum.json) | [kibana-prometheus-exporter-8.4.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.4.1)   |
| 8.4.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.4.0/checksum.json) | [kibana-prometheus-exporter-8.4.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.4.0)   |
| 8.3.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.3.1/checksum.json) | [kibana-prometheus-exporter-8.3.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.3.3)   |
| 8.3.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.3.1/checksum.json) | [kibana-prometheus-exporter-8.3.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.3.2)   |
| 8.3.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.3.1/checksum.json) | [kibana-prometheus-exporter-8.3.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.3.1)   |
| 8.3.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.3.0/checksum.json) | [kibana-prometheus-exporter-8.3.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.3.0)   |
| 8.2.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.2.3/checksum.json) | [kibana-prometheus-exporter-8.2.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.2.3)   |
| 8.2.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.2.2/checksum.json) | [kibana-prometheus-exporter-8.2.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.2.2)   |
| 8.2.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.2.1/checksum.json) | [kibana-prometheus-exporter-8.2.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.2.1)   |
| 8.2.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.2.0/checksum.json) | [kibana-prometheus-exporter-8.2.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.2.0)   |
| 8.1.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.1.3/checksum.json) | [kibana-prometheus-exporter-8.1.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.1.3)   |
| 8.1.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.1.2/checksum.json) | [kibana-prometheus-exporter-8.1.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.1.2)   |
| 8.1.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.1.1/checksum.json) | [kibana-prometheus-exporter-8.1.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.1.1)   |
| 8.1.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.1.0/checksum.json) | [kibana-prometheus-exporter-8.1.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.1.0)   |
| 8.0.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.0.1/checksum.json) | [kibana-prometheus-exporter-8.0.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.0.1)   |
| 8.0.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.0.0/checksum.json) | [kibana-prometheus-exporter-8.0.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.0.0)   |
| 7.17.4 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.17.4/checksum.json) | [kibana-prometheus-exporter-7.17.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.17.4)   |
| 7.17.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.17.3/checksum.json) | [kibana-prometheus-exporter-7.17.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.17.3)   |
| 7.17.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.17.2/checksum.json) | [kibana-prometheus-exporter-7.17.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.17.2)   |
| 7.17.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.17.1/checksum.json) | [kibana-prometheus-exporter-7.17.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.17.1)   |
| 7.17.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.17.0/checksum.json) | [kibana-prometheus-exporter-7.17.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.17.0)   |
| 7.16.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.16.3/checksum.json) | [kibana-prometheus-exporter-7.16.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.16.3)   |
| 7.16.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.16.2/checksum.json) | [kibana-prometheus-exporter-7.16.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.16.2)   |
| 7.16.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.16.1/checksum.json) | [kibana-prometheus-exporter-7.16.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.16.1)   |
| 7.15.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.15.2/checksum.json) | [kibana-prometheus-exporter-7.15.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.15.2)   |
| 7.15.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.15.1/checksum.json) | [kibana-prometheus-exporter-7.15.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.15.1)   |
| 7.15.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.15.0/checksum.json) | [kibana-prometheus-exporter-7.15.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.15.0)   |
| 7.14.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.14.1/checksum.json) | [kibana-prometheus-exporter-7.14.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.14.1)   |
| 7.14.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.14.0/checksum.json) | [kibana-prometheus-exporter-7.14.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.14.0)   |
| 7.13.4   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.13.4/checksum.json) | [kibana-prometheus-exporter-7.13.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.13.4)   |
| 7.13.3   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.13.3/checksum.json) | [kibana-prometheus-exporter-7.13.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.13.3)   |
| 7.13.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.13.2/checksum.json) | [kibana-prometheus-exporter-7.13.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.13.2)   |
| 7.13.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.13.1/checksum.json) | [kibana-prometheus-exporter-7.13.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.13.1)   |
| 7.13.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.13.0/checksum.json) | [kibana-prometheus-exporter-7.13.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.13.0)   |
| 7.12.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.12.1/checksum.json) | [kibana-prometheus-exporter-7.12.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.12.1)   |
| 7.12.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.12.0/checksum.json) | [kibana-prometheus-exporter-7.12.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.12.0)   |
| 7.11.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.11.2/checksum.json) | [kibana-prometheus-exporter-7.11.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.11.2)   |
| 7.11.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.11.1/checksum.json) | [kibana-prometheus-exporter-7.11.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.11.1)   |
| 7.11.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.11.0/checksum.json) | [kibana-prometheus-exporter-7.11.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.11.0)   |
| 7.10.2   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.10.2/checksum.json) | [kibana-prometheus-exporter-7.10.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.10.2)   |
| 7.10.1   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.10.1/checksum.json) | [kibana-prometheus-exporter-7.10.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.10.1)   |
| 7.10.0   | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/7.10.0/checksum.json) | [kibana-prometheus-exporter-7.10.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.10.0)   |

<p align="center">For releases older than 7.10.0 please see: <a href="RELEASES.md">RELEASES.md</a></p>
