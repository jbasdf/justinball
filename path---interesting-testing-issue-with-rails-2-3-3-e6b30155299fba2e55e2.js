webpackJsonp([0x64fa87b5ea2c],{1317:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-07-24-interesting-testing-issue-with-rails-2-3-3/index.md absPath of file >>> MarkdownRemark",html:"<p>I'm not sure if this applies to all the versions of Rails, but right now I'm using the latest 2.3.3.  I'm using shoulda to do testing and my code looks like this:</p>\n<pre><code class=\"ruby\">\n    context \"GET show\" do\n      setup do\n        @feed = Factory(:feed)\n        get :show, :id => @feed.to_param\n      end\n      should_not_set_the_flash\n      should_respond_with :success\n      should_render_template :show\n    end\n</pre></code>\n<p>The method I am testing looks like this:</p>\n<pre><code class=\"ruby\">\n  def show\n    @feed = Feed.find(params[:id])\n    @entries = @feed.entries\n    respond_to do |format|\n      format.pjs { debugger; render :template => 'feeds/show', :layout => false }\n      format.json { render :json => @feed.as_json }\n      format.html { render :template => 'feeds/show', :layout => params[:layout] || true  }\n    end\n  end\n</pre></code>\n<p>The result of running this test is:\n<strong>Missing template feeds/show.erb in view path app/views</strong></p>\n<p>That is very irritating.</p>\n<p>I found that if I change the order as below everything works fine:</p>\n<pre><code class=\"ruby\">\n  def show\n    @feed = Feed.find(params[:id])\n    @entries = @feed.entries\n    respond_to do |format|\n      format.html { render :template => 'feeds/show', :layout => params[:layout] || true  }\n      format.pjs { debugger; render :template => 'feeds/show', :layout => false }\n      format.json { render :json => @feed.as_json }\n    end\n  end\n</pre></code>\n<p>I can also change the test and explicitly list the format:</p>\n<pre><code class=\"ruby\">\n    context \"GET show\" do\n      setup do\n        @feed = Factory(:feed)\n        get :show, :id => @feed.to_param, :format => 'html'\n      end\n      should_not_set_the_flash\n      should_respond_with :success\n      should_render_template :show\n    end\n</pre></code>\n<p>I'm guessing that is the appropriate way to deal with things.  It appears that the test doesn't send in 'html' as a default format.   I might add that this test lives inside a Rails engine.  I'm not sure if that affects things, but I figure that I would list this issue here in case anyone else runs into the same problem or in case I forget how to deal with this which is quite likely.</p>",frontmatter:{title:"Interesting testing issue with Rails 2.3.3",date:"July 24, 2009",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/interesting-testing-issue-with-rails-2-3-3"}}}});
//# sourceMappingURL=path---interesting-testing-issue-with-rails-2-3-3-e6b30155299fba2e55e2.js.map