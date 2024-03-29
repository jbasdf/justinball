---
title: Code Review of Ozmozr by Jamis Buck and Marcel Molina
author: Justin Ball
layout: post
permalink: "/2007/03/17/code-review-of-ozmozr-by-jamis-buck-and-marcel-molina/"
tags:
  - "mtnwestrubyconf"
  - "jamis buck"
  - "mtnwestrubyconf"
  - "ozmozr"
date: '2007-03-17T06:00:00Z'
templateKey: blog-post
path: "/code-review-of-ozmozr-by-jamis-buck-and-marcel-molina"
description: ''
---

The review is actually less painful than I would have thought.  They are looking at parts of the code and giving specific feedback on code blocks.  Here's a quick summary:

'and'  and 'or' are different than '||' and '&&'.  The second returns boolean values.  The first returns strings.    Avoid using 'and' and 'or'.
When dealing with errors.  Try to use exceptions instead of booleans and procedures.

Putting models in the application.rb file is depricated and probably a bad idea anyway.  - As an excuse, we never liked that, but it was required by the login engine which we have gotten rid of.

Empower your models.  Include as much data validation and manipulation in the model as possible.

How to deal with business requirements that span models?  Create a model that spans the logic.

Keep your controllers "skinny".  If your view doesn't require any code do this:
<pre><code class="ruby">
def about
  render
end
</pre></code>
That lets you sort of self document your code.

Use exceptions.  Nested ifs are ugly and if elsif is bad.  In the code proceed with the assumption that you were successful and catch problems in exceptions.

Extract stuff from views into helpers.  ie The views have long lines that look like this:

<pre><code class="ruby">
  &lt;li &lt;%if @current_tab == &quot;popular&quot; %&gt;class=&quot;current&quot;&lt;% end %&gt;&gt;&lt;%= link_to(&quot;Popular&quot;, :action =&gt; &quot;index&quot;) %&gt;&lt;/li&gt;
</pre></code>

they should look like this:

<pre><code class="ruby">
  &lt;%= tab &#039;popular&#039; %&gt;
  def tab(name, options={})
    lang = _(name)
    s = "li>"
    s << "class='current'" if @current_tab == options[:name] || name.downcase
    s << ">"
    s << link_to(lang, options[:url] || send("#{name.downcase}_path"))
    s << "</li>"
  end
</pre></code>

Instead of this:

<pre><code class="ruby">
  &lt;% if @editable %&gt;
  &lt;% end %&gt;
</pre></code>

Do this:
<pre><code class="ruby">
  &lt;% editable do %&gt;
    stuff
  &lt;% end %&gt;
</pre></code>

In the helper add this:

<pre><code class="ruby">
def editable(&block)
  concat(block.call, block.binding) if @editable
end
</pre></code>

which also lets you do stuff like this:

<pre><code class="ruby">
def editable(&block)
  concat("<div>Look")
  concat(block.call, block.binding) if @editable
end
</pre></code>

I talked to Jamis a bit about Rails.  A couple of questions I had:

How do you test your rss, xml etc if you use responds_to?
set :format => 'xml' in your get in the test.

How do you share code and manage it between applications?
Use plugins.  They use propset when in development, but do plugin install when they deploy so that the plugin version is locked.

They are going to send us their feedback which we will take to heart.




