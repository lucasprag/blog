---
layout: post
title: Use ctags to jump to definition even inside ruby gems
date: 'Nov 6, 2019'
tags:
  - vim
description: This is really helpful especially if you need to debug other people's gems or your own. 👌
redirect_from:
- /posts/trick-to-use-ctags-to-jump-to-definition-even-inside-ruby-gems
---

If you don't know what ctags is:

> Ctags is a programming tool that generates an index file of names found in source and header files of various programming languages. Depending on the language, functions, variables, class members, macros and so on may be indexed. -- Wikipedia

In the case of Ruby you can jump to a method definition, class, etc using  [ctags](http://ctags.sourceforge.net/) which doesn't work 100% of the time but it helps a lot.

## vim

Vim has a native functionality where you can `:tag MyClass` and it opens your class based on the index created by [ctags](http://ctags.sourceforge.net/).

You can extend this functionality as much as you like

```vim
" open tag of the word under the cursor, requires to run "ctargs -R ." before
command! JumpToTag execute ':tag ' . expand("<cword>")

command! JumpToTagOnVsplit :vsplit
      \| execute ':tag ' . expand("<cword>")

command! JumpToTagOnSplit :split
      \| execute ':tag ' . expand("<cword>")

```

but there is one limitation when using Rails and other gems; you can't jump inside them, like `:tag ApplicationRecord`.

## The catch

You can run bundle install and set the path to install gems inside your project so when you run `ctags -R .` all the gems get indexed.

```bash
bundle install --path=vendor/bundle
```

But remember to git ignore them

```
# ~/.gitignore_global
vendor/bundle
```

## Gutentags

If you don't like to run `ctags -R .` all the time, there is a plugin for vim that runs ctags in the background while you are coding. It's called [vim-gutentags](https://github.com/ludovicchabant/vim-gutentags). All you need to do is install it.

I hope you've enjoyed this little trick to make our lives a bit easier when coding Rails on vim. 👍

*[This post is also available on DEV.](https://dev.to/lucasprag/little-trick-to-use-ctags-to-jump-to-definition-even-inside-gems-like-rails-on-vim-244j)*

