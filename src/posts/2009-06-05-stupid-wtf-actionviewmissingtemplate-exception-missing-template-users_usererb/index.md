---
title: 'Stupid WTF! ActionView::MissingTemplate Exception: Missing template users/_user.erb'
author: Justin Ball
layout: post
permalink: "/2009/06/05/stupid-wtf-actionviewmissingtemplate-exception-missing-template-users_usererb/"
tags:
  - "Ruby On Rails"
  - "ActionView::MissingTemplate"
  - "errors"
  - "Ruby On Rails"
  - "templates"
  - "tips"
date: '2009-06-05T06:00:00Z'
templateKey: blog-post
path: "/stupid-wtf-actionviewmissingtemplate-exception-missing-template-users_usererb"
description: ''
---

If you've spent much time working with Ruby on Rails and more especially if you've done anything with json you might have run across errors like this:
<pre><code class="ruby">
ActionView::MissingTemplate Exception: Missing template users/_user.erb
</pre></code>

I was having this problem and doing a lot of cursing which is common when I stay up and write code until 2am which I know I should do and I also know that I shouldn't write really long run on sentences but I do it anyway.

This error is usually the result of some code that looks like this:

<pre><code class="ruby">
format.json do
  @user_html = render_to_string( :partial => 'users/user', :object => @user )
  render :json => { :success => true,
                              :user_html => @user_html  }
end
</pre></code>

The cause of this error is that the format of the current request is :json.  There isn't an _user.json.erb template so Rails tries to find an _user.erb file.  That doesn't exist either and boom you spend the night sounding like a sailor.

Now I don't pretend to be an expert but I have been accused of being a hack.  I solve the problem by changing the template format:

<pre><code class="ruby">
format.json do
  @template.template_format = :html
  @user_html = render_to_string( :partial => 'users/user', :object => @user )
  render :json => { :success => true,
                              :user_html => @user_html  }
end
</pre></code>

The key is the addition of:
<pre><code class="ruby">
  @template.template_format = :html
</pre></code>

Don't yell at me if it breaks.  I'm open to better suggestions but for now this does work and now my I can find other reasons to stay up late.
