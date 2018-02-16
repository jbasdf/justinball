webpackJsonp([0xffe8dc945f20],{1238:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-01-20-in-javascript-string-replace-doesnt-do-what-you-think-it-does/index.md absPath of file >>> MarkdownRemark",html:'<p>When doing a string replace in javascript if you try something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var str = \'test\';\nstr.replace(\'t\', \'s\');</code></pre>\n      </div>\n<p>You\'ll find that the result is:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sest</code></pre>\n      </div>\n<p>The replace method in javascript is not a global replace. Instead it does a single replace and moves on.</p>\n<p>If you want to do a global replace try using a regular expression instead:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>var str = \'test\';\nstr.replace(/t/g, \'s\');</code></pre>\n      </div>\n<p>the result will be:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sess</code></pre>\n      </div>\n<p>The reason for that is the \'g\' hanging of the end of the expression /t/g. That tells javascript that the replace should be global.</p>',frontmatter:{title:"In javascript string replace doesn&#8217;t do what you think it does",date:"January 20, 2011",imageUrl:null,image:null}}},pathContext:{path:"/in-javascript-string-replace-doesnt-do-what-you-think-it-does"}}}});
//# sourceMappingURL=path---in-javascript-string-replace-doesnt-do-what-you-think-it-does-d663865aa5d0a305cadc.js.map