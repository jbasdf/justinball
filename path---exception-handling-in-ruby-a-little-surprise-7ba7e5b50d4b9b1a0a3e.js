webpackJsonp([0xbb408f598c8b],{1138:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-11-30-exception-handling-in-ruby-a-little-surprise/index.md absPath of file >>> MarkdownRemark",html:'<p>I\'ve got a rake task that includes a section where I do something like this:</p>\n<pre><code class="ruby">\nbegin\n  # Do some things\nrescue => ex\n   puts "Error: #{ex}"\nend\n</pre></code>\n<p>I know that typically you want to be specific about the errors that you catch, but in this case I just want to move on. The things that didn\'t happen on this pass will get caught the next time around. It turns out that this code block won\'t always catch every error. It took some <a href="http://www.justinball.compph-profanity-per-hour">serious thinking</a> to figure out why.  <a href="http://lindsaar.net/2007/12/9/rbuf_filltimeout-error">Network time out errors are not a subclass of StandardError and thus will not be caught in the block above.</a> Instead you have to put together a block like this:</p>\n<pre><code class="ruby">\nbegin\n  # Do some things\nrescue => ex\n   puts "Error: #{ex}"\nrescue Timeout::Error => e\n  puts "Timeout Error: #{e}"\nend\n</pre></code>\n<p>That will catch the Timeout error and allow you to deal with it appropriately.</p>',frontmatter:{title:"Exception Handling in Ruby &#8211; a Little Surprise",date:"November 30, 2010",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/exception-handling-in-ruby-a-little-surprise"}}}});
//# sourceMappingURL=path---exception-handling-in-ruby-a-little-surprise-7ba7e5b50d4b9b1a0a3e.js.map