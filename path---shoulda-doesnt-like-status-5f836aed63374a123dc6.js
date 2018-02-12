webpackJsonp([0xbfd5f967de77],{1445:function(t,o){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-25-shoulda-doesnt-like-status/index.md absPath of file >>> MarkdownRemark",html:'<p>One of the models in a project I am working on right now ends in \'status\'.  Rails handles that just find but in my tests I started noticing an odd error:</p>\n<pre><code class="ruby">\ntest: Lookup should belong_to lookup_status. (LookupTest):\nNameError: uninitialized constant LookupStatu\n</pre></code>\n<p>The Shoulda test looks like this:</p>\n<pre><code class="ruby">\n   should_belong_to :lookup_status\n</pre></code>\n<p>Nothing to complicated there.  Should recognizes the relationship just find but when it tries to find a class it goes looking for LookupStatu.  I fixed this by adding the the class name to the relationship thus:</p>\n<pre><code class="ruby">\nbelongs_to :lookup_status, :class_name => \'LookupStatus\'\n</pre></code>',frontmatter:{title:"Shoulda Doesn&#8217;t like &#8216;Status&#8217;",date:"July 25, 2008",imageUrl:null,image:null}}},pathContext:{path:"/shoulda-doesnt-like-status"}}}});
//# sourceMappingURL=path---shoulda-doesnt-like-status-5f836aed63374a123dc6.js.map