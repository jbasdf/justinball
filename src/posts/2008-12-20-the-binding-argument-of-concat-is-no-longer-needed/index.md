---
title: 'The binding argument of #concat is no longer needed'
author: Justin Ball
layout: post
permalink: "/2008/12/20/the-binding-argument-of-concat-is-no-longer-needed/"
tags:
  - "Funny"
  - "Ruby On Rails"
  - "upgrades"
date: '2008-12-20T07:00:00Z'
templateKey: blog-post
path: "/the-binding-argument-of-concat-is-no-longer-needed"
description: ''
---

If you upgrade to Rails 2.2.2 and start getting "The binding argument of #concat is no longer needed"  then wherever you do something like this:
<pre><code class="ruby">
concat(content, block.binding)
</pre></code>

change it to this:
<pre><code class="ruby">
concat(content)
</pre></code>

The 'block.binding' argument is no longer needed which is nice because who really wanted to type that over and over again anyway.
