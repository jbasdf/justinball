---
title: River &#8211; Amazon Wishlist Gem
author: Justin Ball
layout: post
permalink: "/2009/10/30/river-amazon-wishlist-gem/"
tags:
  - "Programming"
  - "amazon"
  - "amazon wishlist"
  - "gem"
  - "river"
  - "ruby"
  - "Ruby On Rails"
date: '2009-10-30T06:00:00Z'
templateKey: blog-post
path: "/river-amazon-wishlist-gem"
description: ''
---

One more post on Amazon Wishlist code.  As another follow up to my post on <a href="http://www.justinball.comamazon-ruby-and-signing_authenticating-your-requests">Amazon Wishlist RSS, Ruby and Signing/Authenticating your Requests</a> and the site I built to run the code <a href="http://www.my-amazon-feeds.com">My Amazon Feeds</a> (<a href="http://www.justinball.comamazon-wishlist-rss">post here</a>) I've created a gem to contain all the code.  Get it by running
<pre><code class="ruby">
  sudo gem install river
</pre></code>

It's a pretty simple gem so working with the code is also pretty easy to do:
<pre><code class="ruby">
am = AmazonRequest.new(amazon_access_key_id, amazon_secret_access_key, ecs_to_rss_wishlist, amazon_associate_tag)
results = am.get_amazon_feeds(username) # username needs to be the user's Amazon email
feeds = results.collect { |result| OpenStruct.new(:url => result, :title => 'Amazon Wishlist', :name => 'wishlist') }
</pre></code>

Get amazon_access_key_id and amazon_secret_access_key from your AWS console. The amazon_associate_tag parameter is optional.  Throw it in there if you want your Amazon associate information in the feed.  May as well :-).

The one parameter that might be confusing is 'ecs_to_rss_wishlist'.  This value is a url where the xslt transform lives.  This has to be a public url.  I've included a version in the gem.  To get it into your Rails application you'll need to add this to the Rakefile in the root of your app:
<pre><code class="ruby">
require 'river/tasks'
</pre></code>
Then sync the file into your app:
<pre><code class="ruby">
rake river:sync
</pre></code>

After that you'll find the file in the public directory and you'll be able to access it with something like http://www.example.com/ecs_to_rss_wishlist.xslt
