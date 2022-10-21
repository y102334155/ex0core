---
published: true
subtitle:
date: <% tp.date.now() %>
tags: 
---
<%_ await tp.file.move("_wiki" + "/" + tp.user.randomhex()) -%>

# <% tp.file.path(true).substr(6, 6) %>

