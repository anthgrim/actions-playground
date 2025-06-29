# Define a matrix of diferent job configurations

- Run multiple jobs with diverse configurations in a single workflow
- Use parametized steps for adaptable workflows
- Leverage matrix combinations for efficient testing
- Integrate matrix with other featuers for advanced automation

```YML
jobs:
    test:
        strategy:
            matrix:
                os: [windows-latest, macos-latest]
                node_version: [14, 16]
        runs-on: ${{ matrix.os }}

        steps:
            - ... test steps using the matrix values ...
```
