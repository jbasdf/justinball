---
title: Stupid Error That I will Blame on Lack of Sleep
author: Justin Ball
layout: post
permalink: "/2007/11/12/264/"
tags:
  - "Programming"
  - "Ruby On Rails"
  - "errors"
  - "Ruby On Rails"
date: '2007-11-12T07:00:00Z'
templateKey: blog-post
path: "/264"
description: ''
---

So if you are ever working oh so hard on a ruby on rails application and all of a sudden your application stops working and you have no idea why because the error looks like this:

<pre><code class="ruby">
/!\ FAILSAFE /!\  Mon Nov 12 17:27:15 -0700 2007
  Status: 500 Internal Server Error
  wrong number of arguments (1 for 0)
    /Users/jbasdf/projects/indulge/vendor/rails/actionpack/lib/
action_controller/base.rb:513:in `send'
   .....
</pre></code>

Step back.  Call yourself and idiot and remove the method you just added because you can't ever name a method 'send' in your controller because it overrides default functionality and then pukes all over the place.

Bad programmer ... bad bad programmer.
