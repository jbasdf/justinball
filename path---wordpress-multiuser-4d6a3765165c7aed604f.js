webpackJsonp([24311354671556],{1505:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Nobody Listens Anyway",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-02-08-wordpress-multiuser/index.md absPath of file >>> MarkdownRemark",html:'<p>I have a couple of blogs - this one and some family ones.  Since Wordpress updates their code fairly often it has become a royal pain to manage all of them.   I debated setting up sym links so that I wouldn\'t have to deploy the code in several directories.  <a href="http://striderweb.com/nerdaphernalia/features/virtual-multiblog/">I even found someone doing just that</a>.  I also debated <a href="http://wordpress.org/download/svn/">using svn to checkout the Wordpress code</a>.  Then I would write a shell script that could just do an svn update to update the code on all the blogs.  But doing that would require that I maintain plugins and themes in each project.  I would also have to upgrade a bunch of databases each time I did an upgrade.</p>\n<p>My search led me to Wordpress Multiuser.  I worried that it might not have all the features as the normal release and that I wouldn\'t be able to specify a domain name for each blog.  In the end this Wordpress Multiuser is the solution I chose.  Here\'s what I did.</p>\n<p>You can checkout Wordpress MU using svn with this simple command:</p>\n<pre><code class="ruby">\nsvn co http://svn.automattic.com/wordpress-mu/trunk/ wpmu\n</pre></code>\n<p>After you do that direct apache to your wpmu directory.  Here\'s what my virtual hosts file looks like:</p>\n<pre><code class="ruby">\nNameVirtualHost *:80\n\n&lt;VirtualHost *:80&gt;\n    ServerAdmin &quot;example.com&quot;\n    ServerName example\n    ServerAlias www.example.com\n    MIMEMagicFile /dev/null\n    CustomLog logs/blogs_access_log &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{Referer}i\\&quot; \\&quot;%{User-agent}i\\&quot;&quot;\n    ErrorLog logs/blog_error_log\n\n    DocumentRoot &quot;/home/blogs/public_html/wpmu&quot;\n    &lt;Directory &quot;/home/blogs/public_html&quot;&gt;\n        Options +Indexes +FollowSymLinks\n        Order allow,deny\n        Allow from all\n        AllowOverride All\n    &lt;/Directory&gt;\n\n    Alias /usage &quot;/home/blogs/public_html/usage&quot;\n    &lt;Location /usage&gt;\n        Order allow,deny\n        Allow from all\n    &lt;/Location&gt;\n&lt;/VirtualHost&gt;\n</pre></code>\n<p>The first time you visit your new blog at example.com you will be presented with a page that indicates you need to change some permissions on your server.  Just copy and paste the chmod command and you should be good.</p>\n<p>The next step is to create an empty database.  Call it wordpress or whatever.  Make sure that you assign it a user that has create privileges.  Enter that user into the wordpress dialog.  If all goes well you are done.  You have to love how easy it is to setup Wordpress.</p>',frontmatter:{title:"WordPress Multiuser",date:"February 08, 2008",image:null}}},pathContext:{path:"/wordpress-multiuser"}}}});
//# sourceMappingURL=path---wordpress-multiuser-4d6a3765165c7aed604f.js.map