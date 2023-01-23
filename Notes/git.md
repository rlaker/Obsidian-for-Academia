> [!info] 
> [[git]] is source control software, so you don't have to make a Thesis_v2_final_final.pdf ever again

[[git]] works by storing a history of a folder in its own little folder called `.git`

I use [[git]] when coding (the most common use) and writing papers. The latter is really useful for creating different drafts and tracking the overall progress.

> [!info]
> These instructions will cover git from the command line, but the same ideas apply to visual representations, like in [[Obsidian git plugin]] or [[VSCode]]

> [!warning]
> I will be writing this tutorial for [[windows]]. If you want to help writing for [[mac]] or [[Linux]] then open a [[pull request]] after finishing the tutorial 

# Concepts

Start git in a folder by typing 
```bash
git init
```

you should now see a  `.git` folder (it might be hidden)

> [!warning] 
> Trust me, it is really really annoying to [[commit]] a large file and then try and undo the history with [[git]].
> You can stop this by using [[git hooks]] in the [[git#Advanced]] section.
> For now, just try and not commit a file larger than `100MB` as it will be rejected by [[GitHub]]

1. [[Stage]]
2. [[commit]]
3. [[push]]
4. [[pull]]
5. [[merge]]
6. [[Branch|branches]]

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