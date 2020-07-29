# Descentralized Loan Engine Database

Docker container with MongoDB used for local development.

## Running the database

1. Make sure the current image on your machine is no longer necessary. The
image and container will be recreated from scratch.

2. Execute reload-database.sh to create and start the container:

   ```bash
   ./reload-database.sh
   ```

3. Check if the container 'delo-database' is up and running:

   ```bash
   docker ps
   ```

## Connecting to the database

1. Open MongoDB Compass or your prefered database tool;

2. Create a new MongoDB connection, with the following properties:

   * **Host**: localhost
   * **Port**: 27017
   * **User**: mongoadmin
   * **Password**: mongopass

All set! Now you can query and manipulate the database.
