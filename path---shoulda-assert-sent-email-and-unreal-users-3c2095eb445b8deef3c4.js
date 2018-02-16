webpackJsonp([54601006086643],{1451:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-24-shoulda-assert_sent_email-and-unreal-users/index.md absPath of file >>> MarkdownRemark",html:'<p>I have been banging my head against a problem in my testing.  Using the UI everything worked as expected, but my tests were failing when I tried to see if emails were being sent in a specific case.</p>\n<p>Here\'s the test I was trying to run using Shoulda:</p>\n<pre><code class="ruby">\ncontext "reset password for user that has not been activated" do\n    setup do\n        @email = users(:not_activated_user).email\n        @emails.clear\n        # this code should send out a reset password email after setting up a password reset code.\n        post :create, :reset_password => {:email => users(:not_activated_user).email}\n    end\n\n    should "send reset notification email" do\n        assert_sent_email do |email|\n            email.subject =~ /You have requested to change your/ &&\n            email.to.include?(@email) &&\n            email.body.include?("You requested that your #{GlobalConfig.application_name} password be reset, but your account is not yet active.")\n        end\n    end\n\n    should_set_the_flash_to(/A password reset link has been sent to your email address/i)\n    should_redirect_to "login_path"\n\nend\n</pre></code>\n<p>Here\'s the yml file I was using:</p>\n<pre><code class="ruby">\nquentin:\n      login: quentin\n      email: quentin@example.com\n      newsletter: 1\n      notify_of_events: 1\n      terms_of_service: 1\n      salt: 7e3041ebc2fc05a40c60028e2c4901a81035d3cd\n      crypted_password: 00742970dc9e6319f8019fd54864d3ea740f04b1 # test\n      activation_code: 8f24789ae988411ccf33ab0c30fe9106fab32e9b\n      activated_at: &lt;%= 5.days.ago.to_s :db %&gt;\n      password_reset_code: 8f24789ae3484122cf33ab0c3ffe9106fab334de\n\nnot_activated_user:\n      login: not_activated_user\n      email: not_activated_user@example.com\n      newsletter: 0\n      notify_of_events: 0\n      terms_of_service: 1\n      salt: 7e3041ebc2fc05a40c60028e2c4901a81035d3cd\n      crypted_password: 00742970dc9e6319f8019fd54864d3ea740f04b1 # test\n      activation_code: 9f24789ae988411ccf33ab0c30fe9106fab32e9a\n      password_reset_code: 8f24789ae3484122cf33ab0c3ffe9106fab334de\n</pre></code>\n<p>For some reason the email part of the test failed every time.  I finally changed my code to this:</p>\n<pre><code class="ruby">\ncontext "reset password for user that has not been activated" do\n    setup do\n        user = create_user\n        @email = user.email\n        @emails.clear\n        post :create, :reset_password => {:email => @email}\n     end\n\n    should "send reset notification email" do\n        assert_sent_email do |email|\n            email.subject =~ /You have requested to change your/ &&\n            email.to.include?(@email) &&\n            email.body.include?("You requested that your #{GlobalConfig.application_name} password be reset, but your account is not yet active.")\n        end\n    end\n\n    should_set_the_flash_to(/A password reset link has been sent to your email address/i)\n    should_redirect_to "login_path"\n\nend\n</pre></code>\n<p>create_user creates a user in the database instead of using the users from the users.yml file.  Using this method everything started working.  I have found that frequently I have better luck with my tests if I create real users.  I am sure there is a good reason for this, but I am stopping my research at knowing that I need to create users or other object when the tests don\'t work as expected.</p>',frontmatter:{title:"Shoulda, assert_sent_email and Unreal Users",date:"July 24, 2008",imageUrl:null,image:null}}},pathContext:{path:"/shoulda-assert_sent_email-and-unreal-users"}}}});
//# sourceMappingURL=path---shoulda-assert-sent-email-and-unreal-users-3c2095eb445b8deef3c4.js.map