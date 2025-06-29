# Publish a component asa GitHub Release

## Release Workflow

Use the `actions/create-release` action to create a release with information like release notes and assets

Trigger this workflow on release events

## Generate release notes

Use tools like `conventional-changelog` to automatically generate release notes based on commits and issue tracker entries

## Manage assets

Upload relevant files like binaries, documentation or examples as assets along with your release

```YML
jobs:
    release:
        runs-on: ubuntu-latest

        steps:
            - name: Create release
              uses: actions/create-release@v2
              with:
                tag_name: v1_0_0
                release_name: "Release v1.0.0"
                body: "This release includes bug fixes and new features"
                draft: false
```
