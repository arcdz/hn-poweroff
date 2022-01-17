# [cmdapi](https://github.com/andreirotariu/cmdapi)

[![GitHub Repository](https://img.shields.io/static/v1.svg?color=94398d&Github&message=cmdapi&logo=github&style=for-the-badge)](https://github.com/andreirotariu/cmdapi)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/andreirotariu/cmdapi?color=%232496ed&label=Docker&logo=docker&logoColor=white&sort=date&style=for-the-badge)](https://hub.docker.com/r/andreirotariu/cmdapi)

## Usage

#### docker-compose (recommended, [click here for more info](https://docs.linuxserver.io/general/docker-compose))

```yaml
---
version: "3.8"
services:
  cmdapi:
    container_name: cmdapi
    image: andreirotariu/cmdapi:0.1.0
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Bucharest
    ports:
      - "9991:9991"
    restart: unless-stopped
```

#### docker cli ([click here for more info](https://docs.docker.com/engine/reference/commandline/cli/))

```bash
docker run -d \
  --name=cmdapi \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Europe/Bucharest \
  -p 9991:9991 \
  --restart unless-stopped \
  andreirotariu/cmdapi:0.1.0
```

## Versions

- **0.1.0** - Initial Test.

<!-- ## Building image

```
# build image
docker build -t andreirotariu/cmdapi:0.1.0 .

# run:
docker run andreirotariu/cmdapi:0.1.0 node --version
docker run -d -p 9991:9991 andreirotariu/cmdapi:0.1.0

#push to dockerhub
docker push andreirotariu/cmdapi:tagname
```

#FROM <image>:<tag> (tag is optional. default: latest) -->
