webpackJsonp([48450152795606],{1202:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Justin Ball",author:"Justin Ball"}},markdownRemark:{id:"/Users/jbasdf/projects/justinball/src/posts/2008-10-04-error-while-executing-gem-argumenterror-illformed-requirement/index.md absPath of file >>> MarkdownRemark",html:"<p>I like to use  to deploy my applications because of its simplicity. The other nice thing is that they give you free developer space so\nif you are just getting an application up and running or just need to show it to a client you can do so without having to pay a bunch of\nmoney and spend a bunch of time setting up a VPS.</p>\n<p>There are a few issues now and then. Morph has a large number of gems installed by default but occasionally I use one that they don't have.\nToday I ran into this problem. At first I thought no big deal I can just do a <strong>rake gems:unpack</strong> and drop the gems into the project and\nthen deploy again.</p>\n<p>No go.</p>\n<p>Instead I get the following error:</p>\n<blockquote>\n    **ERROR:  While executing gem ... (ArgumentError)\n        Illformed requirement [\"\"= 2.2.2\"\"]**\n</blockquote>\n<p>Turns out there is current a bug in Rails 2.1.0 and 2.2.0 that causes the unpack to barf if you specify a version number. Here's the link:</p>\n<p>Since I am using the latest version of all the gems, my solution was to temporarily remove the version numbers from environment.rb.</p>\n<p>So this\n<strong>config.gem 'ruby-openid', :lib => 'openid', :version => '2.1.2'</strong>\nbecomes this\n<strong>config.gem 'ruby-openid', :lib => 'openid'</strong></p>\n<p>Then I did:\n<strong>rake gems:unpack</strong>\nand everything worked fine.</p>\n<p>Do remember to put the version numbers back when you are done.</p>",frontmatter:{title:"ERROR:  While executing gem (ArgumentError)  Illformed requirement",date:"October 04, 2008",imageUrl:null,structuredHtml:null,image:null}}},pathContext:{path:"/error-while-executing-gem-argumenterror-illformed-requirement"}}}});
//# sourceMappingURL=path---error-while-executing-gem-argumenterror-illformed-requirement-2edc06d65347901e7454.js.map