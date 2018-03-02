webpackJsonp([81242854636461],{1603:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-24-tip-for-testing-email-with-ruby-on-rails-and-shoulda/index.md absPath of file >>> MarkdownRemark",html:"<p>Shoulda comes with a great method for testing email called 'assert<em>sent</em>email'.  (If you try it and get a method missing error update Shoulda.  Not that anyone wouldn't know to just do that).  No matter what you use to test email as long as you are in test mode your emails will be placed into an array accessible using:</p>\n<pre><code class=\"ruby\">\nActionMailer::Base.deliveries\n</pre></code>\n<p>This is due to this line in test.rb found in the environments folder:</p>\n<pre><code class=\"ruby\">\nconfig.action_mailer.delivery_method = :test\n</pre></code>\n<p>Now here's the tip.  You might think you are really smart if you take advantage of the fact that Rails has a very handy initializers folder and put a file in there called mail.rb that contains all your email settings.</p>\n<p>DON'T do it.  That initializer will override your test settings and the email specific tests will always fail.</p>",frontmatter:{title:"Tip for Testing Email with Ruby on Rails and Shoulda",date:"July 24, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/tip-for-testing-email-with-ruby-on-rails-and-shoulda"}}}});
//# sourceMappingURL=path---tip-for-testing-email-with-ruby-on-rails-and-shoulda-57c893c25ac1bc06c8c5.js.map