webpackJsonp([46561480338843],{1486:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-06-05-stupid-wtf-actionviewmissingtemplate-exception-missing-template-users_usererb/index.md absPath of file >>> MarkdownRemark",html:"<p>If you've spent much time working with Ruby on Rails and more especially if you've done anything with json you might have run across errors like this:</p>\n<pre><code class=\"ruby\">\nActionView::MissingTemplate Exception: Missing template users/_user.erb\n</pre></code>\n<p>I was having this problem and doing a lot of cursing which is common when I stay up and write code until 2am which I know I should do and I also know that I shouldn't write really long run on sentences but I do it anyway.</p>\n<p>This error is usually the result of some code that looks like this:</p>\n<pre><code class=\"ruby\">\nformat.json do\n  @user_html = render_to_string( :partial => 'users/user', :object => @user )\n  render :json => { :success => true,\n                              :user_html => @user_html  }\nend\n</pre></code>\n<p>The cause of this error is that the format of the current request is :json.  There isn't an _user.json.erb template so Rails tries to find an _user.erb file.  That doesn't exist either and boom you spend the night sounding like a sailor.</p>\n<p>Now I don't pretend to be an expert but I have been accused of being a hack.  I solve the problem by changing the template format:</p>\n<pre><code class=\"ruby\">\nformat.json do\n  @template.template_format = :html\n  @user_html = render_to_string( :partial => 'users/user', :object => @user )\n  render :json => { :success => true,\n                              :user_html => @user_html  }\nend\n</pre></code>\n<p>The key is the addition of:</p>\n<pre><code class=\"ruby\">\n  @template.template_format = :html\n</pre></code>\n<p>Don't yell at me if it breaks.  I'm open to better suggestions but for now this does work and now my I can find other reasons to stay up late.</p>",frontmatter:{title:"Stupid WTF! ActionView::MissingTemplate Exception: Missing template users/_user.erb",date:"June 05, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/stupid-wtf-actionviewmissingtemplate-exception-missing-template-users_usererb"}}}});
//# sourceMappingURL=path---stupid-wtf-actionviewmissingtemplate-exception-missing-template-users-usererb-b2b6b2784f937c81e1a8.js.map