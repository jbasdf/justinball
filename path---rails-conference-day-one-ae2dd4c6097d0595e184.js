webpackJsonp([0xba70e4e12ca7],{1395:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-05-17-rails-conference-day-one/index.md absPath of file >>> MarkdownRemark",html:"<p>We flew into Portland last night so that we would be ready bright and early this morning. I hate waking up at 6:30 am to go to a conference. We are programmers when will they realize that the conference should start at 11 and then run late into the night. Maybe even start at 3 and run until 1 am.</p>\n<p>Anyway, we went looking for a restaurant last night called Sylvias. Lucky for us they were closed permanently. We drove around looking for somewhere to eat and ended up at Wendys. So far I hate Portland. We'll see how it goes over the next few days.</p>\n<p>I am sitting in 'Scaling a Rails Application from the Bottom Up' by <a href=\"http://joyeur.com/\">Jason Hoffman</a> from <a href=\"http://joyent.com/\">Joyent</a> this morning. I think I have come to the wrong session. He started by talking about how much power a server takes and how much bandwidth you may or may not need. I was hoping to see how to build a better, scalable Rails application. We aren't getting that and everything he is saying I know after running my own servers for years.</p>\n<p>I am thinking now that I will try to change rooms. This guy likes to blabber on about 'what is scalable' on and on. This is to a room of programmers that already knows what it is to scale. They want to know how to scale. Don't waste our time.</p>\n<p>The talk started to get better. He started showing real numbers and explain real ideas. However, I still left and headed over to Test Driven Development. I thought I might be behind but he has been going over basic stuff so I should still be good.</p>\n<p>So I wandered around to the Test Driven Development and the Scriptaculous sessions. They were a little to beginner so I am back in the scalability session.</p>\n<p>It has gotten good. He is providing real data.\nThey use Big IP load balancers because they are the only ones that can provide the throughput they want.\nThe bottle neck in a rails app is not rails it is the load balancer.\nThey divided up their app into app servers. One app does email, one does rss, one does calendar etc. They use layer 7 (Big IP) load balancers to divide up the traffic to the app servers. It looks like one app, but the requests go to different servers.\nVarnish is the best open source Load Balancer\nNginx for static content serving on Solaris\nThey get away from using a relational DB - what data can be moved out. In many cases you don't need a RDMS.\nMemcache\nLDAP - use this a lot. Using Sun Directory Server (open source)\n<a href=\"http://www.process-one.net/en/jeai/\">J-EAI</a> (message bus with an in memory db) use this to manage db reads and writes. You can program the bus and tell it to read and write at given intervals. Written in erlang. You can put all your data into the base. This includes email, atom, rss etc. It scales. It connects to all kinds of apps. They are going to release to the world.\nFile system - put some stuff on the file system. Never more than 10k files/subdirs in a single directory - aim for 4k max\nDon't nest to deeply.\nPre-create 16 top level directories, 256 subdirs each which gives you 4096 buckets.</p>\n<p>federate via DNS. Scale it out by sending requests for each subdomain to different servers. They use power DNS.</p>\n<p>I didn't care much for the intro, but the second half of this talk was amazing and Jason is a great guy. I think that besides the technical points I learned that you shouldn't spend to much time on your intro or might lose the audience. This talk turned out to be great it just took a while.</p>\n<p>One of the really cool things I found out about at this talk was a product called <a href=\"http://sequoia.continuent.org/HomePage\">Sequoia</a>. It lets you scale out your database. Very cool.</p>",frontmatter:{title:"Rails Conference Day One",date:"May 17, 2007",imageUrl:null,image:null}}},pathContext:{path:"/rails-conference-day-one"}}}});
//# sourceMappingURL=path---rails-conference-day-one-ae2dd4c6097d0595e184.js.map