webpackJsonp([0x89cf66900dc1],{1273:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-08-09-jquery-ajax-requests-are-html-not-js/index.md absPath of file >>> MarkdownRemark",html:'<p>I like jQuery. I use it in all my Rails projects these days. One thing I\'ve struggled with for the longest time is that for some reason all my jQuery ajax requests come through as html not as js.</p>\n<p>I thought adding something like this to application.js would fix the problem:</p>\n<pre><code class="javascript">\n// In application.js\njQuery.ajaxSetup({\n  \'beforeSend\': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}\n})\n</pre></code>\n<p>That won\'t save you. This change to Rails prevents the Accept header from being used:\n<a href="http://github.com/rails/rails/commit/2f4aaed7b3feb3be787a316fab3144c06bb21a27">http://github.com/rails/rails/commit/2f4aaed7b3feb3be787a316fab3144c06bb21a27</a></p>\n<p>The trick to fixing this problem comes from a comment in that commit:</p>\n<pre><code class="ruby">\n# Returns true if the request\'s "X-Requested-With" header contains\n# "XMLHttpRequest". (The Prototype Javascript library sends this header with\n# every Ajax request.)\n</pre></code>\n<p>jQuery doesn\'t send that parameter with each request.  I\'ve written before about modifying the request.\n<a href="http://www.justinball.comjquery-ajax-get-in-firefox-post-in-internet-explorer">http://www.justinball.comjquery-ajax-get-in-firefox-post-in-internet-explorer</a></p>\n<p>Taking the code from that post I just add a bit more information. Specifically include this line:</p>\n<pre><code class="ruby">\n  request.setRequestHeader("X-Requested-With", "XMLHttpRequest");\n</pre></code>\n<p>Your setup ends up looking something like this.  Drop this code into application.js and the ajax requests made via JQuery should start showing up as javascript format.</p>\n<pre><code class="ruby">\n  jQuery(document).ajaxSend(function(event, request, settings) {\n    request.setRequestHeader("Accept", "text/javascript");\n  \trequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");\n    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");\n    if (settings.type.toUpperCase() == \'GET\' || typeof(AUTH_TOKEN) == "undefined") return;\n    // settings.data is a serialized string like "foo=bar&baz=boink" (or null)\n    settings.data = settings.data || "";\n   \tif (typeof(AUTH_TOKEN) != "undefined")\n    \tsettings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);\n  });\n</pre></code>\n<p>I\'m using the jquery.form plugin so my code ends up looking like this:</p>\n<p>function apply<em>ajax</em>forms() {\njQuery(\'form.ajax\').ajaxForm({\ndataType: \'script\',\nbeforeSend: add_headers\n});\njQuery(\'form.ajax\').append(\'<input type="hidden" name="format" value="js" />\');\n}</p>\n<p>Passing the format as a hidden field to Rails ensures that the proper format handler is called.  It isn\'t the cleanest, but it works reliably and to make a normal form into an ajax form all I need to do is add \'ajax\' as a css class.</p>',frontmatter:{title:"jQuery Ajax requests are &#8216;html&#8217; not &#8216;js&#8217;",date:"August 09, 2010",imageUrl:null,image:null}}},pathContext:{path:"/jquery-ajax-requests-are-html-not-js"}}}});
//# sourceMappingURL=path---jquery-ajax-requests-are-html-not-js-a57c882c062cb4797f85.js.map