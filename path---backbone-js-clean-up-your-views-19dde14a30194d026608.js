webpackJsonp([0xf2530e3b06fe],{1024:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2011-09-14-backbone-js-clean-up-your-views/index.md absPath of file >>> MarkdownRemark",html:"<p>I've been integrating <a href=\"http://documentcloud.github.com/backbone/\">backbone.js</a> into <a href=\"http://www.oerglue.com\">OER Glue</a>. After years of writing all kinds of spaghetti javascript code to manage client side ajax backbone.js is like manna from heaven. If you're new to backbone.js and you want to use it with Ruby on Rails <a href=\"http://www.jamesyu.org/2011/01/27/cloudedit-a-backbone-js-tutorial-by-example/\">James Yu has a couple of great posts to get you going</a>. The tutorial is for an older version so substitute router for controller and you'll be most of the way to the latest version.</p>\n<p>I followed the example and wrote some admin interface code. When I was writing the code I wondered about doing this over and over again:</p>\n<pre><code class=\"javascript\">\nnew App.Views.Edit({ model: doc });\n</pre></code>\n<p>In the example that code greats a new view anytime you hit the new or edit action. The edit view code binds to the submit form event so that whenever the form is submitted it calls the save action in the edit view:</p>\n<pre><code class=\"javascript\">\n    events: {\n        \"submit form\": \"save\"\n    },\n</pre></code>\n<p>That makes sense, but the one thing the tutorial doesn't teach you to do is clean up the views. In fact I don't think it has to because it just creates a new element and adds it to the DOM with each call to new. However, in my case I use the 'el' attribute to attach my view to the DOM like this:</p>\n<pre><code class=\"javascript\">\nApp.Views.Edit = Backbone.View.extend({\n  el: '#new-custom-view-form',\n  ...\n});\n</pre></code>\n<p>In that case if you keep creating new views with new App.Views.Edit you'll also keep binding the submit form event to the same submit button. The result is that if you press the 'Save' button on the form it will call the event for every view that you've created. That can be very bad since you will end saving models to the server that you didn't intend.</p>\n<p>My solution was to create the view once in the router's initialize method and then I set the model in the view whenever new or edit is called. That works great in my case. The <a href=\"http://workshops.thoughtbot.com/backbone-js-on-rails\">Thoughtbot guys are writing a backbone.js book</a> that explains the creating a 'Swappable' router that calls a 'leave' method whenever the same view is instantiated again. The leave method is responsible for unbinding any events and should remove the element from the DOM. The book isn't done, but what they've put together looks good. I think $49 is pretty steep for an ebook when Pragmatic Programmers is charging more like $20-$30, but I paid the money so it doesn't really matter what I think.</p>\n<p>On a side note the James Yu's tutoral also has this line:</p>\n<pre><code class=\"javascript\">\nBackbone.history.saveLocation('documents/' + model.id);\n</pre></code>\n<p>That won't work in the latest version of backbone.js. Instead do:</p>\n<pre><code class=\"javascript\">\nBackbone.history.navigate('documents/' + model.id);\n</pre></code>",frontmatter:{title:"Backbone.js &#8211; Clean up your views",date:"September 14, 2011",imageUrl:null,image:null}}},pathContext:{path:"/backbone-js-clean-up-your-views"}}}});
//# sourceMappingURL=path---backbone-js-clean-up-your-views-19dde14a30194d026608.js.map