> [!info] 
> I went to the Imperial grad school course so you don't have to. Here is a link to the [tutorial](https://imperialcollegelondon.github.io/grad_school_git_course/)

Start git in a folder by typing 
```bash
git init
```

which creates a hidden folder called `.git` where all the history of the folder is stored.

> [!warning] 
> Trust me, it is really really annoying to commit a large file and then try and undo the history with [[git]]
> You can stop this by using [[git hooks]] in the [[git#Advanced]] section.
> For now, just try and not commit a file larger than `100MB`

# Staging

Lets say we are working on some files. Once we think we have got them to a good enough level we can ==stage== them by typing 
```
git add [filename]
```

or in most cases use this to add all the currently modified files
```
git add .
```

Once the correct files are staged, we can commit them to the [[git history]]

# Committing

This is when the files are fully incorporated into the git history. If you mess this up it can be tricky to fix, look in [[git revert]] and [[git reset]].

To commit, type 
```shell
git commit -m "[commit message]"
```

The message will appear when you are looking through the [[git history]], so try and make it useful. If you use [[Obsidian git plugin]], then the commit message will be the date and time.

# Grapically

If you prefer to do this graphically, the [[Obsidian git plugin]] should be on the right hand panel. 

> [!warning] 
> If you cannot see it then open [[Obsidian - command palette]] and type "open source control view"

To stage you press the `+` button and the file should be moved to "staged changes"

# Push

To back up your [[git]] folder in the cloud use [[GitHub]]. Before you do this, you need to authenticate your computer so [[GitHub]] knows it is you uploading to a private [[Github repo]].

So go through the step to [[Github authentication]] first


# Advanced 

## Hooks

You can trigger things to happen with [[git hooks]]. These sit in the  `.git/hooks` folder where there should be some examples already. 

These can get pretty fancy, but for our purposes we just want to make sure that we do not exceed the `100MB` limit for [[GitHub]] (where we will be backing up our vault). 



To do this, we will use [[pre-commit]] ![[pre-commit]]