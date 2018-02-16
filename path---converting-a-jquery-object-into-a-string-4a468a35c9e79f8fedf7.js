webpackJsonp([0x6bf0e9c84e68],{1083:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-02-08-converting-a-jquery-object-into-a-string/index.md absPath of file >>> MarkdownRemark",html:"<p>I'm so used to everything having a 'to_s' method that when it's not there I feel like going out a kicking puppies. In jQuery you can always get the contents of a jQuery object thus:</p>\n<p>Html:</p>\n<pre><code class=\"javascript\">\nvar html = myObject.html();\n</pre></code>\n<p>Text:</p>\n<pre><code class=\"javascript\">\nvar html = myObject.text();\n</pre></code>\n<p>That's great and has been extremely helpful over the years but what if you want the html of the object as well? It turns out that there are others that have had this problem. <a href=\"http://stackoverflow.com/questions/652763/jquery-object-to-string\">Here's the solution on stackoverflow.com</a>.  <a href=\"http://bugs.jquery.com/ticket/8142#comment:5\">There's a request for the jQuery team to implement an outerHtml() method</a>. Go add a comment and push the request, please.</p>\n<p>I was using the solution from stackoverflow and it worked well until one day all of the contents of my page vanished upon execution of a method leaving me with a serious WTF at 1 am in the morning.</p>\n<p>Here's part of my code. I've found that for manipulating an html string jQuery is the bomb. In the code below I take a snippet of html, remove whitespace and then rewrite links.</p>\n<pre><code class=\"javascript\">\n\tclean_snippet: function(snippet){\n\t\tsnippet = snippet.replace(/'/gi, \"&#40;\"); // single quote will cause javascript problems inline.\n\t\tsnippet = snippet.replace(/[\\t\\n\\r]/gi, \"\"); // remove tabs, newlines, and return chars\n\t\treturn this.rewrite_links(snippet);\n\t},\n\n\t// Rewrite links in the snippets so they go back to the parent site.\n\trewrite_links: function(snippet){\n\t\tvar obj = jQuery(snippet);\n\t\tobj.find('[href]').attr('href', function(){ return com.oerglue.browser.make_abs_url(this.href); });\n\t\tobj.find('[src]').attr('src', function(){ return com.oerglue.browser.make_abs_url(this.src); });\n\t\tobj.find('[action]').attr('action', function(){ return com.oerglue.browser.make_abs_url(this.action); });\n\t\treturn com.oerglue.common.obj_to_s(obj);\n\t},\n</pre></code>\n<p>(Note this code won't work standalone there are some missing methods. It's just here for illustration).</p>\n<p>When I'm done rewriting links in the html snippet I think convert the jQuery object back into html. I originally used a derivative of the code from the StackOverFlow conversation:</p>\n<pre><code class=\"javascript\">\nobj_to_s : function(obj) {\n  jQuery('< div>').append(obj.clone()).remove().html();\n},\n</pre></code>\n<p>That works until obj contains script tags which it frequently does when you are dealing with arbitrary html. <a href=\"http://stackoverflow.com/questions/610995/jquery-cant-append-script-element\">It turns out that 'append' and all other similar jQuery methods are smart about how they append data and they know to look for script tags</a>.  Because of that when I was appending the object the scripts from the page I'm operating on are re-executed which causes all kinds of nasty problems - see how many web pages can handle the re-execution of bits of javascript from the page. In most cases jQuery is doing what you want. Most of the time when adding new stuff you want the scripts to run. However, when you are building a string you don't want the code to run rather you just want a string representation of the code.</p>\n<p>I've rewritten my obj<em>to</em>s code to look like this:</p>\n<pre><code class=\"javascript\">\n  obj_to_s : function(obj) {\n\t\tvar tmp = jQuery('<div>');\n\t\tjQuery.each(obj, function(index, item){\n\t\t\tif(!jQuery.nodeName(item, \"script\")){\n\t\t\t\ttmp.append(item);\n\t\t\t}\n\t\t});\n\t\treturn tmp.html();\n  },\n</pre></code>\n<p>I currently ignore scripts when I do the append and now I get a string. I'll post an update when I have a solution for appending the script text.</p>\n<p>UPDATE:</p>\n<p>Thanks goes to <a href=\"http://twitter.com/ryankshaw\">Ryan Shaw</a> for helping me work through this. The code below extends jQuery to include an outerHtml method and provides a way to include or exclude scripts.</p>\n<pre><code class=\"javascript\">\n\njQuery.fn.outerHtml = function(include_scripts) {\n\tif(include_scripts === undefined){ include_scripts = false; }\n\tvar clone = this.clone();\n\tvar items = jQuery.map(clone, function(element){\n\t\tif(jQuery.nodeName(element, \"script\")){\n\t\t\tif(include_scripts){\n\t\t\t\tvar attributes;\n\t\t\t\tif(element.attributes){\n\t\t\t\t\tattributes = jQuery.map(element.attributes, function(attribute){\n\t\t\t\t    return attribute.name + '=\"' + attribute.value + '\" ';\n\t\t\t\t  });\n\t\t\t\t}\n\t\t\t\treturn '<' + element.nodeName + ' ' + attributes.join(' ') + \">\" + jQuery(element).html() + \"</\" + element.nodeName +'>';\n\t\t\t} else {\n\t\t\t\treturn '';\n\t\t\t}\n\t\t} else {\n\t\t\treturn jQuery('<div>').append(element).remove().html();\n\t\t}\n\t});\n\treturn items.join('');\n}\n\n</pre></code>\n<p><a href=\"https://gist.github.com/817477\">Here's the gist on github</a>.</p>",frontmatter:{title:"Converting a jQuery Object into a String",date:"February 08, 2011",imageUrl:null,image:null}}},pathContext:{path:"/converting-a-jquery-object-into-a-string"}}}});
//# sourceMappingURL=path---converting-a-jquery-object-into-a-string-4a468a35c9e79f8fedf7.js.map