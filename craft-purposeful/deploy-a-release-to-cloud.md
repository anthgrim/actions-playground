# Deploy a release to the Azure cloud

## Cloud platform integration

Use ARM and Bicep to automate deployments

Use tools like the Azure CLI to interact with specific services

## Trigger deployment

Trigger the deployment workflow on release events to automatically deploy new code to your cloud environment

You can also trigger it manually or on specific tags

## Manage environments

Use different workflows or environment variables to deploy to different environments like staging and production

```YML
# AWS
jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2

            - name: Login to AWS
              if: env.DEPLOY_TARGET == 'aws'
              uses: aws-actions/configure-aws-credentials@v1
              with:
                aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
                aws-secret-access-key: ${{ secrets.AWS_SECREC_ACCESS_KEY }}
                region: ${{ env.AWS_REGION }}

            - name: Deploy application to AWS
              if: env.DEPLOY_TARGET == 'aws'
              run: aws deploy --application-name ${{ env.AWS_APPLICATION_NAME }} --version ${{ github.sha }}
```

```YML
# Azure
jobs:
    deploy:
        runs-on: ubuntu-latest

        steps:
            - uses: actions/checkout@v2

            - name: Login to Azure
              if: env.DEPLOY_TARGET == 'azure'
              uses: azure/login@v1
              with:
                creds: ${{ secrets.AZURE_CREDENTIALS }}

            - name: Deploy application to Azure
              if: env.DEPLOY_TARGET == 'azure'
              run: az webapp deployment create
              --resource-group ${{ env.AZURE_RESOURCE_GROUP }}
              --name ${{ env.AZURE_APP_NAME }}
              --slot ${{ env.AZURE_SLOT }}
              --source ${{ github.sha }}


```
