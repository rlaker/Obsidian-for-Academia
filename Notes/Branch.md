> [!info] 
> This is where things get interesting. 

[[git]] has the ability to remember different versions of your folder, which it calls a [[Branch]] (more tree references will come later)

You can create a new [[Branch]] by typing 
```Shell
git checkout [branch name]
```

This same command can also be used to switch between existing branches.

## Demonstration

To demonstrate the magic behind this, make a new [[Branch]] called test

```Shell
git checkout test
```

Now completely change the folder by either adding or deleting some files.

Have the file explorer open on the folder then type the following into the [[terminal]]

```Shell
git checkout main
``` 

To go back to the main [[Branch]]. All your files should magically go back to the way they were.


## Common names

By default, the branch you start in will be called `main`.
You can also have branches on [[GitHub]] which will have `origin/` before their name 

## Uses

> [!question]
> Have you ever wondered how many different people in a company can work on the same code at the same time?

Well each person will have their own personal [[Branch]] that can be [[merge]]d with the **production** branch when it is fully tested. 

This way there is a record and [[git history]] of every line written, so if something goes wrong you can [[git blame]] the person who wrote the mistake. Also allows the company to roll back to a version where everything was working fine.

You can also use branches for writing papers. Say your supervisor sends back their comments and you aren’t sure about them. You could make a new [[Branch]] to try out the changes while protecting your main [[Branch]]. If you decide that they were right all along then [[merge]] the changes in.