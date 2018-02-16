webpackJsonp([43581247347508],{1066:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-06-05-changes-to-nested-routes-in-edge-rails/index.md absPath of file >>> MarkdownRemark",html:'<p>When I first saw nested resources in this <a href="http://www.b-simple.de/documents">REST paper</a> I thought cool that makes sense. So we started using the nested resource method in our projects. Then it got a bit wierd - like why should I have to do this/1/that/2/foo/3 if I want to get to foo. Why can\'t I just get to foo/3. Then I read that<a href="http://weblog.jamisbuck.org/2007/2/5/nesting-resources"> Jamis felt the same way</a>.</p>\n<p>Well crap.</p>\n<p>So then I fell in love with <a href="http://ryandaigle.com/articles/2007/5/6/what-s-new-in-edge-rails-restful-routing-updates">Edge Rails and found out that the :has_many and :has_one methods have found their way into routes</a>. (<a href="http://dev.rubyonrails.org/changeset/6588">Here\'s the change</a>.) This is very cool so I threw it in, but I could get the helper methods to work (stuff like entries_path(@feed) stopped working. I don\'t know why but I just have a heck of a time figuring out the helper methods, but they are worth using. For example future versions of Rails will replace \';\' with \'/\' in their restful routes. If you hard coded the \';\' you now have to go back and change it. You should have used the helper methods.\nAnyway, I found <a href="http://tuples.us/2007/05/02/changes-to-nested-resource-routes/">Changes to Nested Resource Routes</a> to be a grand helper when figuring out the new helper methods.</p>',frontmatter:{title:"Changes to Nested Routes in Edge Rails",date:"June 05, 2007",imageUrl:null,image:null}}},pathContext:{path:"/changes-to-nested-routes-in-edge-rails"}}}});
//# sourceMappingURL=path---changes-to-nested-routes-in-edge-rails-6fbe70fd4efe8cdbbbe1.js.map