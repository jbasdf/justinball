webpackJsonp([54999928199595],{1232:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-08-05-increment-mysql-error/index.md absPath of file >>> MarkdownRemark",html:"<p>On a site I'm working on I started noticed a lot of production errors like this:</p>\n<p>ActiveRecord::StatementInvalid: Mysql::Error: Lock wait timeout exceeded; try restarting transaction: UPDATE <code>users</code> SET <code>counter</code> = 2, <code>updated_at</code> = '2010-08-05 20:54:26' WHERE <code>id</code> = 1234</p>\n<p>I traced the error back to a call in the user model:</p>\n<pre><code class=\"ruby\">\nupdate_attribute(:start_time, DateTime.now)\nincrement!(:counter)\n</pre></code>\n<p>increment! is an ActiveRecord call. It looks convenient, but for some reason it leaves you with some SQL issues (or at least it gave me problems in my specific instance. The odd thing is that if it was a general problem I would expect to see the update error occur in other parts of the application where I do an update. However, in this application all the errors occurred at the same spot. It's possible that running two updates back to back could have caused the problem.</p>\n<p>I changed the code to this which is more efficient anyway since there is only one call:</p>\n<pre><code class=\"ruby\">\nupdate_attributes(:counter => self.counter += 1, :start_time => DateTime.now)\n</pre></code>\n<p>and all is well again.</p>\n<p>If you run into a similar error, examine the code around the problem code. See if there are multiple updates or something similar that will cause the db to lock.</p>",frontmatter:{title:"increment! and Mysql::Error: Lock",date:"August 05, 2010",imageUrl:null,image:null}}},pathContext:{path:"/increment-mysql-error"}}}});
//# sourceMappingURL=path---increment-mysql-error-31b52f434bfe58cc8687.js.map