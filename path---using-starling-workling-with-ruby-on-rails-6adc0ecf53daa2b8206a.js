webpackJsonp([43666612934604],{1545:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-08-18-using-starling-workling-with-ruby-on-rails/index.md absPath of file >>> MarkdownRemark",html:'<p>For the project we are working on for Teachers Without Borders we need a reliable asynchronous way to process tasks. There are a myriad of ways to do this and if you aren\'t careful you\'ll spend weeks second guessing yourself while investigate every possible option. Not that I would know that from experience.</p>\n<p>We chose <a href="http://rubyforge.org/projects/starling/">Starling</a> and Workling as our solution. Starling is a message queue that uses memcache. It was <a href="http://dev.twitter.com/2008/01/announcing-starling.html">built by the guys at Twitter</a> and <a href="http://blog.twitter.com/2008/01/twitters-starling-released-as-open.html">released as open source</a>. I bet it scales.</p>\n<p><a href="http://playtype.net/past/2008/2/6/starling_and_asynchrous_tasks_in_ruby_on_rails/">Workling</a> is a great plugin built by a couple of guys working on <a href="http://boomloop.com">boomloop.com</a> It makes using Starling a bit easier especially when it comes to consuming messages from the queue.</p>\n<p>There are a few blog posts around that describe how to get stuff up and running. Other than that the documentation is a bit sparse. I have to believe that will change over time. I am throwing my own links and experience into the mix so I don\'t forget how to do this.</p>\n<p>First get the gems you need to run starling:</p>\n<pre><code class="ruby">\nsudo gem install starling\nsudo gem install memcache-client\n</pre></code>\n<p>Get the <a href="http://github.com/purzelrakete/workling/tree/master/Changes">working plugin</a></p>\n<pre><code class="ruby">\ngit clone http://github.com/purzelrakete/workling/tree/master/Changes\n</pre></code>\n<pre><code class="ruby">\n# Get starling and working going with:\n#\n# Fire up starling - this isn\'t in daemon mode. Add a -d for that.\n# starling -P tmp/pids/starling.pid -q tmp/starling\n#\n# Next fire up the server\n# script/server\n#\n# Get workling going\n# script/workling\\_starling\\_client start\n</pre></code>\n<p>A few more resources</p>\n<p><a href="http://www.williambharding.com/blog/rails/starling-update-from-the-horses-mouth/">http://www.williambharding.com/blog/rails/starling-update-from-the-horses-mouth/</a></p>\n<p><a href="http://davedupre.com/2008/03/25/ruby-background-tasks-with-starling/">http://davedupre.com/2008/03/25/ruby-background-tasks-with-starling/</a></p>',frontmatter:{title:"Using Starling, Workling with Ruby on Rails",date:"August 18, 2008",imageUrl:null,image:null}}},pathContext:{path:"/using-starling-workling-with-ruby-on-rails"}}}});
//# sourceMappingURL=path---using-starling-workling-with-ruby-on-rails-6adc0ecf53daa2b8206a.js.map