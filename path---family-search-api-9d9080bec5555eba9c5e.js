webpackJsonp([0x8f2aaae63837],{1211:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-03-12-family-search-api/index.md absPath of file >>> MarkdownRemark",html:'<p>If these posts don\'t make sense sorry. They are for my notes.</p>\n<p>API is based on REST. A lot of data is sensitive so they use SSL to secure data transfer. Prefer XML elements over XML attributes. Everything is UTF-8 encoded. Right now user access is limited to LDS members. That is interesting. I guess you have to have a membership number so that you can access the API, but they will change that over time.</p>\n<p>They need to go faster. This is all pretty bla so far.</p>\n<p>Query looks like this:</p>\n<p><a href="https://api.familysearch.org/%7Bmodule%7D/%7Bversion%7D/%7Bendoint%7D/%7Bid%7D">https://api.familysearch.org/{module}/{version}/{endoint}/{id}</a></p>\n<p>You need a developer key. Keys are tied to individuals so they can get a hold of you when you break something.</p>\n<p>Login like this:</p>\n<p><a href="https://api.familysearch.org/identity/v1/login?key=MMMM-MMMM-MMMM-MMMM-MMMM-MMMM-MMMM-MMMM">https://api.familysearch.org/identity/v1/login?key=MMMM-MMMM-MMMM-MMMM-MMMM-MMMM-MMMM-MMMM</a></p>\n<p>You will have to sign an agreement to get a key.</p>\n<p>After you authenticate you get a session key which you then have to pass back on each request. They give you back xml for each request.</p>\n<p>It looks like you have to send an email and justify your reason for access to get a key. It would be nice if this process were simpler and faster. Because the api is REST based you can hit the read sections in a browser. We could al be sitting here playing with it if we could get keys.</p>\n<p>They are listing the opportunities they think are available:</p>\n<ul>\n<li>Synchronization</li>\n<li>Tree Cleaning</li>\n<li>Interactive GedCom import</li>\n<li>Charts and Printing</li>\n</ul>\n<p>They will be adding throttling to control how much data third party applications download. They are going to add a new authorization model. They will also be adding read only guest access.</p>\n<p>The developer website is</p>',frontmatter:{title:"Family Search API",date:"March 12, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/family-search-api"}}}});
//# sourceMappingURL=path---family-search-api-9d9080bec5555eba9c5e.js.map