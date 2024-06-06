---
layout: post
title: "Underrated VSCode feature: Native Tabs"
date: "Feb 1, 2024"
tags:
  - vscode
  - productivity
description:
---

At work, I often have to make changes to many repository-based projects at the same time. They can be multiple back-end projects, multiple front-end projects, documentation, infra as code, etc.

With so many projects, I used to often struggle with many VSCode windows.

I tried working with VSCode Workspaces, but they didn't really click for me.

However, there is a feature called **Native Tabs** that allows me to group all my VSCode windows together and move between them easily. Notice how each project is in a different tab:

![Native Tabs on VSCode](/assets/images/posts/vscode-native-tabs.png)


## How to setup Native Tabs

Look for Native Tabs on Settings or add `"window.nativeTabs": true` to your `settings.json`.

![Native Tabs Settings on VSCode](/assets/images/posts/vscode-native-tabs-setting.png)

Restart VSCode.

## How to move between Native Tabs

Add shortcuts to `workbench.action.showPreviousWindowTab` and `workbench.action.showNextWindowTab` to move between them without having to navigate throughout the screen with the mouse cursor.

```json
[
  {
    "key": "ctrl+shift+h",
    "command": "workbench.action.showPreviousWindowTab",
    "when": "!terminalFocus"
  },
  {
    "key": "ctrl+shift+l",
    "command": "workbench.action.showNextWindowTab",
    "when": "!terminalFocus"
  }
]
```

Also add a shortcut for creating a new Native Tab.

```json
[
  {
    "key": "ctrl+shift+t",
    "command": "workbench.action.newWindowTab"
  }
]
```

Done. Enjoy your Native Tabs.

Note: Unfortunately, this is only available on MacOS. `=/`