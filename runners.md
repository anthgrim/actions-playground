# GitHub Actions Runners

### GitHub-Hosted Runners

These are GitHub hosted cloud-based Virtual Machines

- Free to use
- Provided by GitHub
- Limited resources available
- Pre-configured with commonly used software
- Suitable for simple workflows and open-source projects

### Self-Hosted Runners

- More control over the environment
- Can be used to run workflows on specific hardware or software
- Require more maintenance

## Runner interaction

Interact with the runner during workflow execution

Commands:

- **set-output**: Store a value for subsequent steps
- **upload-artifact**: Upload an artifact to be used in other workflows
- **download-artifact**: Download an artifact uploaded in another workflow
- **echo**: Print a message to the workflow logs

```YML
steps:
    - name: set output
      run: echo "My output is $MY_VARIABLE"

    - name: Upload artifact
      uses: actions/upload-artifact@v3
      with:
        name: my-artifact
        path: path/to/artifact

    - name: Download artifact
      uses: actions/download-artifact@v3
      with:
        name: my-artifact
        path: path/to/download
```
