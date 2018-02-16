webpackJsonp([88344826415940],{1520:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-08-18-tip-for-testing-email-with-ruby-on-rails-and-shoulda-2/index.md absPath of file >>> MarkdownRemark",html:"<p>Shoulda comes with a great method for testing email called 'assert<em>sent</em>email'.  (If you try it and get a method missing error update Shoulda.  Not that anyone wouldn't know to just do that).  No matter what you use to test email as long as you are in test mode your emails will be placed into an array accessible using:</p>\n<pre><code class=\"ruby\">\nActionMailer::Base.deliveries\n</pre></code>\n<p>This is due to this line in test.rb found in the environments folder:</p>\n<pre><code class=\"ruby\">\nconfig.action_mailer.delivery_method = :test\n</pre></code>\n<p>Now here's the tip.  You might think you are really smart if you take advantage of the fact that Rails has a very handy initializers folder and put a file in there called mail.rb with your mail configuration.</p>\n<p>DON'T do it.  The initializer will override the value set in the test.rb file and your tests will fail.</p>",frontmatter:{title:"Tip for Testing Email with Ruby on Rails and Shoulda",date:"August 18, 2008",imageUrl:null,image:null}}},pathContext:{path:"/tip-for-testing-email-with-ruby-on-rails-and-shoulda-2"}}}});
//# sourceMappingURL=path---tip-for-testing-email-with-ruby-on-rails-and-shoulda-2-12bd1cfab29787ecdea8.js.map