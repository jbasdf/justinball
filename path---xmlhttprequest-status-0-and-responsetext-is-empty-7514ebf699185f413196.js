webpackJsonp([0x7898fa3260c8],{1584:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2012-01-12-xmlhttprequest-status-0-and-responsetext-is-empty/index.md absPath of file >>> MarkdownRemark",html:"<p>I ran across a problem in the javascript for the <a href=\"http://www.oerglue.com\">OER Glue</a> mashup process today that surprised me. We're using backbone.js and so I had constructed a login form via one of the views. When the form was submitted I would create a session object and then attempt to save that to the server. The problem was that the ajax request would immediately fail before the server returned anything and the XMLHttpRequest status was 0 and the responseText was empty. It took me way to long to realize that the submit button was cause the form to attempt to submit and since the form lacked an action attribute it couldn't submit anywhere and the request would fail. Changing  to  solves the problem. However, doing so also means the user can't hit enter to submit the form. Instead leave the  in place and return false from the method that handles the request or call event.preventDefault().</p>",frontmatter:{title:"XMLHttpRequest status 0 and responseText is empty",date:"January 12, 2012",imageUrl:null,image:null}}},pathContext:{path:"/xmlhttprequest-status-0-and-responsetext-is-empty"}}}});
//# sourceMappingURL=path---xmlhttprequest-status-0-and-responsetext-is-empty-7514ebf699185f413196.js.map