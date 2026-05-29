---
layout: extension
title: "Don't Git Lost — VS Code Git History Extension"
description: "Step through any file's git history without leaving VS Code. Inline blame, rich commit hover cards, and time-travel navigation. Lightweight and focused."
ext_name: "Don't Git Lost"
marketplace_url: "https://marketplace.visualstudio.com/items?itemName=lucasprag.dont-git-lost"
image: extensions/dont-git-lost/inline-blame.png
last_modified_at: 2025-05-29
tags:
  - vscode
  - git
  - extension
faqs:
  - q: "Does it work with self-hosted GitHub Enterprise or GitLab?"
    a: "Yes. Configure the dontgitlost.host.selfHosted setting to map your self-hosted hostname to its type."
  - q: "Does it work with Bitbucket?"
    a: "Yes. Set dontgitlost.host.bitbucketToken to a username:apppassword app password."
  - q: "Does it show history for renamed files?"
    a: "Yes — git history is followed across renames."
  - q: "Can I disable the blame annotation and keep only the toolbar buttons?"
    a: "Yes. Set dontgitlost.blame.enabled to false in settings."
  - q: "Does it slow down VS Code?"
    a: "No. The blame annotation is debounced and only runs when you stop moving the cursor. The toolbar buttons only load history when you click them. There is no background scanning."
  - q: "What VS Code version does it require?"
    a: "VS Code 1.75 or newer, or a compatible fork like Cursor."
---

<div class="flex items-center gap-4 mb-6 not-prose">
  <img src="{{ site.url }}/assets/images/extensions/dont-git-lost/logo.png" alt="Don't Git Lost logo" class="w-16 h-16 rounded-xl">
  <div>
    <p class="text-lg text-gray-600 dark:text-gray-400 mt-1">Step through any file's git history without leaving VS Code.</p>
  </div>
</div>

<div class="not-prose flex gap-3 mb-8">
  <a href="https://marketplace.visualstudio.com/items?itemName=lucasprag.dont-git-lost"
     class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg text-sm">
    Install from VS Code Marketplace {% include external.html size="14px" %}
  </a>
  <a href="https://open-vsx.org/extension/lucasprag/dont-git-lost"
     class="inline-block border border-gray-400 dark:border-gray-600 hover:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-5 py-2 rounded-lg text-sm">
    Open VSX Registry {% include external.html size="14px" %}
  </a>
</div>

## What it does

Every codebase has lines you didn't write — code that looked obvious until it broke, or logic that makes no sense without context. The standard answers are `git log --follow -p -- file.rb`, which drops you into a terminal wall of text, or navigating a nightmare of commits on GitHub/GitLab trying to find when a specific file changed. Both break your train of thought.

**Don't Git Lost** keeps you in the editor and answers the question *"what happened to this file before now?"*:

- Walk through every commit that touched the current file, forwards and backwards
- See who wrote the line your cursor is on, right there at the end of the line
- Hover for the full story — author photo, complete commit message, links to the commit and PR

---

## Time-travel through your file's history

Five buttons appear in the editor toolbar when you open any file tracked by git:

| Button | Action |
|---|---|
| ← | Previous commit — gutter overlay shows exactly what changed |
| ◁ | Previous commit — side-by-side diff editor |
| ▷ | Next commit — side-by-side diff editor |
| → | Next commit — gutter overlay |
| ⌂ | Return to the current working copy |

Each navigation updates the **same tab in place** — no pile-up of diff tabs. The status bar shows which commit you're viewing so you always know where you are in the history.

![Stepping back through history with gutter overlay]({{ site.url }}/assets/images/extensions/dont-git-lost/time-travel-overlay.png)

![Stepping back through history in a side-by-side diff]({{ site.url }}/assets/images/extensions/dont-git-lost/time-travel-diff.png)

---

## Inline blame for the current line

The line where your cursor sits gets a quiet annotation at the end:

```
Jane Doe, 11 years ago • First working version of cleaned-up production logs.
```

- Updates as you move the cursor (debounced, so it doesn't flicker)
- Hides automatically on uncommitted lines
- Fully configurable format: `${author}`, `${ago}`, `${date}`, `${sha}`, `${message}`, `${pr}`

![Inline blame annotation at the end of the current line]({{ site.url }}/assets/images/extensions/dont-git-lost/inline-blame.png)

---

## Rich commit hover card

Hover the blame annotation to see the full picture:

- Author photo (from GitHub, GitLab, or Bitbucket)
- Full multi-line commit message
- Short SHA, absolute date, and relative time
- **Copy SHA** to clipboard
- **Open commit** in your browser
- **Open PR** that introduced the change (when available)

Works with public repos out of the box. For private repos, sign in once via VS Code's built-in GitHub account, or paste a GitLab/Bitbucket token in settings.

![Hover card with author photo, commit message, and links]({{ site.url }}/assets/images/extensions/dont-git-lost/commit-hover-card.png)

---

## Works in Cursor too

Cursor's editor toolbar is more compact, so the navigation buttons may appear inside the **`...` overflow menu** by default. To pin them as visible icons: click `...` → **Configure Editor Title Menu Icons** → toggle the Don't Git Lost entries on. You only need to do this once.

---

## Why not GitLens?

GitLens is a powerful, full-featured git extension. If you want everything git-related in one place — a full graph, worktrees, visual file history, AI commit explanations — GitLens has it.

Don't Git Lost is for a different need: **lightweight, distraction-free file history**. It installs in seconds, adds five toolbar buttons and one line of blame annotation, and gets out of your way. There's no sidebar to configure, no feature wall, no paid tier gating core functionality. If the question you're asking is *"what happened to this file?"*, Don't Git Lost answers it with the least friction possible.

The two extensions can coexist — you can run both if you want GitLens's graph alongside Don't Git Lost's inline blame.

---

## FAQ

**Does it work with self-hosted GitHub Enterprise or GitLab?**
Yes. Configure the `dontgitlost.host.selfHosted` setting to map your self-hosted hostname to its type.

**Does it work with Bitbucket?**
Yes. Set `dontgitlost.host.bitbucketToken` to a `username:apppassword` app password.

**Does it show history for renamed files?**
Yes — git history is followed across renames.

**Can I disable the blame annotation and keep only the toolbar buttons?**
Yes. Set `dontgitlost.blame.enabled` to `false` in settings.

**Does it slow down VS Code?**
The blame annotation is debounced and only runs when you stop moving the cursor. The toolbar buttons only load history when you click them. There's no background scanning.

**What VS Code version does it require?**
VS Code 1.75 or newer (or a compatible fork like Cursor).

---

## Settings

| Setting | Default | Description |
|---|---|---|
| `dontgitlost.blame.enabled` | `true` | Show the inline blame annotation |
| `dontgitlost.blame.format` | `${author}, ${ago} • ${message}` | Annotation template |
| `dontgitlost.blame.messageMaxLength` | `80` | Max characters of commit message shown inline |
| `dontgitlost.timeTravel.enabled` | `true` | Show back/forward toolbar buttons |
| `dontgitlost.host.gitlabToken` | `""` | GitLab personal access token (`read_api` scope) |
| `dontgitlost.host.bitbucketToken` | `""` | Bitbucket app password (`username:apppassword`) |
| `dontgitlost.host.selfHosted` | `{}` | Map of self-hosted hosts |

---

## Check out my other extensions

- [Folder Projects](/extensions/folder-projects/) — turn your directory structure into an instant project switcher
- [TeamDocs](/extensions/teamdocs/) — keep your team's Markdown docs one click away in the Activity Bar
