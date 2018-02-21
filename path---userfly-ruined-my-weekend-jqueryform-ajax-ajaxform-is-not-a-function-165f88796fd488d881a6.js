webpackJsonp([73251516007274],{1620:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2010-07-20-userfly-ruined-my-weekend-jqueryform-ajax-ajaxform-is-not-a-function/index.md absPath of file >>> MarkdownRemark",html:"<p>I've been a big fan of <a href=\"http://userfly.com/\">Userfly</a> because they make usability testing easy. Their tool is really quite amazing. However, this last weekend and into today I've become less of a fan. After a late night deploy last week on a site I've been working on I noticed that none of my javascript worked. Lucky for me Firefox reports the errors. The errors were annoying things like \"jQuery(\"form.ajax\").ajaxForm is not a function\". I knew for a fact that jquery.form.js was loaded. I could see the code. On occasion I've had problems with the javascript caching that Rails uses - it merges all the files together. I turned that off and it wasn't it</p>\n<p>I could only see the error in production. In development everything worked fine. I swore a lot because that is the worst kind of error. yYou feel like you need to debug on the server or setup a staging server. Running my local box in 'production' mode didn't help. I couldn't reproduce the error until I remembered a recent <a href=\"http://railscasts.com/episodes/221-subdomains-in-rails-3\">RailsCast about subdomains in Rails 3</a>. He had mentioned a couple of domains you can use that others have kindly set to point at localhost. I used '<a href=\"http://smackaho.st:3000/&#x27;\">http://smackaho.st:3000/'</a>. Sure enough, the javascript errors started showing up which led me to do a bit more searching. I discovered that if you load jQuery and then load it again it will essentially reset your environment. I searched all my code to make sure I wasn't committing this sin and sure enough I wasn't.</p>\n<p>The fact that the error only showed up when the domain changed to a production style domain led me to the javascript that we've inserted into the site to make third party services work. I started removing them one at a time and sure enough as soon as I removed userfly everything started working again.</p>\n<p>I didn't investigate their code in depth but I'm betting they load jQuery and that it resets the jQuery environment essentially dumping everything I load.</p>\n<p>Lesson learned, sort of. These days we rely on third-party services for everything from analytics to usability to comments and the list goes on. It's hard to not use these services as they make your life a lot easier but don't be afraid to throw them aside if you start getting random errors on your site.</p>",frontmatter:{title:"Userfly Ruined My Weekend &#8211; &#8220;jQuery(&#8220;form.ajax&#8221;).ajaxForm is not a function&#8221;",date:"July 20, 2010",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/userfly-ruined-my-weekend-jqueryform-ajax-ajaxform-is-not-a-function"}}}});
//# sourceMappingURL=path---userfly-ruined-my-weekend-jqueryform-ajax-ajaxform-is-not-a-function-165f88796fd488d881a6.js.map