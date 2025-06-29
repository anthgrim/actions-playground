# Use Labels to Route Workflows

## Define labels

Add labels to your workflow file to specify which runners should execute it

You can use labels for different environments, operating systems, or other criteria (use the runner context for cloud runners)

## Configure self-hosted runner pools

Create runner pools with specific configurations and assign labels to them

This allows you to manage resources and ensure your workflows run on appropriate runners

## Routing examples

Use labels to route workflows to runners with specific GPUs for machine learning tasks

Use labels to route workflows to runners with specific software installed for testing

```YML
jobs:
    my_job:
        runs-on: [self-hosted, win-custom]

        steps:
            - name: Checkout registry
              uses: actions/checkout@v2

            # Other steps...
```
