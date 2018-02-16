webpackJsonp([0xfd37b1a6ac52],{1442:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-06-25-sending-email-with-ruby-on-rails-2-3-2-and-gmail/index.md absPath of file >>> MarkdownRemark",html:"<p>If you need an easy way to setup email for your company or for a client it's hard to not love Google Apps.  (<a href=\"http://www.google.com/apps/intl/en/group/index.html\">The 'standard' ie free version is here</a>).</p>\n<p>It is very likely that at some point you will need to send out emails from your application.  Don't cry.  Gmail can do this for you.  Rails 2.3.2 makes it easier than ever with the addition of 'enable<em>starttls</em>auto'.  Put the following code in production.rb, development.rb or environment.rb and you 'should' be able to send out emails:</p>\n<pre><code class=\"ruby\">\n  ActionMailer::Base.smtp_settings = {\n    :enable_starttls_auto => true,\n    :address        => 'smtp.gmail.com',\n    :port           => 587,\n    :domain         => 'your.domain.com',\n    :authentication => :plain,\n    :user_name      => 'login@your.domain.com',\n    :password       => 'some_password'\n  }\n</pre></code>\n<p>If you are one of the lucky ones this will actually work.  It didn't work for me but since I still needed to get email working here's what I did:</p>\n<p>First be sure to activate the email account that you are using.  To do that you only need to login.  Google will walk you through entering a captcha etc.</p>\n<p>You might get this error:\n<strong>Net::SMTPAuthenticationError: 530 5.7.0 Must issue a STARTTLS command first.</strong></p>\n<p>If you do then check your Ruby version.  <a href=\"https://rails.lighthouseapp.com/projects/8994/tickets/1336-starttls-for-smtp-makes-gmail-go\">Ruby 1.8.7 has this built in but Ruby 1.8.6 does not</a>.</p>\n<p>I'm currently running my apps on <a href=\"http://www.engineyard.com/solo\">EngineYard's Solo product &#x3C;</a>a href=\"<a href=\"https://cloud-support.engineyard.com/discussions/problems/203-engineyard-cloud-support-for-ruby-187-p73%22%3Ewhich\">https://cloud-support.engineyard.com/discussions/problems/203-engineyard-cloud-support-for-ruby-187-p73\">which</a> is currently using Ruby 1.8.6</a> so changing versions isn't an option (not an easy option anyway).</p>\n<p>The next best thing is to <strong>get action<em>mailer</em>tls</strong>.  Most of the links you will find in forum and blog posts are broken.  The code is on github and neatly packaged as a gem: <a href=\"http://github.com/openrain/action_mailer_tls/tree/master\">http://github.com/openrain/action<em>mailer</em>tls/tree/master</a>.  Follow the directions to install and configure the plugin there and you should be able to send email.</p>\n<p>Here's a couple of handy conversations for reference:\n<a href=\"http://www.railsforum.com/viewtopic.php?id=28480\">http://www.railsforum.com/viewtopic.php?id=28480</a>\n<a href=\"http://www.ruby-forum.com/topic/184137\">http://www.ruby-forum.com/topic/184137</a></p>",frontmatter:{title:"Sending email with Ruby on Rails 2.3.2 and gmail",date:"June 25, 2009",imageUrl:null,image:null}}},pathContext:{path:"/sending-email-with-ruby-on-rails-2-3-2-and-gmail"}}}});
//# sourceMappingURL=path---sending-email-with-ruby-on-rails-2-3-2-and-gmail-4c0cb5d9ecb4e8354250.js.map