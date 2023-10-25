<img src=".github/kpe_banner.png" />

<h1 align="center">Kibana Prometheus Exporter</h1>

<p align="center">
  <a href="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codeql-analysis.yml">
    <img src="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codeql-analysis.yml/badge.svg" alt="CodeQL Repo Badge" />
  </a>
  <a href="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codecov.yml">
    <img src="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/codecov.yml/badge.svg" alt="CodeCov Repo Badge" />
  </a>
  <a href="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/release-wiki.yml">
    <img src="https://github.com/pjhampton/kibana-prometheus-exporter/actions/workflows/release-wiki.yml/badge.svg?branch=main" alt="Release Wiki" />
  </a>
  <a href="https://snyk.io/test/github/pjhampton/kibana-prometheus-exporter">
    <img src="https://img.shields.io/badge/Snyk-Secured-8A2BE2.svg?logo=snyk">
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
bin/kibana-plugin install https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.10.0/kibana-prometheus-exporter-8.10.0.zip
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
| 8.10.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.10.3/checksum.json) | [kibana-prometheus-exporter-8.10.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.10.3) |
| 8.10.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.10.2/checksum.json) | [kibana-prometheus-exporter-8.10.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.10.2)   |
| 8.10.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.10.1/checksum.json) | [kibana-prometheus-exporter-8.10.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.10.1)   |
| 8.10.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.10.0/checksum.json) | [kibana-prometheus-exporter-8.10.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.10.0)   |
| 8.9.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.9.2/checksum.json) | [kibana-prometheus-exporter-8.9.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.9.2)   |
| 8.9.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.9.1/checksum.json) | [kibana-prometheus-exporter-8.9.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.9.1)   |
| 8.9.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.9.0/checksum.json) | [kibana-prometheus-exporter-8.9.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.9.0)   |
| 8.8.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.8.2/checksum.json) | [kibana-prometheus-exporter-8.8.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.8.2)   |
| 8.8.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.8.1/checksum.json) | [kibana-prometheus-exporter-8.8.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.8.1)   |
| 8.8.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.8.0/checksum.json) | [kibana-prometheus-exporter-8.8.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.8.0)   |
| 8.7.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.7.2/checksum.json) | [kibana-prometheus-exporter-8.7.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.7.2)   |
| 8.7.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.7.1/checksum.json) | [kibana-prometheus-exporter-8.7.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.7.1)   |
| 8.7.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.7.0/checksum.json) | [kibana-prometheus-exporter-8.7.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.7.0)   |
| 8.6.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.6.2/checksum.json) | [kibana-prometheus-exporter-8.6.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.6.2)   |
| 8.6.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.6.1/checksum.json) | [kibana-prometheus-exporter-8.6.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.6.1)   |
| 8.6.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.6.0/checksum.json) | [kibana-prometheus-exporter-8.6.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.6.0)   |
| 8.5.3 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.5.3/checksum.json) | [kibana-prometheus-exporter-8.5.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.5.3)   |
| 8.5.2 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.5.2/checksum.json) | [kibana-prometheus-exporter-8.5.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.5.2)   |
| 8.5.1 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.5.1/checksum.json) | [kibana-prometheus-exporter-8.5.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.5.1)   |
| 8.5.0 | [checksum.json](https://github.com/pjhampton/kibana-prometheus-exporter/releases/download/8.5.0/checksum.json) | [kibana-prometheus-exporter-8.5.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/8.5.0)   |
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

<p align="center">For releases older than 8.0.0 please see: <a href="RELEASES.md">RELEASES.md</a></p>
