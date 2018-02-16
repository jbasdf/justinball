webpackJsonp([53173082866501],{1232:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-12-26-if-postgresql-won't-start-remember-this/index.md absPath of file >>> MarkdownRemark",html:"<p>I rarely ever reboot my Mac. It sits on my desk loyally waiting for my next command ready to respond to my every whim.\nHowever, on occasion, something happens and it does need a reboot.</p>\n<p>Today was one of those days. Upon reboot everything appeared fine until I tried to work on some code. PostGreSQL was dead.\nThis isn't the first time this has happened to me and I'm guessing it won't be the last so for the benefit of all here's\nthe problem:</p>\n<p>Here's the error I get:</p>\n<pre>\npsql: could not connect to server: No such file or directory\n  Is the server running locally and accepting\n  connections on Unix domain socket \"/tmp/.s.PGSQL.5432\"?\n</pre>\n<p>The trick is to look at the logs. I installed using <a href=\"http://brew.sh/\">Homebrew</a> so my logs are here:</p>\n<pre>\n/usr/local/var/postgres/server.log\n</pre>\n<p>I had done a hard reboot which left 'postmaster.pid' in place:</p>\n<pre>\n/usr/local/var/postgres/postmaster.pid\n</pre>\n<p>I removed that file and then started up PostGres with:</p>\n<pre>\npg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start\n</pre>\n<p>Now I'm good to go.</p>",frontmatter:{title:"If PostGreSQL Won't Start Remember This",date:"December 26, 2013",imageUrl:null,image:null}}},pathContext:{path:"/if-postgresql-won't-start-remember-this"}}}});
//# sourceMappingURL=path---if-postgresql-wont-start-remember-this-eed6255936bb4608db57.js.map