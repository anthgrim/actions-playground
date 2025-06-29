# Publish GitHub Packages

## Workflow Setup

### Upload Package

Use the `actions/upload-artifact` action to upload your package

### Automation

Set the workflow to trigger on push events to automatically publish on code changes

## Credential Configuration

### Repository Access

Use the `actions/checkout` action to access your repo and access the `package.json` file for authentication along with PAT

### Security

Use secret variables for secure credentials

```YML
name: Fetch GitHub Package

on: [push, pull_request]

jobs:
    fetch-package:
    runs-on: ubuntu-latest

    steps:
        - uses: actions/checkout@v3

        - name: Set up Node.js
          uses: actions/setup-node@v3
          with:
            node-version: '20.x.x'
            registry-url: 'https://npm.pkg.github.com'

        - name: Install Package
          run: npm install @your-username/package-name
          env:
            NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
