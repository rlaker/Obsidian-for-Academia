# Week at a Glance

<< [[<% tp.date.weekday("YYYY-[W]ww",  -7,tp.file.title, "YYYY-[W]ww") %>| Previous Week]] | [[<% tp.date.weekday("YYYY-[W]ww",  7,tp.file.title, "YYYY-[W]ww") %>|Next Week]] >>

## Week Notes

- [[<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 0, tp.file.title, "YYYY-[W]ww") %>]]
- [[<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 1, tp.file.title, "YYYY-[W]ww") %>]]
- [[<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 2, tp.file.title, "YYYY-[W]ww") %>]]
- [[<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 3, tp.file.title, "YYYY-[W]ww") %>]]
- [[<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 4, tp.file.title, "YYYY-[W]ww") %>]]
- [[<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 5, tp.file.title, "YYYY-[W]ww") %>]]
- [[<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %> | <% tp.date.weekday("dddd", 6, tp.file.title, "YYYY-[W]ww") %>]]

# Important Points

```dataview
table
week as "Entry"
FROM "100 Notes/Daily" or [[<% tp.file.title %>]]
WHERE week and (file.ctime >= (date("<% tp.date.weekday('YYYY-MM-DD', 0, tp.file.title, 'YYYY-[W]ww') %>"))) and (file.ctime <= date("<% tp.date.weekday('YYYY-MM-DD', 6, tp.file.title, 'YYYY-[W]ww') %>")) 
SORT file.day 
```

# Tasks this Week

```tasks
done before <% tp.date.weekday('YYYY-MM-DD', 7, tp.file.title, 'YYYY-[W]ww') %>
done after <% tp.date.weekday('YYYY-MM-DD', 0, tp.file.title, 'YYYY-[W]ww') %>
sort by done
```

# Next steps
