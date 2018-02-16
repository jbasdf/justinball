webpackJsonp([0xad54cb67e8d0],{1492:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-05-19-taking-care-of-rails-support-tasks-through-custom-daemons-tammer-saleh/index.md absPath of file >>> MarkdownRemark",html:"<p>Saleh is talking about using a Daemon to get rails to talk to LDAP.  <a href=\"http://thoughtbot.com/projects/ldap-ar-gateway\">The code for the LDAP deamon and the code to make it look like a model live here</a>.   I will add a bit of code here and there, but hopefully the presenter will upload the slides so I donâ€™t have to retype everything.  There is some great code in this presentation.</p>\n<p>Daemons are a bit of a dark art.</p>\n<pre><code class=\"ruby\">\ndef daemonize\n  Kernel.fork and Kernel.exit\n  Process.setsid\n  Kernel.fork and Kernel.exit\n  # system maintenance items so you don't hold up directory maintenance and so you don't have to deal with permissions\n  File.umask 0\n  Dir.chdir '/'\n  # you don't want to hold onto\n  ObjectSpace.each_object(IO) {|io| io.close rescue nil}\n  STIN.open('/dev/null')\nend\n</pre></code>\n<p>or just use a gem</p>\n<pre><code class=\"ruby\">\nrequire daemons\nDaemons.daemonize\n\nloop {\n  # or whatever\n  conn = accept\n}\n\n</pre></code>\n<p>You can interact directly with your Rails environment.\ninclude environment file</p>\n<p>Threads\nThreadsBase.allow_concurrency = true</p>\n<p>Or you will get a nasty error:\nMysql::Error: Lost connection to MySQL server during query:</p>\n<p>Start and Stop\nuse a unix init script that takes start/stop/restart\nOSX got ride of init script Solaris is going to do the same.  Use Launchd instead.  It uses xml.</p>\n<p>Make sure the process doesn't start twice so that it doesn't run over itself.\nUse a Pid File.   This is how the daemon finds out its own id for stopping.  It is also how you keep a process from starting up twice</p>\n<p>Configuration Files\nTalk to your process.  Configure with yml files.  Read it in with YAML.Load</p>\n<p>Logging\nDaemon doesnâ€™t have standard IO.  Log it.  Do it with Logger.new.  Set log levels etc.  Use logging for debugging.</p>\n<p>Security\nWhen the system boots all is root. You donâ€™t want your app running as root.  Drop privileges as soon as you can so that you become a lesser user.\ndef become_user( â€¦. See the slides</p>\n<p>Testing\nCreate a test suite.  Testing a daemon is challenging.  Spawn the daemon before tests.\nMocking makes testing safer.  See slides for code under slide Testing â€“ Mocking makes this much safer.</p>\n<p>This was a great talk with real code.  We need more code.</p>",frontmatter:{title:"Taking Care of Rails Support Tasks Through Custom Daemons Tammer Saleh",date:"May 19, 2007",imageUrl:null,image:null}}},pathContext:{path:"/taking-care-of-rails-support-tasks-through-custom-daemons-tammer-saleh"}}}});
//# sourceMappingURL=path---taking-care-of-rails-support-tasks-through-custom-daemons-tammer-saleh-ec001b52b38c8ca8e0eb.js.map