# Kibana Prometheus Exporter 

A Kibana plugin that exposes metrics in the Prometheus format.
Once Installed, please visit http://localhost:5601/_prometheus/metrics

1) [Installing](#installing)
2) [Docker](#docker)
3) [Metrics](#metrics)
4) [Support](#support)
5) [Versions](#versions)

---

<img src="https://raw.githubusercontent.com/pjhampton/kibana-prometheus-exporter/master/screenshots/kibana_prometheus.png" alt="kibana prometheus exporter">

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

## Metrics 

Details on the various exported metrics are documented on the [Github wiki page](https://github.com/pjhampton/kibana-prometheus-exporter/wiki).

## Support

I don't accept donations for my OSS contributions, but if you would like to say thanks and show your support then please donate to [Assisi NI](https://www.assisi-ni.org/), [Dogs Trust](https://www.dogstrust.org.uk/) and / or your local guide dog charity. :dog: 

## Versions

| Version | Release Artifact - The version of the plugin must match your version of Kibana / Elasticsearch                   |
|---------|------------------------------------------------------------------------------------------------------------------|
| 7.4.1   | [kibana-prometheus-exporter-7.4.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.4.1)   |
| 7.4.0   | [kibana-prometheus-exporter-7.4.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.4.0)   |
| 7.3.2   | [kibana-prometheus-exporter-7.3.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.2)   |
| 7.3.1   | [kibana-prometheus-exporter-7.3.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.1)   |
| 7.3.0   | [kibana-prometheus-exporter-7.3.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.3.0)   |
| 7.2.1   | [kibana-prometheus-exporter-7.2.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.2.1)   |
| 7.2.0   | [kibana-prometheus-exporter-7.2.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.2.0)   |
| 7.1.1   | [kibana-prometheus-exporter-7.1.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.1.1)   |
| 7.1.0   | [kibana-prometheus-exporter-7.1.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.1.0)   |
| 7.0.2   | [kibana-prometheus-exporter-7.0.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.0.2)   |
| 7.0.1   | [kibana-prometheus-exporter-7.0.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.0.1)   |
| 7.0.0   | [kibana-prometheus-exporter-7.0.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/7.0.0)   |
| 6.8.3   | [kibana-prometheus-exporter-6.8.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.3)   |
| 6.8.2   | [kibana-prometheus-exporter-6.8.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.2)   |
| 6.8.1   | [kibana-prometheus-exporter-6.8.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.1)   |
| 6.8.0   | [kibana-prometheus-exporter-6.8.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.8.0)   |
| 6.7.1   | [kibana-prometheus-exporter-6.7.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.7.1)   |
| 6.7.0   | [kibana-prometheus-exporter-6.7.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.7.0)   |
| 6.6.2   | [kibana-prometheus-exporter-6.6.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.6.2)   |
| 6.6.1   | [kibana-prometheus-exporter-6.6.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.6.1)   |
| 6.6.0   | [kibana-prometheus-exporter-6.6.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.6.0)   |
| 6.5.4   | [kibana-prometheus-exporter-6.5.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.4)   |
| 6.5.3   | [kibana-prometheus-exporter-6.5.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.3)   |
| 6.5.2   | [kibana-prometheus-exporter-6.5.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.2)   |
| 6.5.1   | [kibana-prometheus-exporter-6.5.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.1)   |
| 6.5.0   | [kibana-prometheus-exporter-6.5.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.5.0)   |
| 6.4.3   | [kibana-prometheus-exporter-6.4.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.3)   |
| 6.4.2   | [kibana-prometheus-exporter-6.4.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.2)   |
| 6.4.1   | [kibana-prometheus-exporter-6.4.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.1)   |
| 6.4.0   | [kibana-prometheus-exporter-6.4.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.4.0)   |
| 6.3.2   | [kibana-prometheus-exporter-6.3.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.3.2)   |
| 6.3.1   | [kibana-prometheus-exporter-6.3.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.3.1)   |
| 6.3.0   | [kibana-prometheus-exporter-6.3.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.3.0)   |
| 6.2.4   | [kibana-prometheus-exporter-6.2.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.4)   |
| 6.2.3   | [kibana-prometheus-exporter-6.2.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.3)   |
| 6.2.2   | [kibana-prometheus-exporter-6.2.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.2)   |
| 6.2.1   | [kibana-prometheus-exporter-6.2.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.1)   |
| 6.2.0   | [kibana-prometheus-exporter-6.2.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.2.0)   |
| 6.1.4   | [kibana-prometheus-exporter-6.1.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.4)   |
| 6.1.3   | [kibana-prometheus-exporter-6.1.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.3)   |
| 6.1.2   | [kibana-prometheus-exporter-6.1.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.2)   |
| 6.1.1   | [kibana-prometheus-exporter-6.1.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.1)   |
| 6.1.0   | [kibana-prometheus-exporter-6.1.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.1.0)   |
| 6.0.1   | [kibana-prometheus-exporter-6.0.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.0.1)   |
| 6.0.0   | [kibana-prometheus-exporter-6.0.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/6.0.0)   |
| 5.6.11  | [kibana-prometheus-exporter-5.6.11](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.11) |
| 5.6.10  | [kibana-prometheus-exporter-5.6.10](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.10) |
| 5.6.9   | [kibana-prometheus-exporter-5.6.9](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.9)   |
| 5.6.8   | [kibana-prometheus-exporter-5.6.8](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.8)   |
| 5.6.7   | [kibana-prometheus-exporter-5.6.7](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.7)   |
| 5.6.6   | [kibana-prometheus-exporter-5.6.6](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.6)   |
| 5.6.5   | [kibana-prometheus-exporter-5.6.5](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.5)   |
| 5.6.4   | [kibana-prometheus-exporter-5.6.4](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.4)   |
| 5.6.3   | [kibana-prometheus-exporter-5.6.3](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.3)   |
| 5.6.2   | [kibana-prometheus-exporter-5.6.2](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.2)   |
| 5.6.1   | [kibana-prometheus-exporter-5.6.1](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.1)   |
| 5.6.0   | [kibana-prometheus-exporter-5.6.0](https://github.com/pjhampton/kibana-prometheus-exporter/releases/tag/5.6.0)   |

*The version of this plugin must match the version of Kibana you are running.* [Click here](https://github.com/pjhampton/kibana-prometheus-exporter/releases) to download the available versions. If you don't see the version you want, please feel free to open an issue to request.

