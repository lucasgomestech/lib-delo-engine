#!/bin/bash
PS_ID=$(docker ps -a | grep "delo-database" | awk '{print $1}')
if [ ! "$PS_ID" == "" ]; then
    echo "Killing container $PS_ID"
    docker kill delo-database &>/dev/null
    docker rm delo-database &>/dev/null
else
    echo "Container delo-database not found"
fi

IMAGE_ID=$(docker images | grep "delo-database" | awk '{print $3}')
if [ ! "$IMAGE_ID" == "" ]; then
    echo "Removing old image"
    docker rmi -f $IMAGE_ID
else
    echo "Image not found"
fi

echo "Creating container..."

docker build . --tag lucasgomestech/delo-database:0.0.1
docker run -d --name=delo-database -p 0.0.0.0:27017:27017 lucasgomestech/delo-database:0.0.1

echo "Waiting for MongoDB to start up..."

sleep 10

echo "Done!"
