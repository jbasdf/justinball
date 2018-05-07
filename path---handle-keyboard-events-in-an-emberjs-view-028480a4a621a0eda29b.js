webpackJsonp([637657406290],{2013:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-08-28-handle-keyboard-events-in-an-emberjs-view/index.md absPath of file >>> MarkdownRemark",html:"<p>We ran into a situation where we wanted to be able to close our ember.js view (a modal) when the user pressed the esc key.\nAt first I thought the solution was easy and I ended up with some code like this:</p>\n<pre><code class=\"javascript\">\nApp.ModalView = Ember.View.extend({\n\n  didInsertElement: function(){\n    $(document).on('keyup', { _self: this }, this.esc_close);\n  },\n\n  esc_close: function(e){\n    if(e.which == 27){\n      e.data._self.close();\n    }\n  },\n\n  close: function(controller){\n    $(document).off('keyup', this.esc_close);\n    this.get('controller').send('modal_close');\n  }\n\n});\n</pre></code>\n<p>That code worked great until we ran into a situation where the ember view was removed from the DOM via a transition rather\n  than by its own close method. In that situation \"this.get('controller')\" would be null the next time the user pressed\n  the esc key since the \"esc_close\" method was still bound to the document's keyup event but the view had actually\n  gone away along with it's related controller. Since it's always nice/better to do things the ember way\n  that led us to investigate the view's eventManager</p>\n<pre><code class=\"javascript\">\nApp.ModalView = Ember.View.extend({\n\n  didInsertElement: function() {\n    return this.$().focus();\n  },\n\n  eventManager: Ember.Object.create({\n    keyUp: function(event, view) {\n      if(event.which == 27){\n        view.get('controller').send('modal_close');\n      }\n    }\n  })\n\n});\n</pre></code>\n<p>We could have also just defined a keyUp method directly on the view, but it's always fun to play with new stuff.\nUnfortunately, this didn't work. It looks like it should and it fact it does exactly what you've asked it to do. It\nwatches for keyUp events on the view, but not global keyUp events. The user has to click on some part of your view\nto give it focus and then press the esc key. We even tried setting the focus and add tabIndex=\"0\" to our top level div.\nThose techniques kind of worked, but it still didn't feel right. We found that we still had to click on the page to get\nthe keyUp event to make it into our view. For end users that wasn't going to work so back to our original code we went.\nHere's what ended up working:</p>\n<pre><code class=\"javascript\">\nApp.ModalView = Ember.View.extend({\n\n  didInsertElement: function(){\n    $(document).on('keyup', { _self: this }, this.esc_close);\n  },\n\n  esc_close: function(e){\n    if(e.which == 27){\n      e.data._self.close();\n    }\n  },\n\n  close: function(controller){\n    this.get('controller').send('modal_close');\n  },\n\n  willDestroyElement: function(){\n    $(document).off('keyup', this.esc_close);\n  }\n\n});\n\n</pre></code>\n<p>All we needed to do was be sure to get rid of our keyup binding in 'willDestroyElement' rather than trying to handle it on\n  our own in the close method. Now we can still be bound to the global key events but ember will ensure that our handlers\ngo away when the view does.</p>",frontmatter:{title:"Handle Keyboard events in an Ember.js view",date:"August 28, 2013",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{}}}});
//# sourceMappingURL=path---handle-keyboard-events-in-an-emberjs-view-028480a4a621a0eda29b.js.map