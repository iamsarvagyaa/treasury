# Docker Training Course for the Absolute Beginner

To install docker in your operating system:

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### Docker commands

- `docker version` : to check the docker version and about docker information.
- `docker run <image_name>` : docker run is used to run a container from image. If image is present on your local machine then it will run container from the image, else it will pull the image from registery and run the container.
- `docker run -it <container_name> bash` : **-it** flag is used to logged into container or we can say, we will be there inside container by using **-it** flag. At last we used **bash**, so we send an instruction to run bash shell in that container.
- `docker ps` : used to check the running container.
- `docker ps -a` : similarly, **-a** flag is used to check the all running and stopped container as well.
- `docker image ls` : list all docker images.
- `docker container ls` : list all containers.
- `docker stop <container_id|container_name>` : stop the container
- `docker container prune` : remove all stopped containers
- `docker rmi <image_name|image_id>` : delete images
- `docker pull <image_name>` : pull the image from registry
- `docker run -d <image_name>` : run a container but in dettached mode.
- `docker run --name <give_container_name> <image_name>` : **--name** is used to give a name of container.

### Docker run
