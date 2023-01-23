To help you resolve a [[merge]] conflict, [[git]] will make a file with both sets of changes in. It is your mission (should you accept) to make the file look how you want it.

Then you can save the file and [[commit]] it to the [[git history]] where it will usually be flagged as a [[merge]].

[[git]] will try and show you which lines come from the cloud (`origin/main`) and your local changes (`HEAD`)

This will look something like 

```Python
<<<<<<<<<<<<<<<<<< HEAD
print(“this is a local change”)
—————————————
print(“a change in the cloud”)
>>>>>>>>>>>>>>>>>> origin/main
```

So delete the parts that you don’t want, including lines 1 and 5. Then save and commit

