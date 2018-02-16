webpackJsonp([0xca66f7235d88],{1424:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-03-12-ruby-fs-api/index.md absPath of file >>> MarkdownRemark",html:"<p>I am in the <a href=\"http://code.google.com/p/ruby-fs-api/\">Ruby-fs API</a> presentation now.  Funding for the library came from USFamilyTree.com.</p>\n<p>It is REST based.</p>\n<p>Data model is:\nPerson\nPerson has many Assertions\nAssertion has one Contributor, Citation(not yet implemented), Note</p>\n<p>Each person has a lot of data associated with them so you don't want to be parsing xml data on the fly.</p>\n<p>Include the library with this:\nrequire 'family<em>tree</em>api/client'</p>\n<p>The library will handle turning all the data into objects for you.  This makes access to the API slick.  I love ruby.\nie</p>\n<pre><code class=\"ruby\">\nperson = client.summary_person 'KW3B-2L7', descendants => 2\nmother = person.mother\ngrandmother = person.mother.mother\n</pre></code>\n<pre><code class=\"ruby\">\nsearch_params = {:givenName => 'Parker', :familyName => 'Flech'}\nresults = client.search search_params\n</pre></code>\n<p>As with all things Ruby this API makes it very easy to talk to FamilySearch.  If you are in the genealogy space and know Ruby give it a try.</p>\n<p>The good news is that they are open to patches.  The project is in active development.  They will be creating a plugin for Rails.  Right now he just checks out the code to his lib directory.</p>",frontmatter:{title:"Ruby fs-api",date:"March 12, 2008",imageUrl:null,image:null}}},pathContext:{path:"/ruby-fs-api"}}}});
//# sourceMappingURL=path---ruby-fs-api-4efbbaf64de74b4d593c.js.map