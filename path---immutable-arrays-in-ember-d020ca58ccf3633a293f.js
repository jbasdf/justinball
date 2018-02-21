webpackJsonp([0xef006e38381f],{1306:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2013-08-29-immutable-arrays-in-ember/index.md absPath of file >>> MarkdownRemark",html:"<p>I ran into another interesting situation with ember.js today. We make a request to the server to get a collection\nof objects for the application route. That request sends parameters that the server uses to filter the results\nwhich means that ember will give you an immutable object. The code is pretty typical and looks like this:</p>\n<pre><code class=\"javascript\">\nApp.ApplicationRoute = Ember.Route.extend({\n\n  model: function(){\n    return App.Course.find({user_id: user_id});\n  }\n\n});\n\n</pre></code>\n<p>Note that if you do this and then later on attempt to add new items to the resulting array you might not get any errors -\n  I didn't. Ember does throw an exception but Chrome threw them away. I'm guessing I have something turned off.\n  Since we needed to be able to add new items on the client and have that update the UI. We ended up creating\n  an ArrayProxy, inserting the items into that and then returning that as the model for the route.\n  I don't know if this is the \"right way\" but it does work:</p>\n<pre><code class=\"javascript\">\nApp.ApplicationRoute = Ember.Route.extend({\n\n  contacts: Ember.ArrayProxy.create({content: []}),\n\n  model: function(){\n    //var current_user = this.controllerFor('currentUser');\n    var user_id = 1; //current_user.get('id');\n    var contacts = App.Course.find({professor_id: user_id});\n    contacts.on('didLoad', function(){\n      contacts.forEach(function(course){\n        if(!this.contacts.contains(course)){\n          this.contacts.pushObject(course);\n        }\n      }.bind(this));\n    }.bind(this));\n    return this.contacts;\n  }\n\n});\n\n</pre></code>",frontmatter:{title:"Immutable Arrays in Ember.js",date:"August 29, 2013",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/immutable-arrays-in-ember"}}}});
//# sourceMappingURL=path---immutable-arrays-in-ember-d020ca58ccf3633a293f.js.map