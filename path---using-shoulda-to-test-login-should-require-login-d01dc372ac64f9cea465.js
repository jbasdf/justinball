webpackJsonp([69776556502725],{1548:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-10-02-using-shoulda-to-test-login-should_require_login/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve had my problems with shoulda, but one very powerful component of the testing framework is the ability to create macros.\nHere\'s one that checks to make sure a user has to be logged in to access an action.  Put it into test/shoulda_macros/authentication.rb.\n(You can name the file anything you want I just thought authentication.rb made sense)</p>\n<pre><code class="ruby">\nTest::Unit::TestCase.class_eval do\n  def self.should_require_login(*actions)\n    actions.each do |action|\n      should "Require login for \'#{action}\' action" do\n        get(action)\n        assert_redirected_to(login_url)\n      end\n    end\n  end\nend\n</pre></code>\n<p>Then inside your controller test do something like this:</p>\n<pre><code class="ruby">\nclass UserControllerTest < ActionController::TestCase\n  should_require_login :edit, :update, :destroy\nend\n</pre></code>',frontmatter:{title:"Using Shoulda to test login &#8211; should_require_login",date:"October 02, 2008",imageUrl:null,image:null}}},pathContext:{path:"/using-shoulda-to-test-login-should_require_login"}}}});
//# sourceMappingURL=path---using-shoulda-to-test-login-should-require-login-d01dc372ac64f9cea465.js.map