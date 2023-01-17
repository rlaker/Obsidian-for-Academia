Install [[pre-commit]] into [[Python]] or [[Python - environment]]

I have included a basic `.pre-commit-config.yaml` that should load in the [[git hooks]].

In the [[terminal]], run 
```shell
pre-commit install
```

All this does is add a file to [[git hooks]] - `.git/hooks/pre-commit.sh`

> [!success] 
> Now hopefully you will see it check the file size everytime you commit in the [[terminal]]

