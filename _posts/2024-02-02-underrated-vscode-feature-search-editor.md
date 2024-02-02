---
layout: post
title: "Underrated VSCode feature: Search Editor"
date: "Feb 2, 2024"
tags:
  - vscode
  - productivity
description:
---

The search in the sidebar in VSCode is quite limiting in my opinion. One of the reasons is that the results show up *in the sidebar* which is small and hard to read.

![Using the search in the sidebar to search for I18n in Rails](/assets/images/posts/vscode-sidebar-search.png)

With the **Search Editor** built-in in VSCode, the search results show up in a new editor which can use all the editor space making it much more comfortable to read and find what you're looking for.

The result also features **previews with syntax highlighting** in addition to the features anyone would expect from a search engine like folder inclusion/exclusion, Regex support, match case, etc.

![Using the search editor to search for I18n in Rails](/assets/images/posts/vscode-search-editor.png)

It's very similar to how Sublime Text does searches and it works well.

To open a **New Search Editor**, type the command `> Search Editor: New Search Editor` or add a short to your `keybindings.json`.

Mine are:
- `cmd+k s` to `search.action.openEditor` which opens a new editor if none is already open so you can go back to your search without using the mouse.
- `cmd+k shift+s` to `search.action.openNewEditor` which opens a new editor regardless if there is already one open.



```json
[
  {
    "key": "cmd+k s",
    "command": "search.action.openEditor"
  },
  {
    "key": "cmd+k shift+s",
    "command": "search.action.openNewEditor"
  },
]
```


Done. Enjoy doing searches in VSCode.