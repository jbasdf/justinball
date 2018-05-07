webpackJsonp([0x837dc2b2c2e5],{2059:function(e,l){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-28-install-native-mysql-gem-edge-rails-stopped-including-it/index.md absPath of file >>> MarkdownRemark",html:'<p>I decided to try out the latest edge Rails and I started getting this error:</p>\n<pre><code class="ruby">\n!!! The bundled mysql.rb driver has been removed from Rails 2.2. Please install the mysql gem and try again: gem install mysql.\n/!\\ FAILSAFE /!\\  Mon Jul 28 22:58:38 -0600 2008\n  Status: 500 Internal Server Error\n  dlopen(/Library/Ruby/Gems/1.8/gems/mysql-2.7/lib/mysql.bundle, 9): Library not loaded: /usr/local/mysql/lib/mysql/libmysqlclient.15.dylib\n  Referenced from: /Library/Ruby/Gems/1.8/gems/mysql-2.7/lib/mysql.bundle\n  Reason: image not found - /Library/Ruby/Gems/1.8/gems/mysql-2.7/lib/mysql.bundle\n</pre></code>\n<p>At first I tried:</p>\n<pre><code class="ruby">\n sudo gem install mysql\n</pre></code>\n<p>which of course didn\'t work because it never works.  You have to tell the complier where to find stuff.  Do this:</p>\n<pre><code class="ruby">\nsudo gem install mysql -- --with-mysql-config=/usr/local/mysql/bin/mysql_config\n</pre></code>',frontmatter:{title:"Install Native MySQL Gem &#8211; Edge Rails Stopped Including It",date:"July 28, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---install-native-mysql-gem-edge-rails-stopped-including-it-dc0ee9cfa565cb25e214.js.map