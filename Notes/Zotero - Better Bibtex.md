Download from [here](https://github.com/retorquere/zotero-better-bibtex/releases/tag/v6.7.52) then follow [[Zotero#Plugins]] instructions.

> [!info] 
> This plugins makes it easy to cite from inside [[Latex]] by giving each citation a consistently formatted "key" 

To copy the style from [[Mendeley]] I use this for the citation format: 
```
auth+year
```

This is also very useful when citing in [[Obsidian]], like [[@Laker2021a]]

# Automatic export

This is crucial when using [[Obsidian - Citations]] plugin. Every time you add a new item, you want it to appear in the vault `.bib` file. 

Do this by right clicking the [[Zotero]] folder and`Export collection`. Make sure you choose `Better BibTeX` and `Keep updated` ![[Pasted image 20230129100441.png]]

Now just choose the [[Obsidian]] vault.

> [!warning] 
> There is sometimes a delay with this after adding new citations to [[Zotero]]. You can change the delay time with the slider in `automatic export` settings. Don't make this too short or it will update every time you highlight something and cause some lag. 
> If you want to force the export, then go into `edit>preferences>Better Bibtex>Automatic Export>Export now`

