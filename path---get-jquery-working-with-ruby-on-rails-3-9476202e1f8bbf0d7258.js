webpackJsonp([0xb589c3410a1f],{1104:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Nobody Listens Anyway",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-03-11-get-jquery-working-with-ruby-on-rails-3/index.md absPath of file >>> MarkdownRemark",html:'<p>I thought I had fixed everything and made ready for Rails 3 in my applications. Turns out I was wrong. My wife tells me I\'m wrong all the time so I didn\'t feel to bad. The first sign was that something bad had happened was that all my delete links stopped working. I found a <a href="http://www.cowboycoded.com/2010/10/28/rails-3-rails-js-document-on-is-not-a-function/">couple of articles</a> talking about the <a href="http://www.themodestrubyist.com/2010/02/24/rails-3-ujs-and-csrf-meta-tags/">new unobtrusive javascript in Rails</a>. </p>\n<p>I have bits of code that look like this:</p>\n<pre><code class="ruby">\n<%= link_to \'Delete Thing\', @thing, :confirm => \'Are you sure?\', :method => :delete %>\n</pre></code>\n<p>I know the argument that you shouldn\'t use links for delete. In this case the generated anchor tag won\'t cause you problems so I don\'t want to hear any whining:</p>\n<pre><code class="html">\n<a href="algebra" data-confirm="Are you sure?" data-method="delete" rel="nofollow">Delete Course</a>\n</pre></code>\n<p>I included rails.js which will turn those links into DELETE requests for the server. However, I started seeing this error in Firebug on Firefox:</p>\n<pre><code class="ruby">\ndocument.on is not a function\n</pre></code>\n<p>I also got this in Google Chrome:</p>\n<pre><code class="ruby">\nUncaught TypeError: Object #<HTMLDocument> has no method \'on\'\n</pre></code>\n<p>Turns out that since I use jQuery I needed to get the rails.js file for jQuery. There\'s a gem that wraps it up:\n<a href="https://github.com/rails/jquery-ujs">https://github.com/rails/jquery-ujs</a></p>\n<p>You can also just get the javascript and dump it in rails.js:\n<a href="https://github.com/rails/jquery-ujs/raw/master/src/rails.js">https://github.com/rails/jquery-ujs/raw/master/src/rails.js</a></p>\n<p>Now I can be happy again.</p>',frontmatter:{title:"Get jQuery Working With Ruby on Rails 3",date:"March 11, 2011",image:null}}},pathContext:{path:"/get-jquery-working-with-ruby-on-rails-3"}}}});
//# sourceMappingURL=path---get-jquery-working-with-ruby-on-rails-3-9476202e1f8bbf0d7258.js.map