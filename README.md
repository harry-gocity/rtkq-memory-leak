
This repo is meant to demonstrate a memory leak in RTKQ 1.9.6

- http://localhost:9090 -> Prometheus UI
- http://localhost:19191 -> Thanos Sidecar
- http://localhost:3001 -> Grafana Dashboard
- http://localhost:3000 -> Next.js

To start, run `docker compose up`.

The Next.js project should build. It runs a single page that renders the name of a pokemon. Verify you can see the page by accessing `http://localhost:3000/?name=bulbasaur&keyA=A&keyB=B`. The `keyA` and `keyB` query params serve only to fragment the RTKQ query cache.

There is a dashboard 'NodeJS Application dashboard' viewable in Grafana that shows the characteristic curve of the memory leak. Log into Grafana with admin/admin (you can skip resetting the master password). Prometheus will scrape metrics from http://localhost:3000/api/prometheus every 5 seconds. The dashboard should be visible at http://localhost:3001/d/PTSqcpJWks/nodejs-application-dashboards

Simulate load by running `node load.js`. This will make a request to the Next.js site every second. This will result in a memory leak which will be visible on the dashboard.
