webpackJsonp([0xb2d8ccecda7],{984:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-07-09-activesalesforce-and-ruby-on-rails-21/index.md absPath of file >>> MarkdownRemark",html:'<p>We have to do an integration with Saleforce for a Rails project we are working on. I keep getting this error:</p>\n<p>The :dependent option expects either :destroy or :delete (:nullify)</p>\n<p>I <a href="http://forums.sforce.com/sforce/board/message?board.id=PerlDevelopment&#x26;message.id=3279">posted to the Salesforce forums</a> and didn\'t get any response so I did some more investigation. Turns out there is a bug and a patch:</p>\n<p><a href="http://rubyforge.org/tracker/index.php?func=detail&#x26;aid=19960&#x26;group_id=1201&#x26;atid=4729">http://rubyforge.org/tracker/index.php?func=detail&#x26;aid=19960&#x26;group_id=1201&#x26;atid=4729</a></p>\n<p>Lucky for me the latest version of Rails has a feature that unpacks all of your gems into your vendor directory. I unpacked activesalesforce, made the code changes by applying the patch (which just removes :dependent => :nullify) and viola.</p>',frontmatter:{title:"ActiveSalesforce and Ruby on Rails > 2.1",date:"July 09, 2008",imageUrl:null,image:null}}},pathContext:{path:"/activesalesforce-and-ruby-on-rails-21"}}}});
//# sourceMappingURL=path---activesalesforce-and-ruby-on-rails-21-e1c3e0eaa31bdff0c78f.js.map