# Caching Workflow Dependencies

Avoid re-downloading dependencies for every job run

Cache specific paths or directories for faster execution

Use multi-level cache for nested dependencies

Set cache expiration based on file changes or workflow tags

```YML
jobs:
    build:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3

            - name: Cache NodeJS modules
              uses: actions/cache@v2
              with:
                path: node_modules
                key: ${{ runner.or }}-node- ${{ hashFiles('package-lock.json') }}
                restore-keys: |
                    ${{ runner.os }}-node
```
