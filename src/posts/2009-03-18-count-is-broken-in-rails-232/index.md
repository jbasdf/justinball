---
title: Count is broken in Rails 2.3.2
author: Justin Ball
layout: post
permalink: "/2009/03/18/count-is-broken-in-rails-232/"
tags:
  - "Funny"
  - "bug"
  - "count"
  - "Ruby On Rails"
  - "sql"
date: '2009-03-18T06:00:00Z'
templateKey: blog-post
path: "/count-is-broken-in-rails-232"
description: ''
---

After upgrading to Rails 2.3.2 I started getting this error:
Mysql::Error: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '*)

It turns out that the 'count' method is broken for 'has_many through association collection with named scope'. Here's a link to the bug report:
