# Pass data between workflow jobs

- Share information and artifacts between jobs for efficient workflows
- Define outputs from individual steps to pass data
- Leverage environment variables for secrets and configuration
- Manage resource usage with job concurrency limits

```YML
jobs:
    build:
        runs-on: ubuntu-latest

        steps:
            - ...build steps...

            - name: Upload artifact
              uses: actions/upload-artifact@v2
              with:
                name: application
                path: build/app.zip

    test:
        runs-on: ubuntu-latest
        needs: build

        steps:
            - name: Download build artifacts
              uses: actions/download-artifact@v2
              with:
                name: application

            - name: Run Tests
              ... test steps using the downloaded application...
```
