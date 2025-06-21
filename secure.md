# GitHub Actions Security

## Encrypted Secrets

Secure storage for sensitive data like API keys.

Accessible by workflows in the same repository.

### Setup

GitHub.com > Settings > Secrets and variables > Actions > Repository secrets

### Sample

```YML
name: My Workflow

on:
    push:
        branches: ["**"]

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v3

            - name: Install Dependencies
              run: npm install

            - name: Build
              run: npm run build

            - name: Deploy
              run: |
                # Use the value of the encrypted SECRET_KEY secret
                ./deploy.sh ${{ secrets.SECRET_KEY }}
```

## Environment Variables

GitHub.com > Settings > Secrets and variables > Actions > Repository Variables

### Defaults

Pre-set variables like **GITHUB_REPOSITORY**

Provides context about the current run. Referenced directly in workflow files

### Custom

User-defined variables for specific needs.

Use the **env** key in your workflow YAML

```YML
env:
    MY_VARIABLE: "Value"
```

## GITHUB_TOKEN Secret

Auto-generated token for authentication to interact with the GitHub API securely.

Provided in every run, no manual setup needed

```YML
name: My Workflow

on: push

jobs:
    build:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v3

            - name: Download artifacts
              uses: actions/download-artifact@v3
              with:
                name: artifacts
                path: path/to/artifacts

            - name: Run tests
              run: |
                # Use the GITHUB_TOKEN to access the private repository
                curl -H "Authorization: Bearer ${{ secrets.GITHUB_TOKEN }}"
                https://api.github.com/repos/...

            - name: Upload artifacts
              uses: actions/upload-artifact@v3
              with:
                name: test_results
                path: path/to/test_results
```

## Commands and environment variables

Commands to set env variables dynamically

`echo "VAR_NAME=value" >> $GITHUB_ENV`

This provides flexibility in setting values based on runtime conditions
