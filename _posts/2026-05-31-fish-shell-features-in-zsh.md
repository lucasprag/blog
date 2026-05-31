---
layout: post
title: 🐚 Fish shell features in zsh
date: 'May 31, 2026'
tags:
  - terminal
description: Love what fish shell offers but want to stay in zsh? Here's how to get fish's best features — abbreviations, syntax highlighting, autosuggestions, and more — right in your existing zsh setup.
redirect_from:
- /2026-05-31-fish-shell-features-in-zsh
---

A while back I wrote about [why I switched to fish shell](/2020-06-22-fish-the-shell). But a lot of people don't want to leave zsh — maybe they've been using it forever, have a big config they don't want to rewrite, or just don't want to deal with fish's non-POSIX quirks. Fair enough!

The good news is that most of what I love about fish can be added to zsh with a few plugins. Here's how.

### 1. Abbreviations

This is my favorite fish feature and the one I missed most when I had to use zsh. Fish expands abbreviations inline as you type — so `gs` becomes `git status` right in your prompt before you even hit enter.

Zsh doesn't have this built in, but [zsh-abbr](https://github.com/olets/zsh-abbr) does exactly the same thing:

```zsh
# With Homebrew
brew install olets/tap/zsh-abbr

# Then add to ~/.zshrc
source $(brew --prefix)/share/zsh-abbr/zsh-abbr.zsh
```

Then add your abbreviations:

```zsh
abbr gs="git status"
abbr gd="git diff"
abbr ga="git add"
abbr gc="git commit"
abbr gp="git pull origin $(current_branch)"
abbr gP="git push origin $(current_branch)"
```

Type `gs` and press Space and it expands to `git status`. Your history is readable, and when you're pair programming your colleague can actually see what you're doing.

If you already use Oh My Zsh, the built-in `globalias` plugin does something similar without any extra install.

### 2. Syntax highlighting

Fish colors your commands as you type — unknown programs show up in red so you know right away if you made a typo. [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) brings that to zsh.

```zsh
# With Homebrew
brew install zsh-syntax-highlighting

# Add to the END of ~/.zshrc (must be last or it won't work)
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

One thing to watch out for: it has to be the last thing sourced in your `.zshrc`. If it's not working, that's probably why.

### 3. Oh My Zsh

[Oh My Zsh](https://ohmyz.sh/) is basically Oh My Fish but for zsh. It's a framework for managing plugins, themes, and functions, and it's honestly even more popular.

```zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

I have a `current_branch` function that returns the current git branch name, which I use in my abbreviations above. Here's the zsh version:

```zsh
# ~/.zshrc or ~/.oh-my-zsh/custom/functions.zsh
function current_branch() {
  ref=$(git symbolic-ref HEAD 2>/dev/null) || \
  ref=$(git rev-parse --short HEAD 2>/dev/null) || return
  echo ${ref#refs/heads/}
}
```

And `kp` to kill processes interactively using [fzf](https://github.com/junegunn/fzf):

```zsh
function kp() {
  local pid
  pid=$(ps -ef | sed 1d | fzf -m | awk '{print $2}')
  [ -n "$pid" ] && echo $pid | xargs kill -${1:-9}
}
```

Oh My Zsh also has a bunch of [themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) that show your git branch, whether you have uncommitted changes, and other things right in your prompt.

### 4. Autocomplete

Fish shows a gray suggestion as you type based on your history and you just hit the right arrow to accept it. [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) does the same thing.

```zsh
# With Homebrew
brew install zsh-autosuggestions

# Add to ~/.zshrc
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

One thing I actually prefer about zsh here: `ctrl+r` for history search works out of the box, no setup needed. In fish you have to wire it up manually.

If you want the fzf-powered version of `ctrl+r` anyway, add this after installing fzf:

```zsh
source $(brew --prefix)/opt/fzf/shell/key-bindings.zsh
```

### Final state of ~/.zshrc

All the `source` lines need to go in your `~/.zshrc`. Zsh reads that file automatically every time you open a new terminal, so once it's in there you never have to think about it again.

Here's what your `~/.zshrc` should look like with everything set up:

```zsh
# Custom functions
function current_branch() {
  ref=$(git symbolic-ref HEAD 2>/dev/null) || \
  ref=$(git rev-parse --short HEAD 2>/dev/null) || return
  echo ${ref#refs/heads/}
}

function kp() {
  local pid
  pid=$(ps -ef | sed 1d | fzf -m | awk '{print $2}')
  [ -n "$pid" ] && echo $pid | xargs kill -${1:-9}
}

# Abbreviations
source $(brew --prefix)/share/zsh-abbr/zsh-abbr.zsh

abbr gs="git status"
abbr gd="git diff"
abbr ga="git add"
abbr gc="git commit"
abbr gp="git pull origin $(current_branch)"
abbr gP="git push origin $(current_branch)"

# Autosuggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# fzf key bindings
source $(brew --prefix)/opt/fzf/shell/key-bindings.zsh

# Syntax highlighting — must be last
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

After saving the file, run `source ~/.zshrc` once to apply everything to your current session. After that, new terminal windows will pick it all up automatically.

### Why stay on zsh at all?

Zsh is POSIX-compatible, which means bash scripts just work. You don't have to remember to type `bash script.sh` when a colleague shares a script with you. That's the main thing fish can't offer.

With the plugins above though, you're really not giving much up.
