webpackJsonp([0xba0a70ba38de],{1226:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2014-03-09-firefox-vimeo-and-froogaloop-have-a-little-problem/index.md absPath of file >>> MarkdownRemark",html:"<p>On one of our latest projects we're integrating with <a href=\"http://www.vimeo.com\">Vimeo</a>. They provide a great <a href=\"http://developer.vimeo.com/player/js-api/\">Video player API</a> that makes it pretty simple to interact with videos.\nVimeo even provides the <a href=\"https://github.com/vimeo/player-api/tree/master/javascript\">Froogaloop library</a> that wraps up all the communication between the iframe where the video lives and your page.</p>\n<h3>What We Need</h3>\nThe requirement was to show other content once the video finished playing. That seems easy enough and really it is:\n<pre><code class=\"javascript\">\nvar VimeoStuff = {\n\n  init: function(){\n    $.each($('iframe.vimeo'), function(i, iframe){\n      this.setupEvents(iframe)\n    }.bind(this));\n  }\n\n  setupEvents: function(iframe){\n    var player = $f(iframe);\n\n    player.addEvent('ready', function(player_id){\n      player.addEvent('finish', onFinish);\n    });\n\n    function onFinish(id){\n      // Show other content\n    }\n\n  }\n\n};\n\n$(document).ready(function(){\n  VimeoStuff.init();\n});\n</pre></code>\n<h3>The Problem</h3>\nWe do most of our development using Chrome and so everything worked great until someone tried to use the application with Firefox. I know, most people will tell you that\nInternet Explorer is pure evil and a total piece of junk. I hate to say it but Firefox has its rough spots as well. For some reason in Firefox the events from the Vimeo player\niframe never fired. After some digging we found this semi-related bug <a href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=548397\">indicating if an iframe isn't visible then\nwindow.getComputedStyle() would return null</a>. It turns out that if an iframe isn't visible when a page loads and you attempt to use the Froogaloop library to monitor\nevents coming from that window you are out of luck - the 'ready' event will never fire and you won't be able to monitor any other events coming from the iframe.\n<p>The solution was something we needed anyway. Orginally, we were loading iframes for a bunch of videos on the page. That's a bad idea anyway since loading 20 or 30 hidden videos on a page\nisn't especially performant.</p>\n <h3>A Fix</h3>\nThe fix was pretty simple. Instead of setting the 'src' tag on every iframe and loading the video at startup we set a 'data-src' on every iframe and left the src tag empty. We have a helper that looks like this:\n<pre><code class=\"ruby\">\ndef video_embed(video)\n  %Q{<iframe id=\"#{dom_id(video)}\"\n          data-modal=\"moda_#{dom_id(video)}\"\n          class=\"vimeo\"\n          data-src=\"//player.vimeo.com/video/#{video.vimeo_id}?api=1&player_id=#{video.id}\"\n          width=\"500\"\n          height=\"281\"\n          frameborder=\"0\" webkitallowFullScreen mozallowFullScreen allowFullScreen></iframe>}\nend\n</pre></code>\n<p>Then in our javascript we only set the iframe src when we display the modal. After that we watch for the 'ready' event from Froogaloop and everything works like magic again:</p>\n<pre><code class=\"javascript\">\nvar VimeoStuff = {\n\n  init: function(){\n\n    $.each($('.modal'), function(i, modal){\n      modal = $(modal);\n\n      modal.on('show.bs.modal', function(){\n        var iframe = $('iframe.vimeo', modal);\n        iframe.attr('src', iframe.data('src'));\n        this.setupEvents(iframe[0]);\n      }.bind(this));\n\n    }.bind(this));\n  },\n\n  setupEvents: function(iframe){\n    var player = $f(iframe);\n\n    player.addEvent('ready', function(player_id){\n      player.addEvent('finish', onFinish);\n    });\n\n    function onFinish(id){\n      // Show other content\n    }\n\n  }\n\n};\n\n$(document).ready(function(){\n  PikkitUserAds.init();\n});\n\n</pre></code>",frontmatter:{title:"Firefox, Vimeo and Froogaloop Have a Little Problem",date:"March 09, 2014",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/firefox-vimeo-and-froogaloop-have-a-little-problem"}}}});
//# sourceMappingURL=path---firefox-vimeo-and-froogaloop-have-a-little-problem-b5b83c3f7bd415714a04.js.map