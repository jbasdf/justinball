---
title: Configure Your wp-config.php for Database Access on Mac OSX 10.6
author: Justin Ball
layout: post
permalink: "/2009/10/04/configure-your-wp-config-php-for-database-access-on-mac-osx-10-6/"
tags:
  - "database"
  - "Mac OSX 10.6"
  - "mysql"
  - "Wordpress"
date: '2009-10-04T06:00:00Z'
templateKey: blog-post
path: "/configure-your-wp-config-php-for-database-access-on-mac-osx-10-6"
description: ''
---

I ran into another problem trying to get my database to work on 10.6.  The trick is to properly set DB_HOST:

<pre><code class="php">
/** MySQL hostname */
define('DB_HOST', '127.0.0.1:3306');
</pre></code>

For a complete tutorial on how to setup Wordpress on Mac OSX 10.6 see <a href="http://wordpress.org/support/topic/306878?replies=6">http://wordpress.org/support/topic/306878?replies=6</a>.
