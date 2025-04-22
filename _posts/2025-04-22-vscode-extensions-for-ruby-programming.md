---
layout: post
title: "VSCode Extensions for Ruby Programming"
date: "Apr 22, 2025"
tags:
  - ruby
  - rails
  - vscode
description:
---

## [Fuzzy Ruby Server](https://marketplace.visualstudio.com/items?itemName=Blinknlights.fuzzy-ruby-server)

Fuzzy Ruby Server provides **go to definition** and **find references** features. It works flawless on my personal projects and very well at work as well. Sometimes it doesn't know which class definition to go to, but it shows a list with preview that you can select. At work we have over-complicated namespaces and repeated class names so it makes sense it can figure out by itself.

I heard good things and I would recommend [Ruby LSP](https://marketplace.visualstudio.com/items?itemName=Shopify.ruby-lsp) but I always have trouble making it work. At work I use Docker which is not supported unless you want to also run VSCode inside Docker. However, even on my own computer I often see errors and I can't easily figure out.

Fuzzy Ruby Server just works™️ with very good accuracy.

## [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)

Change-case provides many commands to change the case of the select text between snake, camel, pascal, constant, kebab and many others.

This extension is specially useful when working with Rails and React, however I found myself using it frequently within Ruby code as well.

![change-case]({{ site.url }}/assets/images/posts/vscode-ext-change-case.png)

## [Ruby Around the Block](https://marketplace.visualstudio.com/items?itemName=elliotlarson.ruby-around-the-block)

This extension provides a Ruby Block Toggle command to toggle between `{ }` and `do end` syntaxes for Ruby blocks.

## [vscode-run-rspec-file](https://marketplace.visualstudio.com/items?itemName=Thadeu.vscode-run-rspec-file)

![run rspec]({{ site.url }}/assets/images/posts/vscode-ext-run-rspec.png)

## [rails-rspec-file-toggler](https://marketplace.visualstudio.com/items?itemName=malt-03.rails-rspec-file-toggler&ssr=false)

This extension provides a command to toggle between spec and implementation and it works really well.

## [endwise](https://marketplace.visualstudio.com/items?itemName=kaiwood.endwise)

This extensions adds the `end` in Ruby methods, classes, blocks, etc. Very small, yet coding without it is a hustle.

## [Standard Ruby](https://marketplace.visualstudio.com/items?itemName=testdouble.vscode-standard-ruby) or [RuboCop](https://marketplace.visualstudio.com/items?itemName=rubocop.vscode-rubocop)

Depending on what linter/formatter you use, they provide format on save which is very helpful. I don't care about spacing or which type of coma to use. I just code, save and then I see my code all fall in line.

## [erb](https://marketplace.visualstudio.com/items?itemName=CraigMaslowski.erb)

Provides syntax highlighting for ERB templates.

## [jbuilder highlight](https://marketplace.visualstudio.com/items?itemName=MashDuek.jbuilder-highlight)

Provides syntax highlighting for jbuilder templates.

# Bonus: Non-Ruby related, yet very useful extensions

## [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Auto-complete when writing tailwind class. Even when using `@apply`.

![tailwindcss]({{ site.url }}/assets/images/posts/vscode-ext-tailwindcss.png)

## [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

Feature rich alternative to [Postman](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode).

![thunder-client]({{ site.url }}/assets/images/posts/vscode-ext-thunder-client.png)

## [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

Save folder or workspace as a Project in the extension and access them easily from a list.

## [Open In GitHub](https://marketplace.visualstudio.com/items?itemName=sysoev.vscode-open-in-github)

Provides a command to quickly copy the Github link of the current open file. Very helpful when you want to share the file or point to a line of code to send to someone in your team.

You can select a section in code, run the command and send it. When the person opens it, it will be highlighted.

![open-it-github]({{ site.url }}/assets/images/posts/vscode-ext-open-in-github.png)

## [Git Mob co-author commits](https://marketplace.visualstudio.com/items?itemName=RichardKotze.git-mob)

Provides a list of co-authors to include in your commits. This is specially useful when pair programming.

![co-author]({{ site.url }}/assets/images/posts/vscode-ext-co-author.png)

## [TeamDocs](https://marketplace.visualstudio.com/items?itemName=lucasprag.teamdocs)

Provides a way to check your team's markdown documentation without having to leave your code.

At work, we have a repository with all our documentation such ADRs, decision docs, setup docs & guides. With this extension, I can preview all the docs by using the Activity Bar or by using the `TeamDocs: search` command.

### In the Activity Bar

![teamdocs-activity-bar]({{ site.url }}/assets/images/posts/vscode-ext-teamdocs-in-activity-bar.png)

### The search command

![teamdocs search command]({{ site.url }}/assets/images/posts/vscode-ext-teamdocs-search.png)

### Previewing markdown docs

![teamdocs preview]({{ site.url }}/assets/images/posts/vscode-ext-teamdocs-preview.png)

Have fun 💻 👋🏼
