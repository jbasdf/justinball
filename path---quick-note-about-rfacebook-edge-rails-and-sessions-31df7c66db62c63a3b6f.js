webpackJsonp([4517137140126],{2207:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-10-19-quick-note-about-rfacebook-edge-rails-and-sessions/index.md absPath of file >>> MarkdownRemark",html:'<p>This problem may not be specific to rFacebook, but when I added acts<em>as</em>facebook_user to my user model and then made a call like:</p>\n<pre><code class="ruby">\nmy_user.first_name\n</pre></code>\n<p>I would get an 500 internal server error.  I checked the log and saw this:\n<i>CGI::Session::CookieStore::CookieOverflow</i></p>\n<p>I found that if I changed the app so that it uses db sessions everything started working.</p>\n<p>Uncomment this line in environment.rb:</p>\n<pre><code class="ruby">\nconfig.action_controller.session_store = :active_record_store\n</pre></code>\n<p>Make sure to add the session tables to your db by using the rake task and you should be good to go.  Note that I am running edge rails so keep that in mind if you use this advice.</p>',frontmatter:{title:"Quick Note About rFacebook, Edge Rails, and Sessions.",date:"October 19, 2007",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---quick-note-about-rfacebook-edge-rails-and-sessions-31df7c66db62c63a3b6f.js.map