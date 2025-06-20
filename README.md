# GitHub Actions

Refers to the entire platform and ecosystem for creating and running automated workflows within the GitHub environment

## Components

### Workflow

Automated scripts (actions) that run when specific events occur in your repository. It's an efficient way to automate development tasks.

- CI/CD
- Versioning and release management
- Automation and notifications

### Job

### Step

### Action

It's a script invoked from within a workflow.

## Event Types

### Push Events

Workflow runs when a new commit is pushed to a specific branch or repository

Use Cases:

- Running tests after every push
- Deploy code and infrastructure to staging environment

```YAML
on:
    push:
        branches: [main]
```

### Workflow Dispatch Events (manual)

Workflow runs only when manually triggered by a user.

Use Cases:

- Deploying to a production environment
- Running one-time automation scripts

```YAML
on:
    workflow_dispatch:
```

### Scheduled Events

Workflow runs automatically at specific times or intervals.

Use Cases:

- Running nightly builds
- Performing hourly backups

```YAML
on:
    schedule:
        - cron: "0 * * *" # Every day at midnight
```

### Webhook Events (External Services)

Workflow runs when triggered by an external event from another service.

Use Cases:

- Triggering a build when a new issue is created in GitHub.
- Deploying code to a server when a new version is released.

```YAML
on:
    webhook:
        url: https://example.com/my-webhook
```

### Pull Request Events

### Issue Events

### Release Events
