# GitHub Actions

Refers to the entire platform and ecosystem for creating and running automated workflows within the GitHub environment

## Contexts

[GitHub Actions Contexts](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs)

## Components

```text
Workflow
    Job
        Step
            Action
```

### Workflow

Automated scripts (actions) that run when specific events occur in your repository. It's an efficient way to automate development tasks.

- CI/CD
- Versioning and release management
- Automation and notifications

### Job

Define units of work that execute specific tasks within a workflow, each job with its own steps

Elements:

- **jobs**: Keyword to declare a job
- **job_name**: Unique name for the job
- **runs-on**: Target runner type (e.g., ubuntu-latest, windows-latest, self-hosted runner name)

### Step

Define individual tasks to be executed within a job. Executed using actions or shell commands

Elements:

- **steps**: Keyword to declare steps within a job
- **uses**: (optional) Use a pre-built action from the GitHub Actions marketplace
- **action_name**: Name of the action to use
- **version**: (optional) Specific version of the action to use
- **with**: (optional) Input values for the action
- **run**: Execute a shell command within the step

#### Conditional Statements

Control the execution of steps based on specific conditions

Keywords:

- **if**: Execute a step only if a condition is true
- **else**: Execute a step if the if condition is false
- **needs**: Specify that a step depends on another job completing

### Action

It's a script invoked from within a workflow. These are pre-built scripts that provide re-usable functionality.

## Event Types

### Push Events

Workflow runs when a new commit is pushed to a specific branch or repository

Use Cases:

- Running tests after every push
- Deploy code and infrastructure to staging environment

```YML
on:
    push:
        branches: [main]
```

### Workflow Dispatch Events (manual)

Workflow runs only when manually triggered by a user.

Use Cases:

- Deploying to a production environment
- Running one-time automation scripts

```YML
on:
    workflow_dispatch:
```

### Scheduled Events

Workflow runs automatically at specific times or intervals.

Use Cases:

- Running nightly builds
- Performing hourly backups

```YML
on:
    schedule:
        - cron: "0 * * *" # Every day at midnight
```

### Webhook Events (External Services)

Workflow runs when triggered by an external event from another service.

Use Cases:

- Triggering a build when a new issue is created in GitHub.
- Deploying code to a server when a new version is released.

```YML
on:
    webhook:
        url: https://example.com/my-webhook
```

### Pull Request Events

### Issue Events

### Release Events

## Sample

```YML
# Automatically deploy a website to Netlify every time a new commit is pushed to the main branch

name: Deploy to Netlify
on:
    push:
        branches: [main]

jobs:
    deploy: # job_name: Unique name for the job
        # Set runner. These are GitHub hosted cloud-based Virtual Machines
        runs-on: ubuntu-latest

        steps: # List of steps to be executed within the job
            - name: Checkout Repository
              uses: actions/checkout@v3 # pre-built action

            - name: Set up Node.js
              uses: actions/setup-node@v2
              with:
                node-version: '14'

            - name: Install dependencies # name: custom name for the step
              run: npm install # command_to_execute: shell command within the step

            - name: Build Website
              run: npm run build

            - name: Deploy to Netlify
              uses: netlify/actions/cli@v1.1 # pre-built action
              with:
                  site_id: ${{ secrets.NETLIFY_SITE_ID }} # with: input values for the action
                  api_key: ${{ secrets.API_KEY }}
                  args: deploy --prod

    conditional_deploy:
        needs: deploy # This job depends on the completion of "deploy"
        runs-on: ubuntu-latest

        steps:
            - name: Execute specific condition
              run: echo "This step runs because the condition is true"
              if: github.ref == 'refs/heads/main' # Condition to check if branch is main

            - name: Alternative step for else
              run: echo "This step would run if the above condition is false"
              if: github.ref != 'refs/heads/main' # Opposite condition
```

## Vocabulary

### Workflow

Overall automation script defined in a YAML file

### Jobs

Units of work within a workflow, each with its own steps.

### Steps

Individual tasks within a job, executed using actions or shell commands

### Actions

Pre-built scripts that provide reusable functionality

### Shell Commands

Custom scripts written to perform specific tasks

### Runs

Specific executions of a workflow triggered by events

### Marketplace

Central repository for discovering and sharing actions
