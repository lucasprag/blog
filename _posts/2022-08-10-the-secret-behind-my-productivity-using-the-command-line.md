---
layout: post
title: The secret behind my productivity using the command line
date: 'Aug 10, 2022'
tags:
  - terminal
  - productivity
description: As a developer, I use the command line every day. I believe that getting better at it over the years drastically increased my productivity. Here are some things I've picked up that go along the way to help me get work done and that might help you as well.
---

As a developer, I use the command line every day. I believe that getting better at it over the years drastically increased my productivity. Here are some things I've picked up that go along the way to help me get work done and that might help you as well.

## Combine commands with pipe `|`

Here are some commands from my own history:

#### pbcopy

I can copy the results of commands using `pbcopy` on Mac, but there is a similar command on other systems.

No need to switch to the mouse to copy any output from a command.

Examples:
- `git diff | pbcopy` to share a quick idea with a colleague at work
- `cat ~/.ssh/id_rsa.pub | pbcopy` to copy a key and add it to Github
- `ruby weekly_report.rb -p7d | pbcopy` to run a script, generate a weekly report and copy the output

I can also use `pbpaste`, but I don't find that as useful as `pbcopy` because I'm usually pasting the content on Slack, Jira, Github, etc, not the other way around.

#### grep

`grep` is useful for filtering the output of the previous command and searching the content of files

Examples:
- `gem list | grep rubocop` to see the version of the rubocop gem I have installed on my machine
- `cat Gemfile.lock | grep rubocop` to see the version of the rubocop gem I have installed on a Rails project


#### xargs

`xargs` executes a command for each line of the previous output.

For example, sometimes I have too many branches locally on my git repository so I delete them in steps to make sure I don't delete a branch I'm currently working on.

```text
$ git branch | grep fix | xargs git branch -D
```

`git branch` lists all branches, `grep fix` filters them using the term "fix", finally, `xargs` deletes all these branches in one go.


#### awk

I find `awk` helpful for extracting data from more complex outputs. This means I can extract only one column of the previous output to continue working with my pipes.

For example, when I need to delete files in my git repository, I simply do this:

```text
git status -s | grep '??' | awk '{ print $2 }' | xargs rm -rf
```

There might be a nice git command to do the same, but I don't need that because at some point I wrote the command above so it made to my history and now it's a quick `ctrl+r` away which brings me to the next topic.

## History search

All the commands I type on my terminal are saved into a history file. Then I search on said file using `ctrl+r` and it brings up the commands I used before to my current terminal.

This means that the command above is just a few keystrokes away. Try it yourself!

Note: `ctrl+r` is available by default on shells like `bash` or `zsh`, but it needs to be added when using `fish`.


## GPU-accelerated terminal emulator

After I started using a GPU-accelerated terminal, I couldn't look back to [iTerm](https://iterm2.com/index.html) and others.

As a developer, the terminal is my second most used tool -- the code editor being the first -- and I need it to be really fast. Not just fast, _really_ fast.

I currently use [Alacritty](https://github.com/alacritty/alacritty) and it gets the job done, but there are a few features I miss from it like splits, tabs, search, etc. For all of that, I need to use [tmux](https://github.com/tmux/tmux) which I was already using before so I'm ok with it for now.

However, another option that caught my eye as a GPU-accelerated terminal and that implements all these features I mentioned -- and much more! -- is [Kitty](https://sw.kovidgoyal.net/kitty/) 🤩

I'm considering moving away from Alacritty+tmux and going all in into Kitty because it could be a _much easier_ way to allow me to:

- organize and name all my terminals
- predefine them on list and open them all in one go
- move around within tabs, splits, etc using shortcuts -- this is gold 🏆

Sometimes the apps at work can use multiple terminals and even more when I have to work on multiple apps at the same time (e.g. API + front-end + admin + backoffice app + ???). In addition to that, they also output a lot of content and a GPU-accelerated terminal emulator comes in handy for that.

## Bonus #1: Turn off all animations

I turn off all animations I can or simply avoid Mac features that have them. I know they look great, but the way I see them, they just take time out of me. They are also not fun for my computer to render, __especially__ when I'm sharing my screen over the internet with my colleagues. 😕

## Bonus #2: Automate moving windows around

This is not terminal-related, but one tool that heavily improves my productivity is [Hammerspoon](https://www.hammerspoon.org/).

The app itself is a bridge between the operating system and a Lua scripting engine, which can be used to manage, move, and resize windows around.

This is my script ([link](https://github.com/lucasprag/dotfiles/blob/main/hammerspoon/init.lua)) as an example. I have shortcuts to move windows to predefined spots on my screen, in addition, to resizing them to occupy 50%, 75% or 100% of the space. Multi-monitor support is also available. ✨

## Wrapping up

These are some things I've picked up during my life as a developer that helped me do my work. If you have any more tips, let me know on twitter! I hope that you have found something new to help __you__ boost your productivity as well. 🚀



