webpackJsonp([0xc93bba90c4d],{1350:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-08-29-pass-attributes-to-an-emberjs-view/index.md absPath of file >>> MarkdownRemark",html:'<p>This is one of those things that should be easy and it\'s probably obvious to most people but it threw me for a while.\nI wanted to pass a value into my ember.js view at the moment that I declare the view. It\'s a static value, just a css class\nname, so it doesn\'t need to be bound to anything. Turns out it\'s really not that hard:</p>\n<p>Add a property to your view:</p>\n<pre><code class="javascript">\nApp.ModalView = Ember.View.extend({\n  aClassName: \'modal\'\n});\n</pre></code>\n<p>When you use the view just set the property:</p>\n<pre><code class="html">\n{{#view App.ModalView aClassName="wide_modal"}}\n  Some great content goes here\n{{/view}}\n</pre></code>\n<p>Use the value in your template:</p>\n<pre><code class="html">\n  &lt;div {{bindAttr class=&quot;view.aClassName&quot;}}&gt;\n    More stuff here\n  &lt;/div&gt;\n</pre></code>',frontmatter:{title:"Passing a value to ember.js view from handlebars template",date:"August 29, 2013",imageUrl:null,image:null}}},pathContext:{path:"/pass-attributes-to-an-emberjs-view"}}}});
//# sourceMappingURL=path---pass-attributes-to-an-emberjs-view-be1502c02c2d6cb55bc4.js.map