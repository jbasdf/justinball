webpackJsonp([0xb08b3311c89d],{1400:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-06-13-ruby-on-rails-render-action-doesnt-run-action/index.md absPath of file >>> MarkdownRemark",html:"<p>I want to be cool like everyone else so I use a REST methodology for most of my Rails controllers these days. I wasn't ever quite sure how my views managed to maintain values for a given object (User, Post, etc) after a failed call to create that that did a render :action => new. Most 'new' methods tend to do something like User.new which would create a new empty object. However, my views always had the correct values. For the longest time I have just let this go and not worried about the details, but today I started getting errors on a failed call to create in one of my controllers.</p>\n<p>In our 'new' method we not only do User.new we also load up a bunch of data into instance variables - @states, @countries, etc. If the call to create fails we call render :action => new. This in does not invoke the 'new' method in the controller. Rather it only renders the template (which is how all your values magically stick around even on when the create fails). However, the side effect is that your instance variables - @states, @countries, etc will be nil.</p>\n<p><a href=\"http://dev.rubyonrails.org/ticket/11037\">Here's the Trac Ticket indicating the decision not to run the method.</a></p>\n<p>I would rather they have actually run the method on 'render :action =>' and left template rendering to something more like 'render :template => ', but who I am to judge.</p>",frontmatter:{title:"Ruby on Rails &#8211; render :action doesn&#8217;t run action",date:"June 13, 2008",imageUrl:null,image:null}}},pathContext:{path:"/ruby-on-rails-render-action-doesnt-run-action"}}}});
//# sourceMappingURL=path---ruby-on-rails-render-action-doesnt-run-action-8d2159161c8fbfe561e4.js.map