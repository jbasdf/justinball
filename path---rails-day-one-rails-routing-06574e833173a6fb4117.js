webpackJsonp([99072208922639],{1400:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-05-17-rails-day-one-rails-routing/index.md absPath of file >>> MarkdownRemark",html:'<p>Sitting in a session by David Black.  He is talking about routing in Rails.  It is starting out pretty basic, but I am hoping that it will end up covering the more complex issues as time goes on.</p>\n<p>We are going over named routes now.  This is actually a very good tutorial, but it is aimed towards someone that has never done anything with routes.</p>\n<p>We are now into the second part of the session.  Black is going over some of the background of rest including ideas from <a href="http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm">Roy Thomas Fielding\'s dissertation</a> which is generally attributed as the beginning of REST.  He said that he would focus on the more practical aspects of REST in Rails, but he can\'t resist talking about some theory.  I am ok with that, but I have read it before.  Hopefully he will get to the details of REST and routing in Rails and delve into some of the more advanced scenarios which is where we are typically having problems.</p>\n<p>We have started into REST in Rails.  It is interesting that Black needs to caveat his comments due to changes coming in Edge Rails.  The \';\' is being replaced with a \'/\'.  We are talking about why controllers are plural (your REST operations are performed on a collection.)  Again, not new stuff.  I am hoping to see nested routes or stuff like this:</p>\n<pre><code class="ruby">\n map.resources :users, :has_many => [:services, :websites], :collection => { :complete => :get, :confirm => :get, :confirm => :post }\n</pre></code>\n<p>or this</p>\n<pre><code class="ruby">\nmap.resources :users do |users|\n  users.resources :services\nend\n</pre></code>\n<p>and why one might be better than another.  <a href="http://weblog.jamisbuck.org/2007/2/5/nesting-resources">Jamis Buck wrote that he doesn\'t nescessarily like the nested routes</a>.  I liked how they make object relations obvious, but he brings up some very good points like why should I have to specify every parent id to get to an object.</p>',frontmatter:{title:"Rails Day One &#8211; Rails Routing",date:"May 17, 2007",imageUrl:null,image:null}}},pathContext:{path:"/rails-day-one-rails-routing"}}}});
//# sourceMappingURL=path---rails-day-one-rails-routing-06574e833173a6fb4117.js.map