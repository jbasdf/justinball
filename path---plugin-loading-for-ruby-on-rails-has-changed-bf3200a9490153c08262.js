webpackJsonp([0x9cca9a088c6f],{1454:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-03-22-plugin-loading-for-ruby-on-rails-has-changed/index.md absPath of file >>> MarkdownRemark",html:'<p>I am tired of recreating the login system for Rails for each new project so using the <a href="http://www.railsforum.com/viewtopic.php?id=14216&p=1">RESTful Rails Authentication Tutorial</a> I created a template project that I can use to create new projects.  While adding in the OpenID Authentication component I started getting this error:</p>\n<blockquote>\n/Library/Ruby/Gems/1.8/gems/activesupport-2.0.2/lib/active_support/dependencies.rb:376:in `new_constants_in\': You have a nil object when you didn\'t expect it! (NoMethodError)\n</blockquote>\n<p>after I installed this <a href="http://github.com/josh/open_id_authentication/tree/ruby_openid_2">OpenID plugin</a>.</p>\n<p>The problem occurs because Rails has changed the way that plugins are loaded.  The default folder name was:</p>\n<blockquote>\njosh-open_id_authentication-ruby_openid_2\n</blockquote>\nI renamed it to:\n<blockquote>\nopen_id_authentication\n</blockquote>\nand everything started working again.',frontmatter:{title:"Plugin Loading for Ruby on Rails has Changed.",date:"March 22, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/plugin-loading-for-ruby-on-rails-has-changed"}}}});
//# sourceMappingURL=path---plugin-loading-for-ruby-on-rails-has-changed-bf3200a9490153c08262.js.map