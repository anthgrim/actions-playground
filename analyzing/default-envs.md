# Default environment variables

- Use built-in variables like GITHUB_SHA and GITHUB_REPOSITORY
- Incorporate these variables in workflow steps for dynamic behavior

**Example** Using GITHUBG_SHA to tag a built docker image

```YML
name: Tag Docker Image

on: push

jobs:
    docker:
        runs-on: ubuntu-latest

        steps:

        - name: Checkout code
          uses: actions/checkout@v2

        - name: Build and Tag Docker image
          run: |
            # Uses github sha to tag the docker image
            docker build -t my-app:${{ github.sha }}
```
