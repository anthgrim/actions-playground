# Use Database and Service Containers in a GitHub Action Workflow

## Database Container

Use tools like `docker-compose` to define and manage database containers like Postgres or MySQL

Start the container before running your tests or application

## Service container

Use service containers for Redis Caching, web servers or background workers

Use environment variables to configure service connections within your workflow

```YML
name: DB Workflow

on: push

jobs:
    test:
        runs-on: ubuntu-latest

        services: # sidecard containers
            postgres:
                image: postgres:latest
                eng:
                    POSTGRES_PASSWORD: postgres
                ports:
                    - 5432:5432

        steps:
            - uses: actions/checkout@v3
            - run: |
                # add commands to interact with database
```
