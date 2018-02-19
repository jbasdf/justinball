webpackJsonp([95245646348969],{1116:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-03-17-bringing-the-web-back-to-the-blind-with-ryan-florence/index.md absPath of file >>> MarkdownRemark",html:"<p><a href=\"http://ryanflorence.com/\">Ryan Florence</a> presenting \"Bringing the Web Back to the Blind\".</p>\n<p>Probably the biggest accessiblity resource on the web: <a href=\"http://webaim.org/\">webaim.org</a>.</p>\n<h2>Accessiblity</h2>\nAccessiblity is more than just alt tags. You still want alt tags but there's more.\n<p>Use your headers for organization of content rather than for visual display. It helps blind users navigation through\nthe content based on its importance.</p>\n<h2>Landmarks</h2>\nUse the role tag on elements. For example:\n<pre><code class=\"html\">\n<div role=\"main\"></div>\n</pre></code>\n<p>Adding 'role=\"main\"' provides a 'landmark' in the page that a screen reader can find. A blind user can use these landmarks\nto quickly navigate to specific sections of the page.</p>\n<p>Html 5 includes a 'main' tag as well as others like 'article' that screen readers can use as landmarks.</p>\n<h2>Screen Reader Specific Content</h2>\nUse css to hide text that is important for screen readers. Create a 'visually-hidden' css class then include\nadditional information to to describe the element. For example, developers frequently use an 'x' to close a modal\nor other window. The screen reader will read this as 'times'. We can add additional information indicating that the\nlink/button will close the window.\n<p>Screen readers will execute Javascript!</p>\n<h2>ARIA</h2>\nAdd screen reader specific text with an attribute:\n<blockquote>\naria-label=\"A close button\"\n</blockquote>\n<p>Tell the screen reader to ignore an element with:</p>\n<blockquote>\naria-hidden=\"true\"\n</blockquote>\n<p><a href=\"http://www.w3.org/WAI/intro/aria\">WAI ARIA</a> is a specification that defines how to make your website more accessible.</p>\n<p>Aria attributes that can be used with tabs:</p>\n<ul>\n<li>aria-selected</li>\n<li>aria-controls</li>\n<li>aria-expanded</li>\n</ul>\n<p>However, if you don't know how to use 'aria' then don't. You'll probably make things worse.</p>\n<p>We frequently think of Visual Interaction Design. Consider \"Audible Interaction Design\". Try out a screen reader and\nsee what it's like to use your website without the visual UI.</p>",frontmatter:{title:"Bringing the Web Back to the Blind with Ryan Florence",date:"March 17, 2014",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/bringing-the-web-back-to-the-blind-with-ryan-florence"}}}});
//# sourceMappingURL=path---bringing-the-web-back-to-the-blind-with-ryan-florence-60aaf502acf732e1f005.js.map