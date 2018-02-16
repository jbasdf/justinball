webpackJsonp([0xfc7b38072e3],{1203:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2009-01-18-heirarchies-trees-jquery-prototype-scriptaculous-and-acts_as_nested_set/index.md absPath of file >>> MarkdownRemark",html:"<p>'single<em>message' should normally be set to false.  I added it in just in case I needed to render a single message for an ajax call.  If you aren't rendering an entire tree and thus have only one node then passing 'single</em>message = true' will force the method to call the database to get the level of the node in the tree.</p>\n<p>If you want to render a true tree structure (not just indents) then you'll need to do a bit of recursion.  Assuming @message is a root level message you can do this:</p>\n<pre><code class=\"ruby\">\n<div id=\"messageList\">\n  <ul id=\"message_tree\">\n    <% render_messages(@message) do |message| -%>\n      <%= message.text %>\n    <% end -%>\n  </ul>\n</div>\n</pre></code>\n<pre><code class=\"ruby\">\nmodule MessagesHelper\n\ndef render_messages(message, &block)\n  concat('<li id=\"message_' + message.id.to_s + '\" class=\"messageContainer delete-container\">', block.binding)\n  yield(message)\n  concat('<ul style=\"display:none;\" id=\"ul_' + message.dom_id + '\">', block.binding)\n  if has_children?(message.id)\n    children_of(message.id).each do |child|\n      render_messages(child, &block)\n    end\n  end\n  concat('</li></ul>', block.binding)\nend\n\n# HACK these methods assume a variable named @messages is defined.\n# This hack prevents us from having to pass messages all over\ndef has_children?(message_id)\n  @messages.any?{|message| message.parent_id == message_id}\nend\n\ndef children_of(message_id)\n  @messages.find_all{|message| message.parent_id == message_id}\nend\n\nend\n</pre></code>\n<p>(*Note that I've not fully tested the code above and I am betting it is not the most efficient.  At the very least you'll want to cache the resulting html.)</p>\n<p>Next you'll need to add some script to get the drag and drop to work.  It will look something like this.  Honestly I can't remember if I got this code from somewhere online or if I wrote it.  I am sure someone could make it generic, but in this instance we use css class names to add drag and drop functionality to the various nodes:</p>\n<pre><code class=\"javascript\">\njQuery(document).ready(function() {\n\n\tjQuery(\".messageContainer\").draggable({\n\t\tzIndex : 1000000,\n\t\trevert : 'invalid',\n\t\topacity : 0.5,\n\t\tscroll : true,\n\t\thelper : 'clone'\n\t});\n\n\tjQuery(\"#messageList\").droppable({\n\t\t\taccept: \".messageContainer\",\n\t\t\tdrop: function(ev, ui) {\n\t\t\t\tvar source_li = jQuery(ui.draggable);\n\t\t\t\tvar child_ul = jQuery(this).children('ul');\n\t\t\t\tvar message_id = source_li.children('input').val();\n\t\t\t\tvar parent_id = 0;\n\t\t\t\tif(same_parent(source_li, child_ul)){\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tinsert_alphabetic(child_ul, source_li);\n\t\t\t\tupdate_parent(message_id, parent_id);\n\t    }\n\t\t});\n\n\tjQuery(\".messageContainer\").droppable({\n\t  accept: \".messageContainer\",\n\t  hoverClass: 'messageContainer-hover',\n\t  tolerance : 'pointer',\n\t\tgreedy : true,\n    drop: function(ev, ui) {\n\t\t\tvar source_li = jQuery(ui.draggable);\n\t\t\tvar target_li = jQuery(this);\n\t\t\tvar message_id = source_li.children('input').val();\n\t\t\tvar parent_id = target_li.children('input').val();\n\t\t\tif(target_li.children('ul').length <= 0){\n\t\t\t\ttarget_li.append('<ul></ul>');\n\t\t\t}\n\t\t\tvar child_ul = target_li.children('ul');\n\t\t\tif(same_parent(source_li, child_ul)){\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tjQuery(this).children('ul:hidden').slideDown();\n\t\t\tinsert_alphabetic(child_ul, source_li);\n\t\t\tupdate_parent(message_id, parent_id);\n    }\n\t});\n\n\tjQuery(\".submit-delete\").click(function() {\n\t\tif(jQuery(this).parents('li:first').siblings('li').length <= 0){\n\t\t\tjQuery(this).parents('li:first').parents('li:first').children('.expander').remove();\n\t\t}\n\t\treturn false;\n\t});\n\n\tfunction insert_alphabetic(child_ul, source_li){\n\t\tvar kids = child_ul.children('li');\n\t\tvar source_text = source_li.children('span.link').children('a').html().toLowerCase();\n\t\tfor(i=0; i<kids.length; i++){\n\t\t\tvar current_text = jQuery(kids[i]).children('span.link').children('a').html().toLowerCase();\n\t\t\tif(source_text < current_text){\n\t\t\t\tsource_li.insertBefore(kids[i]);\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\t\tsource_li.appendTo(child_ul);\n\t}\n\n\tfunction same_parent(source_li, child_ul){\n\t\treturn source_li.parent() == child_ul;\n\t}\n\n\tfunction update_parent(message_id, parent_id){\n\t\tvar path = jQuery('#updatePath').val();\n\t\tjQuery.post(path + '/' + message_id + '.js', {parent_id: parent_id, action: 'update', _method: 'put', only_parent: 'true' },\n\t\t  function(data){\n\t\t\t\tapply_expander();\n\t\t\t\tif(data.length > 0){\n\t\t\t\t\tvar result = eval('(' + data + ')');\n\t\t\t\t\tif(!result.success){\n\t\t\t\t\t\tjQuery.jGrowl.error(result.message);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t  });\n\t\treturn false;\n\t}\n\n\tapply_expander();\n\tfunction apply_expander(){\n\t\tjQuery(\".expander\").remove();\n\t\tjQuery(\".messageContainer ul:hidden li:first-child\").parent().parent().prepend('&lt;a class=&quot;expander&quot; href=&quot;#&quot;&gt;&lt;img src=&quot;expand.png&quot; /&gt;&lt;/a&gt;');\n\t\tjQuery(\".messageContainer ul:visible li:first-child\").parent().parent().prepend('&lt;a class=&quot;expander&quot; href=&quot;#&quot;&gt;&lt;img src=&quot;collapse.png&quot; /&gt;&lt;/a&gt;');\n\t\tjQuery(\".expander\").click(function(){\n\t\t\tvar img = jQuery(this).children('img');\n\t\t\tvar target_ul = jQuery(this).siblings('ul');\n\t\t\tif(img.attr('src') == 'expand.png'){\n\t\t\t\timg.attr('src', 'collapse.png');\n\t\t\t\ttarget_ul.slideDown();\n\t\t\t} else {\n\t\t\t\timg.attr('src', 'expand.png');\n\t\t\t\ttarget_ul.slideUp();\n\t\t\t}\n\t\t\treturn false;\n\t\t});\n\t}\n\n});\n</pre></code>\n<p>In two of the projects I have removed prototype and script.aculo.us in favor of jQuery.  Personally I prefer jQuery and the <a href=\"http://ennerchi.com/projects/jrails\">jRails plugin</a> makes the transition simple.  However, there are probably more people using the default libraries.  Prototype actually comes with the ability to create a nice drag and drop ordered tree built in.  However, I don't love the fact that their 'onUpdate' callback doesn't give the node that was dropped.  Instead you are supposed to serialize the entire tree.  awesome<em>nested</em>set makes it very easy to move just one node and that seems more efficient so you'll see a hack in the code below that constantly records the dropped node into a hash table on the 'onChange' event.  That data is then sent to the server on the 'onUpdate' event.</p>\n<pre><code class=\"javascript\">\nwindow._token = '#{form_authenticity_token}'; // Rails requires this token to validate forms so we'll need to pass it in the ajax request\nwindow._message_updates = new Hash;\nSortable.create('message_tree', {tree:true,\n                                    dropOnEmpty:true,\n                                    scroll:window,\n                                    constraint:false,\n                                    onChange:function(element) {\n                                      // this is a bit of a hack, but basically we just pull the message id from the id of the html element\n                                      var child_id = element.id.replace('message_', '');\n                                      var parent_id = element.up().id.replace('ul_message_', '');\n                                      var previous = element.previous();\n                                      var sibling_id = '';\n                                      if(previous){\n                                        var sibling_id = previous.id.replace('message_', '');\n                                      }\n                                      window._message_updates.set(child_id, [parent_id, sibling_id]);\n                                    },\n                                    onUpdate:function(element) {\n                                      window._message_updates.each(function(pair) {\n                                        var child_id = pair.key;\n                                        var parent_id = pair.value[0];\n                                        var sibling_id = pair.value[1];\n                                        window._message_updates.unset(child_id);\n                                        var url = '/messages/' + child_id + '.js?parent_id=' + parent_id + '&sibling_id=' + sibling_id;\n                                        new Ajax.Request(url, {\n                                          method: 'PUT',\n                                          parameters: {\n                                            authenticity_token: window._token\n                                          }\n                                        });\n                                      });\n                                    }\n                                    });\n</pre></code>\n<p>Here is a link to the default script.aculo.us tree example\n<a href=\"http://script.aculo.us/playground/test/functional/sortable_tree_test.html\">http://script.aculo.us/playground/test/functional/sortable<em>tree</em>test.html</a></p>\n<p>I borrowed many of the ideas from there.  I'm sure there are a few bugs in this so if anyone tries out the code and has problems let me know and I'll make changes as needed.</p>",frontmatter:{title:"Hierarchies, trees, jQuery, Prototype, script.aculo.us and acts_as_nested_set",date:"January 18, 2009",imageUrl:null,image:null}}},pathContext:{path:"/heirarchies-trees-jquery-prototype-scriptaculous-and-acts_as_nested_set"}}}});
//# sourceMappingURL=path---heirarchies-trees-jquery-prototype-scriptaculous-and-acts-as-nested-set-b096c4b4d0ee5850d555.js.map