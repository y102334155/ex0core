---
published: true
subtitle:
date: <% tp.date.now() %>
tags: 
---




<%_ await tp.file.move("_wiki" + "/" + tp.user.randomhex()) -%>

# <% tp.file.title %>

# <% tp.file.path(true) %>
---

# <% tp.file.path(true) +- 3 %>
