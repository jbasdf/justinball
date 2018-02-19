webpackJsonp([0x6991608bf8e0],{1278:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-10-30-heroku/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve watched <a href="http://www.heroku.com">Heroku</a> for a while.  I\'ve even tried to deploy an app there a few times, but never got into it that much.  I needed a cheap (free) place to put <a href="http://my-amazon-feeds.com">My Amazon Feeds.com</a>.  It\'s just a utility site.  It\'s not meant to scale or be production worthy.  Instead it\'s meant to show off some code and I didn\'t want to spend a long time messing with deployment.</p>\n<p>Turns out deployment on Heroku is pretty simple if you don\'t need a lot of custom setup.  Their instructions are pretty clear so I won\'t repeat them.  There are a few things you will want to keep in mind:</p>\n<ol>\n\t<li>You will need to create a file in the root called .gems.  Mine looks like this:\n<pre><code class="ruby">\nmislav-will_paginate --source http://gems.github.com\nhttparty\nriver\n</pre></code>\n  </li>\n\t<li>Heroku uses <a href="http://www.postgresql.org/">PostgreSQL</a>.  If you have <a href="http://dev.mysql.com/">MySQL</a> specific code or even some sloppy migrations you might have a few problems.</li>\n\t<li>The Heroku file system is read-only.  This has some interesting side effects include the fact that your caching will stop working if it is file based.  Also, you will need to remove :cache from your stylesheet_link_tag and javascript_include_tag.  This won\'t work:\n<pre><code class="ruby">\n<%= stylesheet_link_tag %W{ reset styles frame }, :cache => true %>\n<%= javascript_include_tag %w{\n            jquery/jquery.js\n            jquery/jquery-ui.js\n           application.js }, :cache => \'all_js_cached\' %>\n</pre></code>\n<p>Removing :cache makes life happy again:</p>\n<pre><code class="ruby">\n<%= stylesheet_link_tag %W{ reset styles frame } %>\n<%= javascript_include_tag %w{\n            jquery/jquery.js\n            jquery/jquery-ui.js\n           application.js } %>\n</pre></code>\n<p>Overall the service is pretty good and offers an interesting \'cloud\' solution.  I probably won\'t be moving my existing apps over to the service and in many instances I prefer to have more control over my hosting setup.  However, if you are looking for super simple deployment for an application that doesn\'t stray to far from the norm then spend 10 minutes setting up your application on the <a href="http://heroku.com/pricing#blossom-1">free version of Heroku</a> to see how it works.</p>\n</li>\n</ol>',frontmatter:{title:"Heroku",date:"October 30, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/heroku"}}}});
//# sourceMappingURL=path---heroku-22f82bf3d195918b8c21.js.map