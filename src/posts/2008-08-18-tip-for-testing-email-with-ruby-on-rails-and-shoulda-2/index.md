---
title: Tip for Testing Email with Ruby on Rails and Shoulda
author: Justin Ball
layout: post
permalink: "/2008/08/18/tip-for-testing-email-with-ruby-on-rails-and-shoulda-2/"
tags:
  - "Ruby On Rails"
  - "email"
  - "Ruby On Rails"
  - "testing"
date: '2008-08-18T06:00:00Z'
templateKey: blog-post
path: "/tip-for-testing-email-with-ruby-on-rails-and-shoulda-2"
description: ''
---

Shoulda comes with a great method for testing email called 'assert_sent_email'.  (If you try it and get a method missing error update Shoulda.  Not that anyone wouldn't know to just do that).  No matter what you use to test email as long as you are in test mode your emails will be placed into an array accessible using:
<pre><code class="ruby">
ActionMailer::Base.deliveries
</pre></code>

This is due to this line in test.rb found in the environments folder:
<pre><code class="ruby">
config.action_mailer.delivery_method = :test
</pre></code>

Now here's the tip.  You might think you are really smart if you take advantage of the fact that Rails has a very handy initializers folder and put a file in there called mail.rb with your mail configuration.

DON'T do it.  The initializer will override the value set in the test.rb file and your tests will fail.
