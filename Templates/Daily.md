---
alias: 
- "<% moment(tp.file.title).format("MMMM Do, YYYY") %>"
- "<% moment(tp.file.title).format("dddd Do MMMM, YYYY") %>"
---
# <% tp.date.now("dddd Do MMM YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
<< [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>| Yesterday]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|Tomorrow]] >>

---


<% tp.file.cursor() %>


# Tasks

## New Today

```tasks
path includes <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
```

## Due Today

```tasks
not done
due on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
```

## Over Due

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
```

## Upcoming

```tasks
not done
due after <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
```

## Done Today

```tasks

done on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>

```

# Time Machine

---
[[<% tp.date.now("YYYY-MM-DD", -7, tp.file.title, "YYYY-MM-DD") %>|Last week]] |  [[<% tp.date.now("YYYY-MM-DD", "P-1M", tp.file.title, "YYYY-MM-DD") %>|Last Month]] | [[<% tp.date.now("YYYY-MM-DD", "P-1Y", tp.file.title, "YYYY-MM-DD") %>|Last Year]]
