# Event Trigger Identification

- Review GitHub Actions logs to pinpoint the triggering event (push, pull, request, issue creation, etc)
- Logs are retained for 90 days by default for public and 400 days for private
- Use `${{ github.event_name }}` in your workflow to dynamically identify the event type

**Example**: Trigger workflow on push event and include logic to handle different event types

```YML
name: Identify event type

on: [push, pull_request, issues]

jobs:
    identify-request:
        runs-on: ubuntu-latest

        steps:
            - name: Check Event Name
              run: echo "This workflow was triggered by a ${{ github.event_name}} event."
```
