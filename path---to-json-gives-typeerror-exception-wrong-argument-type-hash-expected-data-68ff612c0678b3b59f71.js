webpackJsonp([9714776297700],{1532:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-08-17-to_json-gives-typeerror-exception-wrong-argument-type-hash-expected-data/index.md absPath of file >>> MarkdownRemark",html:'<p>Tonight for no apparent reason my tests started turning up this error whenever I tried to call to_json:</p>\n<pre><code class="ruby">\nTypeError Exception: wrong argument type Hash (expected Data)\n</pre></code>\n<p>Specifically, my to_json call looked like this:</p>\n<pre><code class="ruby">\nrespond_to do |format|\n  format.js { render :json => @states.to_json(:only => [:id, :name]) }\nend\n</pre></code>\n<p>In the debugger .to<em>json worked but to</em>json(:only => [:id, :name]) did not.</p>\n<p>Needless to say given that since I hadn\'t touch this code in a while I was not happy and spent some time describing my code with <a href="http://www.foxnews.com/story/0,2933,531977,00.html?test=latestnews">colorful metaphors</a>.  Nothing makes me crazy like code that magically stops working.</p>\n<p>Turns out I had installed <a href="http://github.com/shvets/google_translate/tree/master">shvets-google<em>translate</a> that depended on json</em>pure. <a href="http://groups.google.com/group/rubyonrails-talk/browse_thread/thread/b70e391d53063bab">json_pure doesn\'t seem to play nice with activesupport</a>.</p>\n<p>For some that works.  For me it did not.  Apparently, <a href="http://blog.swivel.com/code/2009/03/index.html">Active Support and JSON gems don\'t play nice</a>.</p>\n<p>No more colorful metaphors (for now).</p>\n<p>UPDATE Ruby on Rails 2.3.3 fixes this problem with as_json.  Thanks guys!</p>',frontmatter:{title:"to_json gives TypeError Exception: wrong argument type Hash (expected Data)",date:"August 17, 2009",imageUrl:null,image:null}}},pathContext:{path:"/to_json-gives-typeerror-exception-wrong-argument-type-hash-expected-data"}}}});
//# sourceMappingURL=path---to-json-gives-typeerror-exception-wrong-argument-type-hash-expected-data-68ff612c0678b3b59f71.js.map