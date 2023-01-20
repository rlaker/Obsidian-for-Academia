> [!info] 
> [[git]] is source control software, so you don't have to make a Thesis_v2_final_final.pdf ever again

[[git]] works by storing a history of a folder in its own little folder called `.git`

I use [[git]] when coding (the most common use) and writing papers. The latter is really useful for creating different drafts and tracking the overall progress.

> [!info]
> These instructions will cover git from the command line, but the same ideas apply to visual representations, like in [[Obsidian git plugin]] or [[VSCode]]

> [!warning]
> I will be writing this tutorial for [[windows]]. If you want to help writing for [[mac]] or [[Linux]] then open a [[pull request]] after finishing the tutorial 

# Workflow

Start git in a folder by typing 
```bash
git init
```

you should now see a  `.git` folder (it might be hidden)

> [!warning] 
> Trust me, it is really really annoying to [[commit]] a large file and then try and undo the history with [[git]].
> You can stop this by using [[git hooks]] in the [[git#Advanced]] section.
> For now, just try and not commit a file larger than `100MB` as it will be rejected by [[GitHub]]

## Stage

Lets say we are working on some files. Once we think we have got them to a good enough level we can [[stage]] them by typing 
```
git add [filename]
```

or in most cases use this command to add all the currently modified files
```
git add .
```

Once the correct files are staged, we can [[commit]] them to the [[git history]]. 

If you decide you don’t like the changes anymore, you can discard them which will put the files back to the most recent point in the [[git history]].

If you prefer to do this graphically, the [[Obsidian git plugin]] should be on the right hand panel. 

> [!warning] 
> If you cannot see it then open [[Obsidian - command palette]] and type "open source control view"

To stage you press the `+` button and the file should be moved to "staged changes"

## Commit

This is when the files are fully incorporated into the [[git history]]. If you mess this up it can be tricky to fix, look in [[git revert]] and [[git reset]].

To [[commit]], type 
```shell
git commit -m "[commit message]"
```

The message will appear when you are looking through the [[git history]], so try and make it useful. If you use [[Obsidian git plugin]], then the commit message will default to the date and time.

## Push

This **pushes** your local changes to the cloud. There are many different [[cloud services]] you could use, but I will focus on the most popular one: [[GitHub]].

> [!warning] 
> Before you do this, you need to authenticate your computer so [[GitHub]] knows it is **you** uploading to a [[Github repo]].

So go through the step to [[Github authentication]] first and then come back here.

To push just type 
```shell
git push 
```

## Pull

You can see what has changed between your local copy and the cloud with [[fetch]]. This only shows you what has changed but doesn’t update. For that you need to [[pull]] then changes from the cloud into your local folder.

```shell 
git pull
```

## Merge

If your local copy and the cloud don’t agree they will have a [[merge conflict]], meaning that [[git]] doesn’t know how to put the files back together.

Therefore, it will ask you to manually [[merge]] the changes yourself and then [[commit]] them when you are finished. 

> [!warning]
> This is where some people get stuck and then just delete the whole folder. I’ve done this several times…

Try following the instructions in [[merge conflict]], or use the official [[GitHub]] to see a visual representation.

# Branches 

> [!info] 
> This is where things get interesting. 

[[git]] has the ability to remember different versions of your folder, which it calls a [[branch]] (more tree references will come later)

You can create a new [[branch]] by typing 
```Shell
git checkout [branch name]
```

This same command can also be used to switch between existing branches.

## Demonstration

To demonstrate the magic behind this, make a new [[branch]] called test

```Shell
git checkout test
```

Now completely change the folder by either adding or deleting some files.

Have the file explorer open on the folder then type the following into the [[terminal]]

```Shell
git checkout main
``` 

To go back to the main [[branch]]. All your files should magically go back to the way they were.

## Common names

By default, the branch you start in will be called `main`.
You can also have branches on [[GitHub]] which will have `origin/` before their name 

## Uses

> [!question]
> Have you ever wondered how many different people in a company can work on the same code at the same time?

Well each person will have their own personal [[branch]] that can be [[merge]]d with the **production** branch when it is fully tested. 

This way there is a record and [[git history]] of every line written, so if something goes wrong you can [[git blame]] the person who wrote the mistake. Also allows the company to roll back to a version where everything was working fine.

You can also use branches for writing papers. Say your supervisor sends back their comments and you aren’t sure about them. You could make a new [[branch]] to try out the changes while protecting your main [[branch]]. If you decide that they were right all along then [[merge]] the changes in.

# Fixing things

If everything goes wrong, or you want to undo a [[commit]] then things are a bit more complicated. 

I still don’t remember which one to use when, but your problem can normally be solved with:
- [[git revert]]
- [[git reset]]
- [[git rebase]]

# Contributing to [[open source]] code

This is something [[git]] and [[GitHub]] is really good at. 

By hosting the code on [[GitHub]] someone can [[fork]] the [[Github repo]]. This allows them to make changes to the code without affecting the original (upstream) [[Github repo]].

The key is that, when they are ready, that person can request that I [[merge]] their changes . 

> [!info] 
> This person is requesting that I [[pull]] in their changes, so it is called a [[pull request]] or PR

This could be because they fixed something (even a typo) or added a new feature.

> [!tip]
> You must have found a typo in this vault by now. Practise these ideas by opening a [[pull request]] to fix it

You’d be amazed at how many pieces of software are [[open source]], including [[Zotero]] and [[VSCode]].

> [!info]
> Hopefully that gives you a brief intro to [[git]] and [[GitHub]]. If you ever get stuck then have a look at this nice [guide](https://www.atlassian.com/git)


# Advanced 

## Hooks

You can trigger things to happen with [[git hooks]]. These sit in the  `.git/hooks` folder where there should be some examples already. 

These can get pretty fancy, but for our purposes we just want to make sure that we do not exceed the `100MB` limit for [[GitHub]] (where we will be backing up our vault). 

To do this, we will use [[pre-commit]] ![[pre-commit]]