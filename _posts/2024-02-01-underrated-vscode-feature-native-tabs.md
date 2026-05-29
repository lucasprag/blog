---
layout: post
title: "VS Code Native Tabs: manage multiple projects without juggling windows"
date: "Feb 1, 2024"
tags:
  - vscode
  - productivity
description: "VS Code Native Tabs let you group all your project windows into one tabbed interface — no more Cmd+Tab hunting. Here's how to set it up in 2 minutes."
image: vscode-native-tabs.png
---

Four VS Code windows. Three Cmd+Tab clicks to get to the right one. Sound familiar?

**Native Tabs** groups all your VS Code windows into a single tabbed interface — one window, all your projects, a keyboard shortcut to move between them.

> **macOS only.** Native Tabs is a macOS feature and won't appear on Windows or Linux.

Notice how each project is in a different tab:

![Native Tabs on VSCode](/assets/images/posts/vscode-native-tabs.png)


## How to set up Native Tabs

Add this to your `settings.json`:

```json
"window.nativeTabs": true
```

Or search for "Native Tabs" in Settings and toggle it on.

![Native Tabs Settings on VSCode](/assets/images/posts/vscode-native-tabs-setting.png)

Restart VS Code.

## How to move between Native Tabs

Add these to your `keybindings.json` to move between tabs and create new ones without touching the mouse:

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
  },
  {
    "key": "ctrl+shift+t",
    "command": "workbench.action.newWindowTab"
  }
]
```

These are my bindings — use whatever feels natural to you.

That's the full setup. Here's what I pair it with:

<div class="not-prose mt-8 p-5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
  <p class="font-semibold text-gray-900 dark:text-white mb-1">Extensions that pair well with this workflow</p>
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Native Tabs organizes your windows — these two handle what happens inside them:</p>
  <div class="flex flex-col gap-3">
    <div class="flex items-start gap-3">
      <img src="{{ site.url }}/assets/images/extensions/folder-projects/logo.png" alt="Folder Projects" class="w-8 h-8 rounded-md mt-0.5 shrink-0">
      <div>
        <a href="/extensions/folder-projects/" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Folder Projects</a>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Point it at your code directories, switch to any project instantly from the command palette. No Finder, no terminal.</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <img src="{{ site.url }}/assets/images/extensions/dont-git-lost/logo.png" alt="Don't Git Lost" class="w-8 h-8 rounded-md mt-0.5 shrink-0">
      <div>
        <a href="/extensions/dont-git-lost/" class="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Don't Git Lost</a>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Adds inline blame and file history to the editor toolbar. Hover any line to see who wrote it, the commit message, and a link to the PR.</p>
      </div>
    </div>
  </div>
</div>

---

Note: Unfortunately, Native Tabs is only available on macOS. `=/`