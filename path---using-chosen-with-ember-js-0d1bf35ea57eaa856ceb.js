webpackJsonp([54506394722116],{1622:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-10-07-using-chosen-with-emberjs/index.md absPath of file >>> MarkdownRemark",html:"<p><a href=\"http://harvesthq.github.io/chosen/\">Harvest's Chosen select control</a> is handy for cleaning up unwieldy or\nhorribly long select boxes. It's a nice little bit of UI sugar that can help make your users happier and we all like\nhappy users right?. <a href=\"http://emberjs.com/\">Ember.js</a> is now our Javascript framework of choice but it doesn't\nalways play well with other libraries and plugins - at least not without messsing around with it for a bit.</p>\n<p><a href=\"http://stackoverflow.com/questions/9968222/ember-js-chosen-integration\">There are others out there that want to\n  use Chosen in their Ember application.</a> I tweaked the last bit of code in this\n  <a href=\"http://stackoverflow.com/questions/9968222/ember-js-chosen-integration\">StackOverflow question</a> a bit\nto produce a working view that extends Ember.Select.</p>\n<p><a href=\"https://gist.github.com/jbasdf/6872750\">Here's gist of the code</a> and here's the code:</p>\n<pre><code class=\"javascript\">\n\n\nApp.Chosen = Ember.Select.extend({\n\n  multiple: false,\n  width: '95%',\n  disableSearchThreshold: 10,\n  searchContains: true,\n  attributeBindings:['multiple', 'width', 'disableSearchThreshold', 'searchContains'],\n\n  didInsertElement: function(){\n    this._super();\n\n    var options = {\n      multiple: this.get('multiple'),\n      width: this.get('width'),\n      disable_search_threshold: this.get('disableSearchThreshold'),\n      search_contains: this.get('searchContains')\n    };\n\n    options.clean_search_text = this.cleanSearchText;\n    options.calling_context = this;\n\n    if(this.get('multiple')){\n      options.placeholder_text_multiple = this.get('prompt');\n    } else {\n      options.placeholder_text_single = this.get('prompt');\n    }\n\n    this.$().chosen(options);\n\n    // observes for new changes on options to trigger an update on Chosen\n    return this.addObserver(this.get(\"optionLabelPath\").replace(/^content/, \"content.@each\"), function() {\n      return this.rerenderChosen();\n    });\n\n  },\n\n  _closeChosen: function(){\n    // trigger escape to close chosen\n    this.$().next('.chosen-container-active').find('input').trigger({type:'keyup', which:27});\n  },\n\n  cleanSearchText: function(option, context){\n    return option.text;\n  },\n\n  rerenderChosen: function(){\n    // Don't trigger Chosen update until after DOM elements have finished rendering.\n    Ember.run.scheduleOnce('afterRender', this, function(){\n      this.$().trigger('chosen:updated');\n    });\n  }\n\n});\n\n</pre></code>\n<p>UPDATE - The ember script tags will show up in the search which is not something you want. I had to modify the chosen.js source code for a solution.\nLuckily it is pretty simple:</p>\n<p><a href=\"https://gist.github.com/jbasdf/6920497\">Gist of chosen.jquery.js modified to include the clean_search_text method.</a></p>\n<p>In the AbstractChosen.prototype.set_default_values method I added an option for a clean_search_text method. You can add this method\n  to your own code and then cleanup the search text to be whatever you like ie remove script tags. The method I used is\ncleanSearchText in the code above. Notice that I pass it to chosen with \"options.clean_search_text = this.cleanSearchText;\"</p>\n<pre><code class=\"javascript\">\nAbstractChosen.prototype.set_default_values = function() {\n  var _this = this;\n\n  this.click_test_action = function(evt) {\n    return _this.test_active_click(evt);\n  };\n  this.activate_action = function(evt) {\n    return _this.activate_field(evt);\n  };\n  // MODIFIED - Added clean_search_text method so that the caller can clean up the search text\n  this.clean_search_text = this.options.clean_search_text || function(option){ return option.html; };\n  this.calling_context = this.options.calling_context;\n  this.active_field = false;\n  this.mouse_on_container = false;\n  this.results_showing = false;\n  this.result_highlighted = null;\n  this.result_single_selected = null;\n  this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === \"\" ? this.options.allow_single_deselect : false;\n  this.disable_search_threshold = this.options.disable_search_threshold || 0;\n  this.disable_search = this.options.disable_search || false;\n  this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;\n  this.group_search = this.options.group_search != null ? this.options.group_search : true;\n  this.search_contains = this.options.search_contains || false;\n  this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;\n  this.max_selected_options = this.options.max_selected_options || Infinity;\n  this.inherit_select_classes = this.options.inherit_select_classes || false;\n  this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;\n  return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;\n};\n</pre></code>\n<p>In the AbstractChosen.prototype.results_option_build method I had to add a conditional where it says MODIFIED:</p>\n<pre><code class=\"javascript\">\n  AbstractChosen.prototype.results_option_build = function(options) {\n    var content, data, _i, _len, _ref;\n\n    content = '';\n    _ref = this.results_data;\n    for (_i = 0, _len = _ref.length; _i < _len; _i++) {\n      data = _ref[_i];\n      // MODIFIED. Don't include the place holder text in the drop down or in searches.\n      if(data.text != this.options.placeholder_text_single &&\n         data.text != this.options.placeholder_text_multiple){\n        if (data.group) {\n          content += this.result_add_group(data);\n        } else {\n          content += this.result_add_option(data);\n        }\n        if (options != null ? options.first : void 0) {\n          if (data.selected && this.is_multiple) {\n            this.choice_build(data);\n          } else if (data.selected && !this.is_multiple) {\n            this.single_set_selected_text(data.text);\n          }\n        }\n      }\n    }\n    return content;\n  };\n</pre></code>\n<p>Last add the call to clean the search text inside the AbstractChosen.prototype.winnow_results method. Look for MODIFIED in the code\nbelow for the method call.</p>\n<pre><code class=\"javascript\">\nAbstractChosen.prototype.winnow_results = function() {\n  var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;\n<p>  this.no<em>results</em>clear();\nresults = 0;\nsearchText = this.get<em>search</em>text();\nescapedSearchText = searchText.replace(/[-[]{}()*+?.,\\^$|#\\s]/g, \"\\$&#x26;\");\nregexAnchor = this.search<em>contains ? \"\" : \"^\";\nregex = new RegExp(regexAnchor + escapedSearchText, 'i');\nzregex = new RegExp(escapedSearchText, 'i');\n_ref = this.results</em>data;\nfor (<em>i = 0, _len = _ref.length; _i &#x3C; _len; _i++) {\noption = _ref[</em>i];\noption.search<em>match = false;\nresults</em>group = null;\nif (this.include<em>option</em>in<em>results(option)) {\nif (option.group) {\noption.group</em>match = false;\noption.active<em>options = 0;\n}\nif ((option.group</em>array<em>index != null) &#x26;&#x26; this.results</em>data[option.group<em>array</em>index]) {\nresults<em>group = this.results</em>data[option.group<em>array</em>index];\nif (results<em>group.active</em>options === 0 &#x26;&#x26; results<em>group.search</em>match) {\nresults += 1;\n}\nresults<em>group.active</em>options += 1;\n}\nif (!(option.group &#x26;&#x26; !this.group<em>search)) {\n// MODIFIED added clean</em>search<em>text\noption.search</em>text = option.group ? option.label : this.clean<em>search</em>text(option, this.calling<em>context);\noption.search</em>match = this.search<em>string</em>match(option.search<em>text, regex);\nif (option.search</em>match &#x26;&#x26; !option.group) {\nresults += 1;\n}\nif (option.search<em>match) {\nif (searchText.length) {\nstartpos = option.search</em>text.search(zregex);\ntext = option.search<em>text.substr(0, startpos + searchText.length) + '</em>' + option.search</em>text.substr(startpos + searchText.length);\noption.search<em>text = text.substr(0, startpos) + '<em>' + text.substr(startpos);\n}\nif (results</em>group != null) {\nresults<em>group.group</em>match = true;\n}\n} else if ((option.group<em>array</em>index != null) &#x26;&#x26; this.results<em>data[option.group</em>array<em>index].search</em>match) {\noption.search<em>match = true;\n}\n}\n}\n}\nthis.result</em>clear<em>highlight();\nif (results &#x3C; 1 &#x26;&#x26; searchText.length) {\nthis.update</em>results<em>content(\"\");\nreturn this.no</em>results(searchText);\n} else {\nthis.update<em>results</em>content(this.results<em>option</em>build());\nreturn this.winnow<em>results</em>set_highlight();\n}\n};</p>\n</pre></code>",frontmatter:{title:"Using Chosen with Ember.js",date:"October 07, 2013",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/using-chosen-with-ember.js"}}}});
//# sourceMappingURL=path---using-chosen-with-ember-js-0d1bf35ea57eaa856ceb.js.map