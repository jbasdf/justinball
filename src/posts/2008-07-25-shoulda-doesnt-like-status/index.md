---
title: Shoulda Doesn&#8217;t like &#8216;Status&#8217;
author: Justin Ball
layout: post
permalink: "/2008/07/25/shoulda-doesnt-like-status/"
tags:
  - "Ruby On Rails"
  - "bugs"
  - "Ruby On Rails"
  - "shoulda"
date: '2008-07-25T06:00:00Z'
templateKey: blog-post
path: "/shoulda-doesnt-like-status"
description: ''
---

One of the models in a project I am working on right now ends in 'status'.  Rails handles that just find but in my tests I started noticing an odd error:

<pre><code class="ruby">
test: Lookup should belong_to lookup_status. (LookupTest):
NameError: uninitialized constant LookupStatu
</pre></code>

The Shoulda test looks like this:
<pre><code class="ruby">
   should_belong_to :lookup_status
</pre></code>

Nothing to complicated there.  Should recognizes the relationship just find but when it tries to find a class it goes looking for LookupStatu.  I fixed this by adding the the class name to the relationship thus:

<pre><code class="ruby">
belongs_to :lookup_status, :class_name => 'LookupStatus'
</pre></code>
