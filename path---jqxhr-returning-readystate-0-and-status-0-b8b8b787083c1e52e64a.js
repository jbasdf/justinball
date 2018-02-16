webpackJsonp([0xc3f30b12d1fb],{1269:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-02-25-jqxhr-returning-readystate-0-and-status-0/index.md absPath of file >>> MarkdownRemark",html:"<p>I've seen this error a couple of times and I always forget what causes it so for my own sanity I post it here.</p>\n<p>If you make an Ajax request and the response comes back with:</p>\n<p>  statusText: \"error\"\nstatus: 0\nreadyState: 0</p>\n<p>then you likely have one of two problems:</p>\n<ol>\n<li>\n<p>You are making a cross domain request and the browser is shutting you down. Check to see if you can turn on CORS or try using JSONP.</p>\n</li>\n<li>\n<p>Your Ajax request was triggered via a form submit or clicking on a link and you didn't call e.preventDefault() inside of your event handler. The browser will go ahead and submit the form or follow the link and execute your Ajax code. The form submit or the link follow will win and the browser will immediately terminate your request and give you back a readyState 0.</p>\n</li>\n</ol>\n<p>I ran into the second issue with some Backbone code this evening. In my code the user clicks a button (really a link) and that link saves the model back to the server before traversing to the url specified in the anchor. I know you usually want to protect posts with a form POST but in this case I really do want to follow the url in the link but I need to make sure that the resource existed first and create it if it doesn't. (It's complicated).</p>",frontmatter:{title:"jqXHR Returning Readystate 0 and Status 0?",date:"February 25, 2013",imageUrl:null,image:null}}},pathContext:{path:"/jqxhr-returning-readystate-0-and-status-0"}}}});
//# sourceMappingURL=path---jqxhr-returning-readystate-0-and-status-0-b8b8b787083c1e52e64a.js.map