This [stackoverflow answer](https://stackoverflow.com/questions/27032850/what-is-the-difference-between-git-reset-and-git-revert) explains the difference to [[git reset]].

This command undoes a [[commit]] by applying its opposite, which will be visible in the [[git history]].

Let’s say I have made the following commits 

`A->B->C`

But now I want to undo the changes I made in `B`

```shell
git revert B
```

which will look like 

`A->B->C->B’` 


``