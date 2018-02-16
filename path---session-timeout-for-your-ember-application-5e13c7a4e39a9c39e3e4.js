webpackJsonp([0x7f93221f8ed1],{1441:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-01-02-session-timeout-for-your-ember-application/index.md absPath of file >>> MarkdownRemark",html:"<p>We ran into an issue with sessions timing out while users were doing client side stuff with an Ember application we're building.\nOnce the session timed out they could no longer make authenticated requests of course and all ajax calls would fail.</p>\n<p>Here's a couple of bits of code that might be helpful.</p>\n<p>First capture 401 errors in your REST adapter and send the user to the sign in page if they've been logged out:</p>\n<pre><code class=\"javascript\">\n\nvar Adapter = DS.RESTAdapter.extend({\n\n  ajaxError: function(jqXHR){\n    if(jqXHR.status == 401){\n      window.location.href = '/users/sign_in?timeout=true';\n    }\n    if(jqXHR){\n      jqXHR.then = null;\n    }\n    return jqXHR;\n  }\n});\n\n</pre></code>\n<p>We wanted something a bit more user friendly than a redirect so we proactively warn the user and then send keep alives as needed.\nThe solution is an Ember component that uses Twitter Bootstrap modals to warn the user. The code assumes\nyou have Twitter Bootstrap setup. If you don't want to use Twitter Bootstrap then it should be pretty easy to swap out the\nhtml in the Handlebars template for whatever framework modal you want to use. Check out the comments for more details.</p>\n<p><a href=\"https://gist.github.com/jbasdf/8228953\">Gist for Handlebars template</a></p>\n<pre><code class=\"html\">\n  &lt;div class=&quot;modal fade&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-hidden=&quot;true&quot;&gt;\n    &lt;div class=&quot;modal-dialog&quot;&gt;\n      &lt;div class=&quot;modal-content&quot;&gt;\n        &lt;div class=&quot;modal-header&quot;&gt;\n          &lt;button {{action &#039;close&#039;}} type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/button&gt;\n          &lt;h4 class=&quot;modal-title&quot; id=&quot;tmModalLabel&quot;&gt;Inactivity Warning&lt;/h4&gt;\n        &lt;/div&gt;\n        &lt;div class=&quot;modal-body&quot;&gt;\n          You will be logged out in 30 seconds.\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n</pre></code>\n<p><a href=\"https://gist.github.com/jbasdf/8229029\">Gist for Ember component javascript</a></p>\n<pre><code class=\"javascript\">\n\nApp.InactivityWarningComponent = Ember.Component.extend({\n\n  active: false,\n  inactiveTimeout: 12000000, // Amount of time before we redirect to the sign in screen - the session should have expired by this point. (20 minutes)\n  warningTimeout: 30000,     // Amount of time the user has to perform an action before the last keep alive fires - 30 seconds\n  timeout: 1170000,          // 19.5 minutes. We want to be less than the 20 minute timeout to be sure the session is renewed.\n\n  didInsertElement: function(){\n    //if($('meta[name=\"in-development\"]').attr('content')){ return; } // Uncomment and add a meta tag to your head if you want to avoid session timeout in development\n    var context = this;\n\n    var keepActive = function(){\n      if(context.active){\n        // Keep the session alive\n        $.ajax({\n          url: \"/stayin_alive\"\n        }).done(function(result){\n\n          // Go inactive until the user moves the mouse or presses a key\n          context.active = false;\n\n          // The user now has another 20 minutes before the session times out\n          // Restart the timer to keep the user logged in\n          Ember.run.later(context, keepActive, context.timeout);\n\n          // Set a timer to show a modal indicating the user is about to be logged out.\n          Ember.run.debounce(context, context.show, context.timeout - context.warningTimeout);\n\n          // Set a timer that will send the user to the login screen\n          Ember.run.debounce(context, context.forceLogin, context.inactiveTimeout);\n        });\n      }\n    };\n\n    $(window).mousemove(function(e){\n      context.active = true;\n      // Make sure the modal is hidden. This will cause the modal to hide if the user moves the mouse or presses a key.\n      // Use debounce so we don't call it over and over again since this method is called from mousemove\n      Ember.run.debounce(context, context.hide, 1000);\n    });\n\n    $(window).keypress(function(e){\n      context.active = true;\n      // Make sure the modal is hidden. This will cause the modal to hide if the user moves the mouse or presses a key.\n      context.hide();\n    });\n\n    // The user has 5 minutes before they are logged out. We need to send a keep Active before then.\n    Ember.run.later(context, keepActive, context.timeout);\n\n  },\n\n  forceLogin: function(){\n    window.location.href = '/users/sign_out?timeout=true';\n  },\n\n  show: function(){\n    // Warn the user that they will be logged out if we are inactive\n    if(this.active === false){\n      // Start countdown timer\n      this.$('.modal').modal('show');\n    }\n  },\n\n  hide: function(){\n    this.$('.modal').modal('hide');\n  }\n\n});\n\n</pre></code>",frontmatter:{title:"Session timeout for your Ember application",date:"January 02, 2014",imageUrl:null,image:null}}},pathContext:{path:"/session-timeout-for-your-ember-application"}}}});
//# sourceMappingURL=path---session-timeout-for-your-ember-application-5e13c7a4e39a9c39e3e4.js.map