---
published: true
subtitle:
date: <% tp.date.now() %>
tags: 
---


<% tp.file.rename("" + tp.user.randomhex()) %>

# <% await tp.file.title %>

<%  tp.file.move("_wiki/" + await tp.file.title) %>


