webpackJsonp([0x7d464bcfbb40],{1339:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2015-09-16-nasty-react-react-router-initialization-bug/index.md absPath of file >>> MarkdownRemark",html:'<p>Over the past few days I\'ve been tracking down a nasty bug in a <a href="https://facebook.github.io/react/">React</a> application. It\'s the kind of bug that manifests rarely in development\nbut shows up enough on production that users hate you for it. At first we couldn\'t reproduce it which means we couldn\'t fix it. Then by luck and frustration I was typing\nas quickly as I could to run the 400th test and found that typing a new url really fast caused the browser to reload new content before it was finished loading previous content\nand boom everything broke. Specifically in this application the login is not handled by React. I would log in and before the browser had a chance to render the resulting page I typed in\nthe url of the React application. This combination was enough to result in a console filled with these errors:</p>\n<p>This error shows up once:</p>\n<blockquote>\nWarning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.\n</blockquote>\n<p>This error shows up many, many, many times:</p>\n<blockquote>\nWarning: ReactMount: Root element has been removed from its original container. New container:\n</blockquote>\n<p>You get a couple of these:</p>\n<blockquote>\nUncaught Error: Invariant Violation: findComponentRoot(..., .0.2.0.0.0.0.1.0.0): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to \nforgetting a &lt;tbody&gt; when using tables, nesting tags like &lt;form&gt;, &lt;p&gt;, or &lt;a&gt;, or using non-SVG elements \nin an &lt;svg&gt; parent. Try inspecting the child nodes of the element with React ID ``.\n</blockquote>\n<p>\nI see errors like these frequently as we build React applications. They aren\'t particularly helpful at pointing to the exact code where the problem lives. However, the combination of the errors\npoints to the problem - if not the cause of the problem:\n<ol>\n  <li>There was a node in the DOM. React put it there.</li>\n  <li>Something terrible happened.</li>\n  <li>React can no longer find a parent DOM element, in our case that\'s the root element, and so everything is broken.</li>\n</ol>\n</p>\n<p>The big clue is "Root element has been removed". The root element looks like this:\n<pre><code class="html">\n  <div id="thing" data-reactid=".1">\n</pre></code>\nReact was expecting "data-reactid" to be .0. You know that because of the "Invariant Violation" error. React is looking for ".0.2.0.0.0.0.1.0.0". The .0 at the beginning says the root\nelement should have "data-reactid=.0" but it equals .1.\n</p>\n<p>\nThe application has a bit of code like this that renders directly into document.body:\n<pre><code class="javascript">\nRouter.run(Routes, (Handler, state) => {\n  React.render(<Handler />, document.body);\n});\n</pre></code>\nI\'ve seen that in plenty of examples so it seems harmless. The body is empty except for a couple of script tags for loading the React application.\n<p>\n<h3>The Fix</h3>\n<p>\nWe added a root div element and tucked it in after some of init scripts but before the react code:\n<pre><code class="html">\n  <script type="text/javascript">\n  // Some initialization stuff\n  </script>\n  <div id="main-app"></div>\n  <script src="web_pack_bundle.js" type="text/javascript"></script>\n</pre></code>\n<p>Change the router initialization:</p>\n<pre><code class="javascript">\nRouter.run(Routes, (Handler, state) => {\n  React.render(<Handler />, document.getElementById("main-app"));\n});\n</pre></code>\n<p>Now things work.</p>\n</p>\n<p>A couple of other people of run into the same problem:\n  <ul>\n    <li><a href="https://github.com/cvan/taro/issues/28">https://github.com/cvan/taro/issues/28</a></li>\n    <li><a href="https://github.com/yuanzong/fluxer/issues/1">https://github.com/yuanzong/fluxer/issues/1</a></li>\n  </ul>\n</p>',frontmatter:{title:"Nasty React React-Router initialization bug",date:"September 16, 2015",imageUrl:null,image:null}}},pathContext:{path:"/nasty-react-react-router-initialization-bug"}}}});
//# sourceMappingURL=path---nasty-react-react-router-initialization-bug-220f91a1f564a01159a3.js.map