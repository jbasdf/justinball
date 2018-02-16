webpackJsonp([0xa4d3eb031d88],{1411:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-10-23-rfacebook-and-redirect_to/index.md absPath of file >>> MarkdownRemark",html:'<p>I have been working with rFacebook to try to get a Facebook application up and running.  Right now we are trying to integrate our conference application - <a href="http://www.51weeks.com">51weeks.com</a> with Facebook so that our users can take advantage of existing social networks instead of having to create yet another network at he conference they are attending.</p>\n<p>In working on the application I kept getting an exception related to redirect_to:</p>\n<pre><code class="ruby">wrong number of arguments (2 for 1) </pre></code>\n<p>The stack trace points to this file:</p>\n<pre><code class="ruby">controller_extensions.rb:463:in `url_for__ALIASED\'</pre></code>\n<p>So I did what any good developer would do I went to Google and <a href="http://okwithfailure.com/2007/10/21/a-fix-for-this-rfacebook-bug">came up with this post</a>.</p>\n<p>The poster replaced this line in the gem:</p>\n<pre><code class="ruby">\n  path = url_for__ALIASED(options, *parameters)\n</pre></code>\n<p>with this:</p>\n<pre><code class="ruby">\n  path = options\n</pre></code>\n<p>I am not brave enough to mess around with the gem - it makes deployment a bit of a headache so I sat back and thought about this for a bit.  This always helps me.  I checked my facebook.yml file.  I have been using \'/\' as the callback_path.  I switched that to \'<a href="http://www.myserver.com/facebook/&#x27;">http://www.myserver.com/facebook/\'</a>.  Then I set the callback path inside of Facebook to \'<a href="http://www.myserver.com/facebook/&#x27;">http://www.myserver.com/facebook/\'</a>.  I made sure my canvas page url was setup correctly - \'indulgences\' in my case.</p>\n<p>Next I ran the application inside of Facebook.  Like magic everything worked.  Now even if I change my facebook.yml file back to \'/\' everything still seems to work.  Morale of the story is to check your configuration when building a Facebook application.  Everything has to be just right and it is easy to forget to setup any one of a number of configuration items which can cause you a lot of pain.</p>',frontmatter:{title:"rFacebook and redirect_to",date:"October 23, 2007",imageUrl:null,image:null}}},pathContext:{path:"/rfacebook-and-redirect_to"}}}});
//# sourceMappingURL=path---rfacebook-and-redirect-to-3441b04c70252d625ad1.js.map