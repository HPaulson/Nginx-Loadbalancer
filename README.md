# Demo: Nginx as a Load Balancer

A dead simple demo of nginx as a load balancer (with a Deno api)

- To run the api:

  - Build the Docker image
    - e.g `docker build . -t deno-web-service`
  - Set `INSTANCE=your_unique_name` (can optionally use an `.env` file)
  - Run the docker image
    - e.g `docker run -p 8080:8080 --env-file .env deno-web-service`
  - Repeat for n desired instances of the api

- To run the loadbalancer:
  - Edit `backend_servers` in `nginx.conf` with the ip:port or domain of your api instances
  - If connecting to instances via private ip, set `network_mode: host` in `docker-compose.yml`
  - `docker compose up`
  - Access load balancer at port 3000
