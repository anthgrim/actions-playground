# Publish to GitHub Container Registry

## Build container image

Use Docker to build container image within a workflow

Use the `docker/build-push-action` action to automatically build and push the image to the GitHub Container Registry

## Trigger Workflow

Trigger the workflow on push events to rebuild and push the image on code changes. You can also trigger it manually or on specific branches

## Manage Image Versions

Use tags to manage different versions of your image

```YML
name: Publish to GitHub Container Registry

on: push

jobs:
    publish:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v3

            - name: Log in to GitHub Container Registry
              uses: docker/login-action@v2
              with:
                registry: ghcr.io
                username: ${{ github.actor }}
                password: ${{ secrets.GITHUB_TOKEN }}

            - name: Build and push
              uses: docker/build-push-action@v3
              with:
                push: true
                tags: ghcr.io/${{ github.repository }}/image-name:latest
```
