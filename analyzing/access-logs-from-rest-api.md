# Identify ways to access the workflow logs from the GitHubs's REST API

- Use GitHub's REST API endpoint GET
  `/repos/{owner}/{repo}/actions/runs/{run_id}/logs
- Authenticate API request with a personal access token

**Example**: CURL command to download logs of a specific workflow run
