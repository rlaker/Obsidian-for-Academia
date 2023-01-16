Start git in a folder by typing 
```bash
git init
```

which creates a hidden folder called `.git` where all the history of the folder is stored.

# Hooks

You can trigger things to happen with [[git hooks]]. These sit in the  `.git/hooks` folder where there should be some examples already. 

These can get pretty fancy, but for our purposes we just want to make sure that we do not exceed the `100MB` limit for [[GitHub]] (where we will be backing up our vault). 

> [!warning] 
> Trust me, it is really really annoying to commit a large file and then try and undo the history with [[git]]

To do this, we will use [[pre-commit]]. 

Open a [[terminal]] 

Type 

```shell
pre-commit install
```
