---
title: Heroku
author: Justin Ball
layout: post
permalink: "/2009/10/30/heroku/"
tags:
  - "hosting"
  - "heroku"
  - "Ruby On Rails"
date: '2009-10-30T06:00:00Z'
templateKey: blog-post
path: "/heroku"
description: ''
---

I've watched <a href="http://www.heroku.com">Heroku</a> for a while.  I've even tried to deploy an app there a few times, but never got into it that much.  I needed a cheap (free) place to put <a href="http://my-amazon-feeds.com">My Amazon Feeds.com</a>.  It's just a utility site.  It's not meant to scale or be production worthy.  Instead it's meant to show off some code and I didn't want to spend a long time messing with deployment.

Turns out deployment on Heroku is pretty simple if you don't need a lot of custom setup.  Their instructions are pretty clear so I won't repeat them.  There are a few things you will want to keep in mind:
<ol>
	<li>You will need to create a file in the root called .gems.  Mine looks like this:
<pre><code class="ruby">
mislav-will_paginate --source http://gems.github.com
httparty
river
</pre></code>
  </li>
	<li>Heroku uses <a href="http://www.postgresql.org/">PostgreSQL</a>.  If you have <a href="http://dev.mysql.com/">MySQL</a> specific code or even some sloppy migrations you might have a few problems.</li>
	<li>The Heroku file system is read-only.  This has some interesting side effects include the fact that your caching will stop working if it is file based.  Also, you will need to remove :cache from your stylesheet_link_tag and javascript_include_tag.  This won't work:
<pre><code class="ruby">
<%= stylesheet_link_tag %W{ reset styles frame }, :cache => true %>
<%= javascript_include_tag %w{
            jquery/jquery.js
            jquery/jquery-ui.js
           application.js }, :cache => 'all_js_cached' %>
</pre></code>

Removing :cache makes life happy again:
<pre><code class="ruby">
<%= stylesheet_link_tag %W{ reset styles frame } %>
<%= javascript_include_tag %w{
            jquery/jquery.js
            jquery/jquery-ui.js
           application.js } %>
</pre></code>

Overall the service is pretty good and offers an interesting 'cloud' solution.  I probably won't be moving my existing apps over to the service and in many instances I prefer to have more control over my hosting setup.  However, if you are looking for super simple deployment for an application that doesn't stray to far from the norm then spend 10 minutes setting up your application on the <a href="http://heroku.com/pricing#blossom-1">free version of Heroku</a> to see how it works.

</li>
</ol>

