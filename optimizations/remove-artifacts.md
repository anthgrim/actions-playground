# Remove Artifacts from GitHub

- Automatically remove outdated or unused artifacts
- 90 day retention for artifacts in public repos
- 30 day retention for artifacts in private repos
- Integrate cleanup actions with workflow triggers
- Use different retention policies for diverse artifact types
- Leverage GitHub's built-in artifact management for control

```YML
jobs:
    cleanup:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/stale@v1
              with:
                days: 7
                repository: ${{ github.repository }}
                token: ${{ secrets.GITHUB_TOKEN }}
```
