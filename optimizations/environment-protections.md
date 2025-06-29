# Add Environment Protections

- Enforce security and control access to sensitive data
- Implement least privilege for secrets and environment variables
- Utilize masking to obfuscate sensitive data in logs
- Integrate advance secret management and access control tools

```YML
env:
    API_KEY: ${{ secrets.API_KEY }}

jobs:
    update-api-key:
        runs-on: ubuntu-latest
        steps:
            - name: Change API Key
              env: API_KEY: ${{ secrets.NEW_API_KEY }}
              requires:
                - approval
```
