---
alias:
- links
- wiki links
- link
---



These are how [[Obsidian]] links notes together, and is a quick way to build up a graph of all your connections.

lets talk about [[matlab]] 

> [!important] 
> If you hold `ctrl` and hover over a link it will show the note in a little window. So you can look up a concept without leaving your note

You can create these as you type, [[like this]], even if no file exists. When you feel like that concept has been mentioned enough, then hold `ctrl` and press on the link which will create the file.

If you change the file name, it will automtically update all the links in your [[Vault]].

Link to a certain part of a file with a # after the file name like [[Obsidian#Useful keyboard shortcuts]]

Link to a block of text with the ^ like [[Obsidian#^82dbb8]]

You can embed a file inside another by using ! before the [[Obsidian - wiki link|wiki link]] like this ![[Obsidian - useful shortcuts]]

Which is how pictures are shown ![[th-390968233.jpg]]

You can also link to an image without downloading ![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Dctg6F6CYvLoasIBLe4TvAHaCe%26pid%3DApi&f=1&ipt=d0ae2db9a6defd58fd5fd3e86320503662c405f523be54c53c4d99eef25c10bc&ipo=images)

> [!important] 
> These links are the main way to traverse your notes. This means that you don't have to worry about a folder structure where notes can get lost. If you use [[Obsidian - wiki link]] you can always search for the backlinks

Using [[Obsidian]] this way means that you can flick back and forth between notes if you get a random thought. 

> [!info] 
> I just remembered that you can change the note text by using a | after the filename [[Obsidian - wiki link|like this]].

Finally, you can use an alias for a filename by putting some [[yaml]] at the start like 

```yaml
---
alias:
- links
- wiki links
- link
---
```

This applies the | rule from above so you can just [[Obsidian - wiki link|link]] easily.