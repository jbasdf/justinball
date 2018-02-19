webpackJsonp([0xb3ee368b7c9a],{1142:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2007-03-17-code-review-of-ozmozr-by-jamis-buck-and-marcel-molina/index.md absPath of file >>> MarkdownRemark",html:'<p>The review is actually less painful than I would have thought.  They are looking at parts of the code and giving specific feedback on code blocks.  Here\'s a quick summary:</p>\n<p>\'and\'  and \'or\' are different than \'||\' and \'&#x26;&#x26;\'.  The second returns boolean values.  The first returns strings.    Avoid using \'and\' and \'or\'.\nWhen dealing with errors.  Try to use exceptions instead of booleans and procedures.</p>\n<p>Putting models in the application.rb file is depricated and probably a bad idea anyway.  - As an excuse, we never liked that, but it was required by the login engine which we have gotten rid of.</p>\n<p>Empower your models.  Include as much data validation and manipulation in the model as possible.</p>\n<p>How to deal with business requirements that span models?  Create a model that spans the logic.</p>\n<p>Keep your controllers "skinny".  If your view doesn\'t require any code do this:</p>\n<pre><code class="ruby">\ndef about\n  render\nend\n</pre></code>\n<p>That lets you sort of self document your code.</p>\n<p>Use exceptions.  Nested ifs are ugly and if elsif is bad.  In the code proceed with the assumption that you were successful and catch problems in exceptions.</p>\n<p>Extract stuff from views into helpers.  ie The views have long lines that look like this:</p>\n<pre><code class="ruby">\n  &lt;li &lt;%if @current_tab == &quot;popular&quot; %&gt;class=&quot;current&quot;&lt;% end %&gt;&gt;&lt;%= link_to(&quot;Popular&quot;, :action =&gt; &quot;index&quot;) %&gt;&lt;/li&gt;\n</pre></code>\n<p>they should look like this:</p>\n<pre><code class="ruby">\n  &lt;%= tab &#039;popular&#039; %&gt;\n  def tab(name, options={})\n    lang = _(name)\n    s = "li>"\n    s << "class=\'current\'" if @current_tab == options[:name] || name.downcase\n    s << ">"\n    s << link_to(lang, options[:url] || send("#{name.downcase}_path"))\n    s << "</li>"\n  end\n</pre></code>\n<p>Instead of this:</p>\n<pre><code class="ruby">\n  &lt;% if @editable %&gt;\n  &lt;% end %&gt;\n</pre></code>\n<p>Do this:</p>\n<pre><code class="ruby">\n  &lt;% editable do %&gt;\n    stuff\n  &lt;% end %&gt;\n</pre></code>\n<p>In the helper add this:</p>\n<pre><code class="ruby">\ndef editable(&block)\n  concat(block.call, block.binding) if @editable\nend\n</pre></code>\n<p>which also lets you do stuff like this:</p>\n<pre><code class="ruby">\ndef editable(&block)\n  concat("<div>Look")\n  concat(block.call, block.binding) if @editable\nend\n</pre></code>\n<p>I talked to Jamis a bit about Rails.  A couple of questions I had:</p>\n<p>How do you test your rss, xml etc if you use responds_to?\nset :format => \'xml\' in your get in the test.</p>\n<p>How do you share code and manage it between applications?\nUse plugins.  They use propset when in development, but do plugin install when they deploy so that the plugin version is locked.</p>\n<p>They are going to send us their feedback which we will take to heart.</p>',frontmatter:{title:"Code Review of Ozmozr by Jamis Buck and Marcel Molina",date:"March 17, 2007",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/code-review-of-ozmozr-by-jamis-buck-and-marcel-molina"}}}});
//# sourceMappingURL=path---code-review-of-ozmozr-by-jamis-buck-and-marcel-molina-83f41e12f8a4b3f0dde6.js.map